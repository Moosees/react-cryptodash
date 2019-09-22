import React from 'react';
import styled from 'styled-components';

export const CoinImageStyled = styled.img`
  bottom: 5px;
  height: 50px;
  position: absolute;
  right: 5px;
`;

const CoinImage = ({ coin: { CoinSymbol, ImageUrl } }) => (
  <CoinImageStyled
    alt={CoinSymbol}
    src={`http://cryptocompare.com/${ImageUrl}`}
  />
);

export default CoinImage;
