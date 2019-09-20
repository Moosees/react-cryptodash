import React from 'react';
import styled from 'styled-components';
import { DeletableTile, SelectableTile } from '../Shared/Tile';

export const CoinHeaderStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
`;

export const CoinSymbol = styled.div`
  justify-self: right;
`;

const Icon = styled.div`
  bottom: 5px;
  display: none;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
`;

export const AddIcon = styled(Icon)`
  ${SelectableTile}:hover & {
    display: block;
    color: #00ff00;
  }
`;

export const DeleteIcon = styled(Icon)`
  ${DeletableTile}:hover & {
    display: block;
    color: #ff0000;
  }
`;

const CoinHeader = ({ name, symbol, topSection }) => (
  <CoinHeaderStyled>
    {topSection ? <DeleteIcon>Delete?</DeleteIcon> : <AddIcon>Add?</AddIcon>}
    <div>{name}</div>
    <CoinSymbol>{symbol}</CoinSymbol>
  </CoinHeaderStyled>
);

export default CoinHeader;
