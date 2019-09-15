import React from 'react';
import AppBar from './AppBar';
import { AppLayout } from './AppLayout';
import WelcomeMessage from './WelcomeMessage';

const App = () => {
  return (
    <AppLayout>
      <AppBar />
      <WelcomeMessage />
    </AppLayout>
  );
};

export default App;
