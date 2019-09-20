import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import CoinTile from './CoinTile';

export const CoinGridStyled = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 20px;
`;

const getCoinsToDisplay = coinList => Object.keys(coinList).slice(0, 100);

const CoinGrid = () => (
  <AppContext.Consumer>
    {({ coinList }) => (
      <CoinGridStyled>
        {getCoinsToDisplay(coinList).map(coinKey => (
          <CoinTile key={coinKey} coinKey={coinKey} />
        ))}
      </CoinGridStyled>
    )}
  </AppContext.Consumer>
);

export default CoinGrid;
