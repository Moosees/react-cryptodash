import React from 'react';
import styled from 'styled-components';
import { DeletableTile } from '../Shared/Tile';

export const CoinHeaderStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
`;

export const CoinSymbol = styled.div`
  justify-self: right;
`;

export const DeleteIcon = styled.div`
  bottom: 5px;
  display: none;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  ${DeletableTile}:hover & {
    display: block;
    color: #ff0000;
  }
`;

const CoinHeader = ({ name, symbol, topSection }) => (
  <CoinHeaderStyled>
    {topSection ? <DeleteIcon>Delete?</DeleteIcon> : null}
    <div>{name}</div>
    <CoinSymbol>{symbol}</CoinSymbol>
  </CoinHeaderStyled>
);

export default CoinHeader;
