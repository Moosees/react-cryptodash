import React from 'react';
import styled from 'styled-components';
import Page from '../Shared/Page';
import CoinSpotlight from './CoinSpotlight';
import PriceChart from './PriceChart';
import PriceList from './PriceList';

export const ChartGrid = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr 3fr;
  margin-top: 20px;
`;

const Dashboard = () => (
  <Page name="dashboard">
    <PriceList />
    <ChartGrid>
      <CoinSpotlight />
      <PriceChart />
    </ChartGrid>
  </Page>
);

export default Dashboard;
