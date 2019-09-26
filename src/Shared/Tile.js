import styled from 'styled-components';
import {
  boxShadowLight,
  background1,
  boxShadowGreen,
  boxShadowRed
} from './Styles';

export const Tile = styled.div`
  min-height: 70px;
  padding: 10px;
  position: relative;
  ${boxShadowLight}
  ${background1}
`;

export const SelectableTile = styled(Tile)`
  &:hover {
    cursor: pointer;
    ${boxShadowGreen}
  }
`;

export const DeletableTile = styled(Tile)`
  &:hover {
    cursor: pointer;
    ${boxShadowRed}
  }
`;

export const DisabledTile = styled(Tile)`
  opacity: 0.4;
  pointer-events: none;
`;
