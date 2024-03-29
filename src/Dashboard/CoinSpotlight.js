import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import CoinImage from '../Shared/CoinImage';
import { Tile } from '../Shared/Tile';

export const SpotlightName = styled.h2`
  text-align: center;
`;

const CoinSpotlight = () => (
  <AppContext.Consumer>
    {({ currentFavorite, coinList }) => (
      <Tile>
        {currentFavorite ? (
          <>
            <SpotlightName>{coinList[currentFavorite].CoinName}</SpotlightName>
            <CoinImage spotlight coin={coinList[currentFavorite]} />
          </>
        ) : (
          <div>No favorite set</div>
        )}
      </Tile>
    )}
  </AppContext.Consumer>
);

export default CoinSpotlight;
