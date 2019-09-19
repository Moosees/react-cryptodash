import React from 'react';
import Page from '../Shared/Page';
import CoinGrid from './CoinGrid';
import ConfirmButton from './ConfirmButton';
import WelcomeMessage from './WelcomeMessage';

const Settings = () => (
  <Page name="settings">
    <WelcomeMessage />
    <ConfirmButton />
    <CoinGrid />
  </Page>
);

export default Settings;
