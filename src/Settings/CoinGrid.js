import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import CoinTile from './CoinTile';

export const CoinGridStyled = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  margin: 30px auto;
`;

const getCoinsToDisplay = (coinList, favorites, filteredCoins, topSection) => {
  const filteredCoinKeys = Object.keys(filteredCoins);
  if (topSection) {
    return favorites;
  } else if (filteredCoinKeys.length > 0) {
    return filteredCoinKeys;
  } else {
    return Object.keys(coinList).slice(0, 100);
  }
};

const CoinGrid = ({ topSection }) => (
  <AppContext.Consumer>
    {({ coinList, favorites, filteredCoins }) => (
      <CoinGridStyled>
        {getCoinsToDisplay(coinList, favorites, filteredCoins, topSection).map(
          coinKey => (
            <CoinTile key={coinKey} coinKey={coinKey} topSection={topSection} />
          )
        )}
      </CoinGridStyled>
    )}
  </AppContext.Consumer>
);

export default CoinGrid;
