import React from 'react';
import styled from 'styled-components';

export const CoinImageStyled = styled.img`
  bottom: 5px;
  height: 50px;
  position: absolute;
  right: 5px;
`;

export const CoinImageSpotlight = styled.img`
  display: block;
  height: 120px;
  margin: 0 auto 20px;
`;

const CoinImage = ({ coin: { CoinSymbol, ImageUrl }, spotlight }) => {
  const CoinImageClass = spotlight ? CoinImageSpotlight : CoinImageStyled;
  return (
    <CoinImageClass
      alt={CoinSymbol}
      src={`http://cryptocompare.com/${ImageUrl}`}
    />
  );
};

export default CoinImage;
