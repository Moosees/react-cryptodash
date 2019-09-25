import React, { Component, createContext } from 'react';

const cc = require('cryptocompare');

export const AppContext = createContext();

const MAX_FAVORITES = 15;

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

    const confirmFavorites = () => {
      const currentFavorite = this.state.favorites[0];
      this.saveToLocalStorage(this.state.favorites, currentFavorite);
      this.setState(
        { page: 'dashboard', firstVisit: false, currentFavorite },
        () => {
          this.fetchPrices();
        }
      );
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
      ...savedSettings(),
      setPage: page => this.setState({ page }),
      setFilteredCoins: filteredCoins => this.setState({ filteredCoins }),
      setCurrentFavorite: coinKey =>
        this.setState(
          { currentFavorite: coinKey },
          this.saveToLocalStorage(this.state.favorites, coinKey)
        ),
      isInFavorites: coinKey => this.state.favorites.includes(coinKey),
      confirmFavorites,
      addCoin,
      removeCoin
    };
  }

  componentDidMount() {
    this.fetchCoins();
    this.fetchPrices();
  }

  fetchCoins = async () => {
    try {
      let coinList = await cc.coinList();
      this.setState({ coinList: coinList.Data });
    } catch (e) {
      console.error(e);
    }
  };

  fetchPrices = async () => {
    if (!this.state.firstVisit) {
      let prices = await this.getPrices();
      this.setState({ prices });
    } else return;
  };

  getPrices = async () => {
    const { favorites } = this.state;
    let data = [];
    for (let i = 0; i < favorites.length; i++) {
      try {
        let priceData = await cc.priceFull(favorites[i], 'USD');
        if (!priceData[favorites[i]].USD) {
          throw new Error('Could not fetch USD price data');
        } else {
          data.push(priceData);
        }
      } catch (e) {
        console.error(`Error fetching price data for ${favorites[i]}:`, e);
      }
    }
    return data;
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
