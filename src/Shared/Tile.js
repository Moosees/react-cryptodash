import styled from 'styled-components';
import { boxShadowLight, background1, boxShadowGreen } from './Styles';

export const Tile = styled.div`
  padding: 10px;
  ${boxShadowLight}
  ${background1}
`;

export const SelectableTile = styled(Tile)`
  &:hover {
    cursor: pointer;
    ${boxShadowGreen}
  }
`;
