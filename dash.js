

///////////////////myChart1
const data = {
  labels: [
    '', '', '', '', '', '', '', '', ''
  ],
  datasets: [{
    type: 'line',
    label: '',
    data: [21, 20, 5, 80, 7, 19, 4, 60, 52],
    fill: false,
    borderColor: '#3159e4',
    pointRadius: 3,
    borderWidth: 3,
    backgroundColor: '#fff'
  }, {
    type: 'line',
    label: '',
  
    data: [70, 55, 65, 50, 61, 90, 85, 30, 52],
    fill: false,
    borderColor: 'rgb(255, 210, 99)',
    pointRadius: 3,
    borderWidth: 3,
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


//////////// Chart2

const labels = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
const data2 = {
  labels: labels,
  datasets: [{
    label: '',
    data: [2.8, 1.4, 1.9, 3.4, 0.6, 2.4, 4.2, 1.8, 0.4, 1.7, 2.9, 3.9, 2, 1],
    backgroundColor: [
      '#5625da'

    ],
    borderWidth: 1,
    borderRadius: 50,
    barPercentage: 0.35,
    hoverBackgroundColor: '#000',

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
    data: [1.9, 1, 2.4, 1.8, 0.5, 1, 3.8, 2.5, 0.5, 1.7, 2, 2.8, 1.8, 1, 1.4],
    backgroundColor: [
      '#f16856',
      '#1abcb0',
      '#f16856',
      '#1abcb0',
      '#1abcb0',
      '#1abcb0',
      '#f16856',
      '#1abcb0',
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







anychart.onDocumentReady(function () {
  // create data set on our data
  var dataSet = anychart.data.set([
    ['Jan', 55],
    ['Feb', 45],
    ['Mar', 50],
    ['Apr', 85],
    ['May', 50],
    ['Jun', 60],
    ['Jul', 48],
    ['Aug', 60],
    ['Sep', 75],
    ['Oct', 88],
    ['Nov', 97],
    ['Dec', 99]
  ]);


  // map data for the first series, take x from the zero column and value from the first column of data set
  var seriesData = dataSet.mapAs({ x: 0, value: 1 });
  
    
  
  var xchart = anychart.area();
// xchart.yAxis(false);

  // adding dollar symbols to yAxis labels
  xchart.yAxis().labels().enabled(true);
  xchart.yAxis().labels().format('{%Value}K');
  xchart.yAxis().labels().fontFamily("Poppins");
  xchart.yAxis().labels().fontSize(14);
  xchart.yAxis().labels().fontColor("#A6A9B7");
  xchart.yAxis().labels().fontWeight("bold");
  xchart.yAxis().labels().useHtml(false);
  xchart.xAxis().labels().fontFamily("Poppins");
  xchart.xAxis().labels().fontSize(14);
  xchart.xAxis().labels().fontColor("#A6A9B7");
  xchart.xAxis().labels().fontWeight("bold");
  xchart.xAxis().labels().useHtml(false);


  // turn on chart animation
  xchart.animation(true);

  // axes and scale settings
  xchart.yScale().minimum(0).maximum(100);

  // chart grids
  xchart.yGrid(true).xGrid(false);

  // turn on the crosshair
  

  // set chart title text settings


  // create first series with mapped data
  var series = xchart.splineArea(seriesData);
  series.name('');
  series.color('#3159e4');
  series.stroke("4, #3159e4");
  series.fill('#889DE8 0.4');

  //   var labels = xchart.xAxis().yAxis().labels();
  // labels.fontFamily("Poppins");

  // set chart tooltip and interactivity settings
  xchart
    .tooltip()
    .positionMode('point')
 

  xchart.interactivity().hoverMode('by-x');

  // set container id for the chart
  xchart.container('chartContainer');

  // initiate chart drawing
  xchart.draw();
});



var chart = JSC.chart('chartDiv', {
  debug: true,

  
  defaultSeries: {
    type: 'pie donut',
    angle_orientation: 54,
    shape_padding: .001,
    mouseTracking_enabled: true,
    shape: {
            innerSize: '48%',
            label: [
                 {
                  margin:'-10 0 0 0',
                  text: '<b>28.8K</b>',
                  verticalAlign: 'middle',
                  style_fontSize: '38px',
                  style_fontFamily:'Poppins'
                },
                {
                  text: 'Total Emails Senders',
                  margin:'-15 0 0 0',
                verticalAlign: 'middle',
                style_fontSize: '16px',
                style_fontFamily:'Source Sans Pro',
                style_color:'#a6a9b7'
              }
            ]
          }
  },
  legend: {
    template: '',
    defaultEntry_hoverAction: 'none',
    position: 'inside center'
  },
  defaultPoint: {
    tooltip: '<b>%name</b><br/><b>%xValue%</b> of email senders',
    label: {
      text: '<b>%name</b><br/>{%xValue}%',
      style_fontSize:'14',
      style_fontFamily:'Source Sans Pro',
     
      
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