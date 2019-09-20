import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import { SelectableTile } from '../Shared/Tile';

export const CoinGridStyled = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(5, 1fr);
`;

const CoinGrid = () => (
  <AppContext.Consumer>
    {({ coinList }) => (
      <CoinGridStyled>
        {Object.keys(coinList).map(coinKey => (
          <SelectableTile key={coinKey}>{coinKey}</SelectableTile>
        ))}
      </CoinGridStyled>
    )}
  </AppContext.Consumer>
);

export default CoinGrid;
