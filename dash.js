var chart = JSC.chart('chartDiv', {
    debug: true,
    
    legend_visible: false,
    defaultSeries: {
        type: 'pie donut',
        angle_orientation: 54,
        shape_padding: .001,
        mouseTracking_enabled: true
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
            name: '',
            points: [
                { name: 'Facebook', x: 43, y: 40, z: 19 },
                { name: 'Google ', x: 25, y: 30, z: 18.2 },
                { name: 'Twitter ', x: 14, y: 25, z: 17 },
                { name: 'Pintrest ', x: 11, y: 20, z: 16 },
                { name: 'Other ', x: 1, y: 17, z: 15 }
            ]
        }
    ]
});

///////////////////myChart1
const data = {
    labels: [
        '','','','', '', '', '', '', ''
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
                display:false,
                drawBorder:false
              },
              ticks:{
              display:false
              }
              } ,
            x:{
                grid: {
                    display:false,
                    drawBorder:false
                  },
                  ticks:{
                  display:false
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
    const bLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const bData = {
    labels: bLabels,
    datasets: [{
        label: 'My First Dataset',
        data: [20, 30, 40, 50, 40, 35, 45, 50, 40, 45, 50, 45],
        fill: true,
        borderColor: '#3159e4',
        backgroundColor: '#e0e6fb',
        pointRadius: 4,
        pointHoverRadius: 8,
        pointBorderWidth: 2,
        tension: 0.4,
        hoverBackgroundColor: '#9cace8',


    }]
};

const bConfig = {
    type: 'line',
    data: bData,
    options: {
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

const labels =['','','','','','','','','','','','','','',''];
const data2 = {
  labels: labels,
  datasets: [{
    label: '',
    data: [2,1,1.6,2,0.5,2.2,2.5,1.5,0.5,1.7,2.3,2.6,3,2,1],
    backgroundColor: [
      '#5625da'
      
    ],
    borderWidth: 1,
    borderRadius:30,
    barPercentage:0.3,
    
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
                display:false,
                drawBorder:false
              },
              ticks:{
              display:false
              }
              },
            x: {
                grid: {
                display:false,
                drawBorder:false
              },
              ticks:{
              display:false
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
