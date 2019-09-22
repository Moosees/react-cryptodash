import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import { background2, fontSizeM } from '../Shared/Styles';
import _ from 'lodash';
import fuzzy from 'fuzzy';

export const SearchGrid = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: max-content 1fr;
`;

export const SearchInput = styled.input`
  align-self: center;
  border: 1px solid;
  color: #1163c9;
  height: 25px;
  justify-self: left;
  ${background2}
  ${fontSizeM}
`;

const handleFilter = _.debounce((inputValue, setFilteredCoins, coinList) => {
  let coinSymbols = Object.keys(coinList);
  let coinNames = coinSymbols.map(symbol => coinList[symbol].CoinName);
  let allStringsToSearch = coinSymbols.concat(coinNames);

  let fuzzyResults = fuzzy
    .filter(inputValue, allStringsToSearch, {})
    .map(result => result.string);

  let filteredCoins = _.pickBy(coinList, (result, symKey) => {
    let coinName = result.CoinName;
    return (
      _.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName)
    );
  });

  if (inputValue === '') {
    filteredCoins = {};
  }

  setFilteredCoins(filteredCoins);
}, 500);

const filterCoins = (evt, setFilteredCoins, coinList) => {
  let inputValue = evt.target.value;
  handleFilter(inputValue, setFilteredCoins, coinList);
};

const Search = () => (
  <AppContext.Consumer>
    {({ setFilteredCoins, coinList }) => (
      <SearchGrid>
        <h2>Search all coins</h2>
        <SearchInput
          onKeyUp={evt => filterCoins(evt, setFilteredCoins, coinList)}
        />
      </SearchGrid>
    )}
  </AppContext.Consumer>
);

export default Search;
