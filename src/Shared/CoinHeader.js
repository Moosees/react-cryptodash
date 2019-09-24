import React from 'react';
import styled from 'styled-components';
import { DeletableTile, SelectableTile } from './Tile';

export const CoinHeaderStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
`;

export const JustifyRight = styled.div`
  justify-self: right;
`;

const Icon = styled.div`
  background-color: rgba(30, 30, 30, 0.7);
  display: none;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  top: -15px;
`;

export const AddIcon = styled(Icon)`
  ${SelectableTile}:hover & {
    border: 1px solid #00ff00;
    display: block;
    color: #00ff00;
  }
`;

export const DeleteIcon = styled(Icon)`
  ${DeletableTile}:hover & {
    border: 1px solid #ff0000;
    display: block;
    color: #ff0000;
  }
`;

const CoinHeader = ({ name, symbol, topSection }) => (
  <CoinHeaderStyled>
    {topSection ? <DeleteIcon>Delete?</DeleteIcon> : <AddIcon>Add?</AddIcon>}
    <div>{name}</div>
    <JustifyRight>{symbol}</JustifyRight>
  </CoinHeaderStyled>
);

export default CoinHeader;
