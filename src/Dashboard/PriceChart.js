import React from 'react';
import ReactHighcharts from 'react-highcharts';
import { AppContext } from '../App/AppProvider';
import { Tile } from '../Shared/Tile';
import highchartsConfig from './highchartsConfig';
import highchartsTheme from './highchartsTheme';

ReactHighcharts.Highcharts.setOptions(highchartsTheme);

const PriceChart = () => (
  <AppContext.Consumer>
    {({ historical }) => (
      <Tile>
        {historical ? (
          <ReactHighcharts config={highchartsConfig(historical)} />
        ) : (
          <div>Loading data...</div>
        )}
      </Tile>
    )}
  </AppContext.Consumer>
);

export default PriceChart;
