import React from 'react';
import styled, { css } from 'styled-components';
import { CoinHeaderStyled, JustifyRight } from '../Shared/CoinHeader';
import { boxShadowGreen, fontSizeL, fontSizeS } from '../Shared/Styles';
import { SelectableTile } from '../Shared/Tile';
import { AppContext } from '../App/AppProvider';

export const PriceTileStyled = styled(SelectableTile)`
  height: auto;
  min-height: auto;
  ${({ compact }) =>
    compact &&
    css`
      display: grid;
      grid-gap: 5px;
      grid-template-columns: repeat(3, 1fr);
      ${fontSizeS}
    `}
  ${({ currentFavorite }) =>
    currentFavorite &&
    css`
      pointer-events: none;
      ${boxShadowGreen}
    `}
`;

export const ChangePct = styled.div`
  color: #00ff00;
  ${({ red }) =>
    red &&
    css`
      color: #ff0000;
    `}
`;

export const TickerPrice = styled.div`
  ${fontSizeL}
`;

const numberFormat = (number, digits) => +(number + '').slice(0, digits);

const PriceTileBig = ({ coinKey, price }) => (
  <>
    <CoinHeaderStyled>
      <div>{coinKey}</div>
      <JustifyRight>
        <ChangePct red={price.CHANGEPCT24HOUR < 0}>
          {numberFormat(price.CHANGEPCT24HOUR, 8)}%
        </ChangePct>
      </JustifyRight>
    </CoinHeaderStyled>
    <TickerPrice>
      {price.PRICE ? `$${numberFormat(price.PRICE, 9)}` : 'N/A'}
    </TickerPrice>
  </>
);

const PriceTileCompact = ({ coinKey, price }) => (
  <>
    <div>{coinKey}</div>
    <JustifyRight>
      <ChangePct red={price.CHANGEPCT24HOUR < 0}>
        {numberFormat(price.CHANGEPCT24HOUR, 4)}%
      </ChangePct>
    </JustifyRight>
    <JustifyRight>
      <div>{price.PRICE ? `$${numberFormat(price.PRICE, 7)}` : 'N/A'}</div>
    </JustifyRight>
  </>
);

const PriceTile = ({ coinKey, price, index }) => {
  const compact = index > 4;
  return (
    <AppContext.Consumer>
      {({ currentFavorite, setCurrentFavorite }) => (
        <PriceTileStyled
          compact={compact}
          currentFavorite={currentFavorite === coinKey}
          onClick={() => setCurrentFavorite(coinKey)}
        >
          {compact ? (
            <PriceTileCompact coinKey={coinKey} price={price} />
          ) : (
            <PriceTileBig coinKey={coinKey} price={price} />
          )}
        </PriceTileStyled>
      )}
    </AppContext.Consumer>
  );
};
export default PriceTile;
