import React from 'react';
import Page from '../Shared/Page';
import CoinGrid from './CoinGrid';
import ConfirmButton from './ConfirmButton';
import WelcomeMessage from './WelcomeMessage';

const Settings = () => (
  <Page name="settings">
    <WelcomeMessage />
    <CoinGrid topSection />
    <ConfirmButton />
    <CoinGrid />
  </Page>
);

export default Settings;
