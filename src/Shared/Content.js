import React from 'react';
import { AppContext } from '../App/AppProvider';

const Content = ({ children }) => (
  <AppContext.Consumer>
    {({ coinList, prices, firstVisit }) => {
      if (!coinList) {
        return <div>Loading Coins...</div>;
      } else if (!prices && !firstVisit) {
        return <div>Loading Prices...</div>;
      } else {
        return <>{children}</>;
      }
    }}
  </AppContext.Consumer>
);

export default Content;
