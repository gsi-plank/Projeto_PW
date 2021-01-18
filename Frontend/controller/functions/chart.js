"use strict";
export { createLineChart, createBarChart};
// Link for setUps Chart
// https://www.chartjs.org/docs/latest/configuration/title.html#position

//Get root color
let docStyle = getComputedStyle(document.documentElement);
//get variable
let primaryColor = docStyle.getPropertyValue('--primary-color');
let secondaryColor = docStyle.getPropertyValue('--secondary-color');
let shadowColor = docStyle.getPropertyValue('--shadow-color');
let fontColor = docStyle.getPropertyValue('--font-color');
let backgroundColor = docStyle.getPropertyValue('--background-color');



// Global Options
Chart.defaults.global.defaultFontFamily = 'Roboto, sans-serif';
Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.defaultFontColor = '#777';
Chart.defaults.global.tooltips.backgroundColor = '#777';



//  Line Chart
function createLineChart(chart, label, data) {

let massOcuChart = new Chart(chart, {
  type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
    labels:label,
    datasets:[{
      label:'Ocorrências',
      data:data,
      backgroundColor:secondaryColor,
      borderWidth:1,
      hoverBorderWidth:3,
      hoverBorderColor:'#000'
    }]
  },
  options:{
    title:{
      display:true,
      text:'Ocorrências Semanais',
      fontSize:18
    },
    legend:{
      display:false,
      position:'right',
      labels:{
        fontColor:fontColor
      }
    },
    layout:{
      padding:{
        left:30,
        right:30,
        bottom:0,
        top:0
      }
    },
    tooltips:{
      enabled:true
    },
    scales: {
        xAxes: [{
            ticks: {
                min: 0 // Edit the value according to what you need
            },
            gridLines: {
                display: false
            }
        }],
        yAxes: [{
            stacked: true,
            gridLines: {
                display: false
            },
            ticks: {
                min: 0,
                stepSize: 1
            }
        }]
    }
  }
  
});
}


// bar Chart
// let barChart = document.getElementById('barChart').getContext('2d');
function createBarChart(chart, label, data) {


let EquipeReviewChart = new Chart(chart, {
  type:'horizontalBar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
    labels: label,
    datasets:[{
      label:'Nota',
      data: data,
      //backgroundColor:'green',
      backgroundColor:[secondaryColor, shadowColor, primaryColor],
      borderWidth:1,
      hoverBorderWidth:3,
      hoverBorderColor:'#000',
    }]
  },
  options:{
    title:{
      display:true,
      text:'Avaliação média por equipa',
      fontSize:20
    },
    legend:{
      display:false,
      position:'right',
      labels:{
        fontColor:fontColor
    // enabled: false
      }
    },
    layout:{
      padding:{
        left:50,
        right:0,
        bottom:0,
        top:0
      }
    },
    tooltips:{
      enabled:true
    },
    scales: {
        xAxes: [{
            ticks: {
                min: 0 // Edit the value according to what you need
            },
            gridLines: {
                display: false
            }
        }],
        yAxes: [{
            stacked: true,
            // gridLines: {
            //     display: false
            // }
        }]
    }
  }
});
}