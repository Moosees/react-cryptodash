import React, { Component, createContext } from 'react';

export const AppContext = createContext();

export class AppProvider extends Component {
  state = { page: 'dashboard', setPage: page => this.setState({ page }) };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
