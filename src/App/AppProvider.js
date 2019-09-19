import React, { Component, createContext } from 'react';

const cc = require('cryptocompare');

export const AppContext = createContext();

export class AppProvider extends Component {
  constructor(props) {
    super(props);

    const confirmFavorites = () => {
      this.setState({ page: 'dashboard', firstVisit: false });
      localStorage.setItem(
        'cryptoDash',
        JSON.stringify({
          firstVisit: false
        })
      );
    };

    const savedSettings = () => {
      let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
      if (!cryptoDashData) {
        return { page: 'settings', firstVisit: true };
      } else {
        return {};
      }
    };

    this.state = {
      page: 'dashboard',
      ...savedSettings(),
      setPage: page => this.setState({ page }),
      confirmFavorites: confirmFavorites
    };
  }

  componentDidMount() {
    this.fetchCoins();
  }

  fetchCoins = async () => {
    let coinList = await cc.coinList().Data;
    this.setState({ coinList });
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
