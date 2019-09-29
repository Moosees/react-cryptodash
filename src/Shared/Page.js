import React from 'react';
import { AppContext } from '../App/AppProvider';

const Page = ({ name, children }) => (
  <AppContext.Consumer>
    {({ page }) => {
      if (page !== name) {
        return null;
      } else {
        return (
          <div style={{ padding: "10px", boxSizing: 'border-box' ,overflowY: 'scroll' }}>{children}</div>
        );
      }
    }}
  </AppContext.Consumer>
);

export default Page;
