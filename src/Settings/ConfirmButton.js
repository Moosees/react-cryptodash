import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import {
  boxShadowGreen,
  boxShadowLight,
  color3,
  fontSizeL
} from '../Shared/Styles';

export const ConfirmButtonStyled = styled.div`
  border: 1px solid ${color3};
  border-radius: 2px;
  color: ${color3};
  cursor: pointer;
  margin: 20px;
  padding: 5px;
  ${fontSizeL}
  ${boxShadowLight}
  &:hover {
    ${boxShadowGreen}
  }
`;

export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

const ConfirmButton = () => (
  <AppContext.Consumer>
    {({ confirmFavorites }) => (
      <CenterDiv>
        <ConfirmButtonStyled onClick={confirmFavorites}>
          Confirm Favorites
        </ConfirmButtonStyled>
      </CenterDiv>
    )}
  </AppContext.Consumer>
);

export default ConfirmButton;
