import React from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from './AppProvider';

const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
  margin-bottom: 40px;
`;

const Logo = styled.div`
  font-size: 1.5em;
`;

const ControlButtonElem = styled.div`
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      color: #ccc;
      text-shadow: 0 0 25px #03ff03;
    `}
`;

const ControlButton = ({ name }) => (
  <AppContext.Consumer>
    {({ page, setPage }) => (
      <ControlButtonElem active={page === name} onClick={() => setPage(name)}>
        {toProperCase(name)}
      </ControlButtonElem>
    )}
  </AppContext.Consumer>
);

const toProperCase = lower =>
  lower.charAt(0).toUpperCase() + lower.substring(1);

const AppBar = () => (
  <Bar>
    <Logo>CryptoDash</Logo>
    <div />
    <AppContext.Consumer>
      {({ currentFavorite }) =>
        currentFavorite ? <ControlButton name="dashboard" /> : <div />
      }
    </AppContext.Consumer>
    <ControlButton name="settings" />
  </Bar>
);

export default AppBar;
