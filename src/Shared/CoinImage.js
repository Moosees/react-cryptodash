import React from 'react';

const CoinImage = ({ coin: { CoinSymbol, ImageUrl }, style }) => (
  <img
    alt={CoinSymbol}
    style={style || { height: '50px' }}
    src={`http://cryptocompare.com/${ImageUrl}`}
  />
);

export default CoinImage;
