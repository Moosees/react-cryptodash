import React from 'react';
import ReactHighcharts from 'react-highcharts';
import { AppContext } from '../App/AppProvider';
import { Tile } from '../Shared/Tile';
import ChartDropdown from './ChartDropdown';
import highchartsConfig from './highchartsConfig';
import highchartsTheme from './highchartsTheme';

ReactHighcharts.Highcharts.setOptions(highchartsTheme);

const PriceChart = () => (
  <AppContext.Consumer>
    {({ historical, timeInterval, changeChartInterval }) => (
      <Tile>
        <ChartDropdown
          defaultValue={timeInterval}
          onChange={evt => changeChartInterval(evt.target.value)}
        >
          <option value="days">Days</option>
          <option value="weeks">Weeks</option>
          <option value="months">Months</option>
        </ChartDropdown>
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
