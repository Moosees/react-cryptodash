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

const getCoinsToDisplay = (coinList, favorites, topSection) =>
  topSection ? favorites : Object.keys(coinList).slice(0, 100);

const CoinGrid = ({ topSection }) => (
  <AppContext.Consumer>
    {({ coinList, favorites }) => (
      <CoinGridStyled>
        {getCoinsToDisplay(coinList, favorites, topSection).map(coinKey => (
          <CoinTile key={coinKey} coinKey={coinKey} topSection={topSection} />
        ))}
      </CoinGridStyled>
    )}
  </AppContext.Consumer>
);

export default CoinGrid;
