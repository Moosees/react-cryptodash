import React, { Component, createContext } from 'react';

const cc = require('cryptocompare');

export const AppContext = createContext();

const MAX_FAVORITES = 10;

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
      localStorage.setItem(
        'cryptoDash',
        JSON.stringify({
          favorites: this.state.favorites
        })
      );
      this.setState({ page: 'dashboard', firstVisit: false });
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
      isInFavorites: coinKey => this.state.favorites.includes(coinKey),
      confirmFavorites,
      addCoin,
      removeCoin
    };
  }

  componentDidMount() {
    this.fetchCoins();
  }

  fetchCoins = async () => {
    try {
      let coinList = await cc.coinList();
      this.setState({ coinList: coinList.Data });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
