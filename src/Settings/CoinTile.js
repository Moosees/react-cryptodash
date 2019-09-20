import React from 'react';
import { AppContext } from '../App/AppProvider';
import CoinImage from '../Shared/CoinImage';
import { DeletableTile, SelectableTile } from '../Shared/Tile';
import CoinHeader from './CoinHeader';

const CoinTile = ({ coinKey, topSection }) => (
  <AppContext.Consumer>
    {({ coinList }) => {
      let coin = coinList[coinKey];
      let TileClass = SelectableTile;
      if (topSection) {
        TileClass = DeletableTile;
      }

      return (
        <TileClass>
          <CoinHeader
            name={coin.CoinName}
            symbol={coin.Symbol}
            topSection={topSection}
          />
          <CoinImage coin={coin} />
        </TileClass>
      );
    }}
  </AppContext.Consumer>
);

export default CoinTile;
