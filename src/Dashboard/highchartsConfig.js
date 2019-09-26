export default () => ({
  title: {
    text: ''
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

  series: [
    {
      name: 'Price $',
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }
  ],

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
