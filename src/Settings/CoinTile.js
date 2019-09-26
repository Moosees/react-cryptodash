import React from 'react';
import { AppContext } from '../App/AppProvider';
import CoinHeader from '../Shared/CoinHeader';
import CoinImage from '../Shared/CoinImage';
import { DeletableTile, DisabledTile, SelectableTile } from '../Shared/Tile';

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
          <CoinImage coin={coin} />
          <CoinHeader
            name={coin.CoinName}
            symbol={coin.Symbol}
            topSection={topSection}
          />
        </TileClass>
      );
    }}
  </AppContext.Consumer>
);

export default CoinTile;
