export default historical => ({
  title: {
    text: ''
  },
  
  xAxis: {
    type: 'datetime'
  },

  yAxis: {
    title: {
      text: ''
    }
  },

  legend: {
    layout: 'horizontal',
    align: 'center',
    verticalAlign: 'bottom'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2010
    }
  },

  series: historical,

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500
        },
        chartOptions: {}
      }
    ]
  }
});
