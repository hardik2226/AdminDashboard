var chart = JSC.chart('chartDiv', {
  debug: true,

  legend_visible: false,
  defaultSeries: {
    type: 'pie donut',
    angle_orientation: 54,
    shape_padding: .001,
    mouseTracking_enabled: false
  },
  defaultPoint: {
    label: {
      text: '<b>%name</b><br/>{%xValue}%',
      margin: 0
    }
  },
  zAxis_formatString: '',
  series: [
    {
      name: 'Mail Senders',
      points: [
        { name: 'Facebook', x: 43, y: 40, z: 8, color: '#fa3b90' },
        { name: 'Google ', x: 25, y: 30, z: 7.2, color: '#3779fe' },
        { name: 'Twitter ', x: 14, y: 25, z: 6.6, color: '#04d1e3' },
        { name: 'Pintrest ', x: 11, y: 20, z: 6, color: '#ffe063' },
        { name: 'Other ', x: 1, y: 17, z: 5.3, color: '#f7f8fc' }
      ]
    }
  ]
});

///////////////////myChart1
const data = {
  labels: [
    '', '', '', '', '', '', '', '', ''
  ],
  datasets: [{
    type: 'line',
    label: '',
    data: [22, 20, 5, 80, 7, 19, 4, 60, 52],
    borderColor: '#3159e4',
    backgroundColor: '#fff'
  }, {
    type: 'line',
    label: '',
    data: [70, 55, 65, 50, 61, 90, 85, 30, 52],
    fill: false,
    borderColor: 'rgb(255, 210, 99)',
    backgroundColor: '#fff'
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {
    plugins: {
      legend: {
        display: false
      },
    },
    scales: {

      y: {

        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: false
        }
      },
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: false
        }
      }
    }
  }
};

const myChart1 = new Chart(
  document.getElementById('myChart1'),
  config,
);


///////////////////     bigChart
const bLabels = ['Jan', '', 'Feb', '', 'Mar', '', 'Apr', '', 'May', '', 'Jun', '', 'Jul', '', 'Aug', ' ', 'Sep', '', 'Oct', '', 'Nov', '', 'Dec'];
const bData = {
  labels: bLabels,
  datasets: [{
    label: 'My First Dataset',
    data: [26, 21 , 18, 17, 22, 32, 41.8, 37, 28, 23, 22, 25, 28, 26, 22, 20, 22, 30, 40, 45.9, 50.3, 54, 57],
    fill: true,
    borderColor: '#3159e4',
    backgroundColor: '#e0e6fb',
    pointRadius: 0,
    // pointHoverRadius: 8,
    // pointBorderWidth: 2,
    tension: 0.4,
    hoverBackgroundColor: '#9cace8',


  }]
};
Chart.defaults.font.size = 12.5;
Chart.defaults.font.family = 'poppins';
// Chart.defaults.font.lineHeight = 1;
Chart.defaults.font.weight = 700;
const bConfig = {
  type: 'line',
  data: bData,
  options: {
    elements: {
      radius: '50',
      pointerStyle: 'square',
    },
    plugins: {
      legend: {
        display: false
      },
      plugins: {
        title: {
          display: true,
        },

      },


    },
    scales: {
      x: {
        grid: {
          display: false,
        },

      },

      y: {
        beginAtZero: true,
        ticks: {
          min: 0,
          max: 80,
          stepSize: 20,
        }
      }
    }
  }
};
const bigChart = new Chart(document.getElementById('bigChart'),
  bConfig,
);


//////////// Chart2

const labels = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
const data2 = {
  labels: labels,
  datasets: [{
    label: '',
    data: [2, 1, 1.6, 2, 0.5, 2.2, 2.5, 1.5, 0.5, 1.7, 2.3, 2.6, 3, 2, 1],
    backgroundColor: [
      '#5625da'

    ],
    borderWidth: 1,
    borderRadius: 30,
    barPercentage: 0.3,

  }]
};



const config2 = {
  type: 'bar',
  data: data2,
  options: {
    plugins: {
      legend: {
        display: false
      },
    },
    scales: {

      y: {

        beginAtZero: true,
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: false
        }
      },
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: false
        }
      }
    }
  }
};
const myChart2 = new Chart(
  document.getElementById('myChart2'),
  config2,
);


/////////////////////// chart3


const labels3 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
const data3 = {
  labels: labels3,
  datasets: [{
    label: '',
    data: [1.5, 1, 1.6, 1.8, 0.5, 2, 2.8, 1.5, 0.5, 1.7, 2, 2.1, 1, 1, 1],
    backgroundColor: [
      '#f16856',
      '#1abcb0',
      '#f16856',
      '#f16856',
      '#f16856',
      '#1abcb0',
      '#f16856',
      '#f16856',
      '#1abcb0',
      '#f16856',
      '#1abcb0',
      '#f16856',
      '#f16856',
      '#1abcb0',
      '#f16856',
      '#f16856',
      '#1abcb0',
    ],
    borderWidth: 1,
    borderRadius: 30,
    barPercentage: 0.3,

  }]
};

const config3 = {
  type: 'bar',
  data: data3,
  options: {
    plugins: {
      legend: {
        display: false
      },
    },
    scales: {

      y: {

        beginAtZero: true,
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: false
        }
      },
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: false
        }
      }
    }
  }
};
const myChart3 = new Chart(
  document.getElementById('myChart3'),
  config3,
);
