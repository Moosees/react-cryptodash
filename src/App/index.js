import React from 'react';
import Settings from '../Settings';
import AppBar from './AppBar';
import { AppLayout } from './AppLayout';
import { AppProvider } from './AppProvider';

const App = () => {
  return (
    <AppProvider>
      <AppLayout>
        <AppBar />
        <Settings />
      </AppLayout>
    </AppProvider>
  );
};

export default App;
