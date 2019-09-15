import React from 'react';
import styled, { css } from 'styled-components';

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
      text-shadow: 0 0 60px #03ff03;
    `}
`;

const ControlButton = ({ name, active }) => (
  <ControlButtonElem active={active}>{toProperCase(name)}</ControlButtonElem>
);

const toProperCase = lower =>
  lower.charAt(0).toUpperCase() + lower.substring(1);

const AppBar = () => (
  <Bar>
    <Logo>CryptoDash</Logo>
    <div />
    <ControlButton active name="dashboard" />
    <ControlButton name="settings" />
  </Bar>
);

export default AppBar;
