import React from 'react';
import { AppContext } from '../App/AppProvider';
import CoinImage from '../Shared/CoinImage';
import { SelectableTile } from '../Shared/Tile';
import CoinHeader from './CoinHeader';

const CoinTile = ({ coinKey }) => (
  <AppContext.Consumer>
    {({ coinList }) => {
      let coin = coinList[coinKey];
      const TileClass = SelectableTile;

      return (
        <TileClass>
          <CoinHeader name={coin.CoinName} symbol={coin.Symbol} />
          <CoinImage coin={coin} />
        </TileClass>
      );
    }}
  </AppContext.Consumer>
);

export default CoinTile;
