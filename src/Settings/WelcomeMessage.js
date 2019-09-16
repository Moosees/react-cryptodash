import React from 'react';
import { AppContext } from '../App/AppProvider';

const WelcomeMessage = () => (
  <AppContext.Consumer>
    {({ firstVisit }) =>
      firstVisit ? (
        <div>
          Welcome to CryptoDash, please select your favorite coin to begin.
        </div>
      ) : null
    }
  </AppContext.Consumer>
);

export default WelcomeMessage;
