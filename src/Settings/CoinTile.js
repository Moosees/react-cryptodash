import React from 'react';
import { AppContext } from '../App/AppProvider';
import CoinImage from '../Shared/CoinImage';
import { DeletableTile, DisabledTile, SelectableTile } from '../Shared/Tile';
import CoinHeader from './CoinHeader';

const CoinTile = ({ coinKey, topSection }) => (
  <AppContext.Consumer>
    {({ coinList, isInFavorites, addCoin, removeCoin }) => {
      let coin = coinList[coinKey];
      let TileClass = SelectableTile;
      if (topSection) {
        TileClass = DeletableTile;
      } else if (isInFavorites(coinKey)) {
        TileClass = DisabledTile;
      }
      return (
        <TileClass
          onClick={() => (topSection ? removeCoin(coinKey) : addCoin(coinKey))}
        >
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
