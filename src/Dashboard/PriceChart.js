import React from 'react';
import ReactHighcharts from 'react-highcharts';
import { AppContext } from '../App/AppProvider';
import { Tile } from '../Shared/Tile';
import highchartsConfig from './highchartsConfig';
import highchartsTheme from './highchartsTheme';

ReactHighcharts.Highcharts.setOptions(highchartsTheme);

const PriceChart = () => (
  <AppContext.Consumer>
    {() => (
      <Tile>
        <ReactHighcharts config={highchartsConfig()} />
      </Tile>
    )}
  </AppContext.Consumer>
);

export default PriceChart;
