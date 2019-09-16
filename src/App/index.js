import React from 'react';
import AppBar from './AppBar';
import { AppLayout } from './AppLayout';
import { AppProvider } from './AppProvider';
import WelcomeMessage from './WelcomeMessage';

const App = () => {
  return (
    <AppProvider>
      <AppLayout>
        <AppBar />
        <WelcomeMessage />
      </AppLayout>
    </AppProvider>
  );
};

export default App;
