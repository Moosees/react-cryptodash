import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import { fontSizeL, boxShadowGreen, color3 } from '../Shared/Styles';

const ConfirmButtonStyled = styled.div`
  color: ${color3};
  cursor: pointer;
  margin: 20px;
  padding: 5px;
  ${fontSizeL}
  &:hover {
    ${boxShadowGreen}
  }
`;

const CenterDiv = styled.div`
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
