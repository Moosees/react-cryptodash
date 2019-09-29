import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';

export const HeaderWelcome = styled.h2`
  margin: 80px 20px -20px;
  & span {
    border-bottom: 2px solid #ff0000;
    font-size: 1.2em;
  }
`;

const WelcomeMessage = () => (
  <AppContext.Consumer>
    {({ firstVisit }) =>
      firstVisit ? (
        <HeaderWelcome>
          Welcome to <span>CryptoDash</span>, please select your favorite coins
          to begin.
        </HeaderWelcome>
      ) : null
    }
  </AppContext.Consumer>
);

export default WelcomeMessage;
