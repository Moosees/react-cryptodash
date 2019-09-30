import React, { Component, createContext } from 'react';
import moment from 'moment';

const cc = require('cryptocompare');
cc.setApiKey(process.env.REACT_APP_CC_KEY);

export const AppContext = createContext();

const MAX_FAVORITES = 15;
const TIME_UNITS = 10;

export class AppProvider extends Component {
  constructor(props) {
    super(props);

    const savedSettings = () => {
      let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
      if (!cryptoDashData) {
        return { page: 'settings', firstVisit: true };
      } else {
        return cryptoDashData;
      }
    };

    const changeChartInterval = value =>
      this.setState(
        { timeInterval: value, historical: null },
        this.fetchHistorical
      );

    const confirmFavorites = () => {
      const currentFavorite = this.state.favorites[0];
      this.saveToLocalStorage(this.state.favorites, currentFavorite);
      this.setState(
        {
          page: 'dashboard',
          firstVisit: false,
          historical: null,
          prices: null,
          currentFavorite
        },
        () => {
          this.fetchPrices();
          this.fetchHistorical();
        }
      );
    };

    const setCurrentFavorite = coinKey => {
      this.setState({ currentFavorite: coinKey, historical: null }, () => {
        this.saveToLocalStorage(this.state.favorites, coinKey);
        this.fetchHistorical();
      });
    };

    const addCoin = coinKey => {
      let favorites = [...this.state.favorites];
      if (favorites.length < MAX_FAVORITES && !favorites.includes(coinKey)) {
        favorites.push(coinKey);
        this.setState({ favorites });
      }
    };

    const removeCoin = coinKey => {
      let favorites = [...this.state.favorites].filter(
        favorite => favorite !== coinKey
      );
      this.setState({ favorites });
    };

    this.state = {
      page: 'dashboard',
      coinList: null,
      favorites: [],
      filteredCoins: {},
      historical: null,
      prices: null,
      timeInterval: 'months',
      ...savedSettings(),
      setPage: page => this.setState({ page }),
      setFilteredCoins: filteredCoins => this.setState({ filteredCoins }),
      isInFavorites: coinKey => this.state.favorites.includes(coinKey),
      changeChartInterval,
      confirmFavorites,
      setCurrentFavorite,
      addCoin,
      removeCoin
    };
  }

  componentDidMount() {
    this.fetchCoins();
    this.fetchPrices();
    this.fetchHistorical();
  }

  fetchCoins = async () => {
    try {
      const coinList = await cc.coinList();
      this.setState({ coinList: coinList.Data });
    } catch (e) {
      console.error(e);
    }
  };

  fetchPrices = async () => {
    if (!this.state.firstVisit) {
      const prices = await this.getPrices();
      this.setState({ prices });
    } else return;
  };

  fetchHistorical = async () => {
    if (!this.state.firstVisit) {
      const data = await this.getHistorical();
      const historical = [
        {
          name: this.state.currentFavorite,
          data: data.map((price, i) => [
            moment()
              .subtract({ [this.state.timeInterval]: TIME_UNITS - i })
              .valueOf(),
            price.USD
          ])
        }
      ];
      this.setState({ historical });
    } else return;
  };

  getPrices = async () => {
    const { favorites } = this.state;
    let data = [];
    for (let i = 0; i < favorites.length; i++) {
      let priceData = {};
      try {
        priceData = await cc.priceFull(favorites[i], 'USD');
      } catch (e) {
        console.error(`Error fetching price data for ${favorites[i]}:`, e);
      }
      if (!Object.keys(priceData).length) {
        data.push({
          [favorites[i]]: { USD: { PRICE: 0, CHANGEPCT24HOUR: 0 } }
        });
      } else {
        data.push(priceData);
      }
    }
    return data;
  };

  getHistorical = async () => {
    let promises = [];
    for (let units = TIME_UNITS; units > 0; units--) {
      promises.push(
        cc.priceHistorical(
          this.state.currentFavorite,
          ['USD'],
          moment()
            .subtract({ [this.state.timeInterval]: units })
            .toDate()
        )
      );
    }
    return Promise.all(promises);
  };

  saveToLocalStorage = (favorites, currentFavorite) => {
    localStorage.setItem(
      'cryptoDash',
      JSON.stringify({
        favorites,
        currentFavorite
      })
    );
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
