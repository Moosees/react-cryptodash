import React from 'react';
import Dashboard from '../Dashboard';
import Settings from '../Settings';
import Content from '../Shared/Content';
import AppBar from './AppBar';
import { AppLayout } from './AppLayout';
import { AppProvider } from './AppProvider';

const App = () => {
  return (
    <AppProvider>
      <AppLayout>
        <AppBar />
        <Content>
          <Settings />
          <Dashboard />
        </Content>
      </AppLayout>
    </AppProvider>
  );
};

export default App;
