import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import PriceTile from './PriceTile';

export const PriceGrid = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(5, 1fr);
  margin: 30px auto;
`;

const PriceList = () => (
  <AppContext.Consumer>
    {({ prices }) => (
      <PriceGrid>
        {prices.map((price, i) => {
          const coinKey = Object.keys(price)[0];
          return (
            <PriceTile
              key={coinKey}
              coinKey={coinKey}
              price={price[coinKey].USD}
              index={i}
            />
          );
        })}
      </PriceGrid>
    )}
  </AppContext.Consumer>
);

export default PriceList;
