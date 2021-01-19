// "use strict"; 
// // Link for setUps Chart
// // https://www.chartjs.org/docs/latest/configuration/title.html#position

// //Get root color
// let docStyle = getComputedStyle(document.documentElement);
// //get variable
// let primaryColor = docStyle.getPropertyValue('--primary-color');
// let secondaryColor = docStyle.getPropertyValue('--secondary-color');
// let shadowColor = docStyle.getPropertyValue('--shadow-color');
// let fontColor = docStyle.getPropertyValue('--font-color');
// let backgroundColor = docStyle.getPropertyValue('--background-color');
// let graficColor = docStyle.getPropertyValue('--grafic-color')


// // Global Options
// Chart.defaults.global.defaultFontFamily = 'Roboto, sans-serif',
// Chart.defaults.global.defaultFontSize = 12;
// Chart.defaults.global.defaultFontColor = '#777';
// Chart.defaults.global.tooltips.backgroundColor = '#777';


// let week=['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']
// let data=[3,2,0,2,4,1,6]
// let teams=['Equipa 1', 'Equipa 2', 'Equipa 5', 'Equipa 7']
// let dataTeam=[16,14,20,10]
// let occurrence= ['Oc 234', 'Oc 365', 'Oc 548', 'Oc 852', 'Oc 645']
// let witnesses= [2,4,0,1,1]

// //  Line Chart
// let lineChart = document.getElementById('lineChart').getContext('2d');

// createLineChart(lineChart, week, data)

// function createLineChart(chart, label, data) {

// let massOcuChart = new Chart(chart, {
//   type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
//   data:{
//     labels:label,
//     datasets:[{
//       label:'Ocorrências',
//       data:data,
//       backgroundColor:secondaryColor,
//       borderWidth:1,
//       hoverBorderWidth:3,
//       hoverBorderColor:'#000'
//     }]
//   },
//   options:{
//     title:{
//       display:true,
//       text:'Ocorrências Semanais',
//       fontSize: 16
//     },
//     legend:{
//       display:false,
//       position:'right',
//       labels:{
//       fontColor:fontColor
//     // enabled: false
//       }
//     },
//     layout:{
//       padding:{
//         left:30,
//         right:30,
//         bottom:0,
//         top:0
//       }
//     },
//     tooltips:{
//       enabled:true
//     },
//     scales: {
//         xAxes: [{
//             ticks: {
//                 min: 0 // Edit the value according to what you need
//             },
//             gridLines: {
//                 display: false
//             }
//         }],
//         yAxes: [{
//             stacked: true,
//             gridLines: {
//                 display: false
//             }
//         }]
//     }
//   }
  
// });
// }

// // bar Chart
// // let barChart = document.getElementById('barChart').getContext('2d');

// // createBarChart(barChart, teams, dataTeam)
// // function createBarChart(chart, label, data) {


// // let EquipeReviewChart = new Chart(chart, {
// //   type:'horizontalBar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
// //   data:{
// //     labels: label,
// //     datasets:[{
// //       label:'Avaliação',
// //       data: data,
// //       backgroundColor: [secondaryColor, shadowColor, secondaryColor, shadowColor],
// //       borderWidth:1,
// //       hoverBorderWidth:3,
// //       hoverBorderColor:'#000',
// //     }]
// //   },
// //   options:{
// //     title:{
// //       display:true,
// //       text:'Avaliação média por equipa',
// //       fontSize:16
// //     },
// //     legend:{
// //       display:false,
// //       position:'right',
// //       labels:{
// //       fontColor:fontColor
// //     // enabled: false
// //       }
// //     },
// //     layout:{
// //       padding:{
// //         left:30,
// //         right:30,
// //         bottom:0,
// //         top:30
// //       }
// //     },
// //     tooltips:{
// //       enabled:true
// //     },
// //     scales: {
// //         xAxes: [{
// //             ticks: {
// //                 min: 0 // Edit the value according to what you need
// //             },
// //             gridLines: {
// //                 display: false
// //             }
// //         }],
// //         yAxes: [{
// //             stacked: true,
// //             gridLines: {
// //                 display: false
// //             }
// //         }]
// //     }
// //   }
// // });
// // }

// // bar Chart
// let barChart2 = document.getElementById('barChart2').getContext('2d');

// createBarChart2(barChart2, teams, dataTeam)
// function createBarChart2(chart, label, data) {


// let witnessesChart = new Chart(chart, {
//   type:'bar', 
//   data:{
//     labels: label,
//     datasets:[{
//       label:'Avaliação',
//       data: data,
//       backgroundColor: [secondaryColor, graficColor, secondaryColor, graficColor],
//       borderWidth:1,
//       hoverBorderWidth:3,
//       hoverBorderColor:'#000',
//     }]
//   },
//   options:{
//     title:{
//       display:true,
//       text:'Avaliação média por equipa',
//       fontSize:16
//     },
//     legend:{
//       display:false,
//       position:'right',
//       labels:{
//       fontColor:fontColor
//     // enabled: false
//       }
//     },
//     layout:{
//       padding:{
//         left:30,
//         right:30,
//         bottom:5,
//         top:30
//       }
//     },
//     tooltips:{
//       enabled:true
//     },
//     scales: {
//         xAxes: [{
//             ticks: {
//                 min: 0 // Edit the value according to what you need
//             },
//             gridLines: {
//                 display: false
//             }
//         }],
//         yAxes: [{
//             stacked: true,
//             gridLines: {
//                 display: false
//             }
//         }]
//     }
//   }
// });
// }

// //  Line Chart
// let lineChart2 = document.getElementById('lineChart2').getContext('2d');

// createLineChart2(lineChart2, occurrence, witnesses)

// function createLineChart2(chart, label, data) {

// let wChart = new Chart(chart, {
//   type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
//   data:{
//     labels:label,
//     datasets:[{
//       label:'Nº testemunhas',
//       data:data,
//       backgroundColor:graficColor,
//       borderWidth:1,
//       hoverBorderWidth:3,
//       hoverBorderColor:'#000'
//     }]
//   },
//   options:{
//     title:{
//       display:true,
//       text:'Número de testemunhas por ocorrência',
//       fontSize: 16
//     },
//     legend:{
//       display:false,
//       position:'right',
//       labels:{
//       fontColor:fontColor
//     // enabled: false
//       }
//     },
//     layout:{
//       padding:{
//         left:30,
//         right:30,
//         bottom:5,
//         top:30
//       }
//     },
//     tooltips:{
//       enabled:true
//     },
//     scales: {
//         xAxes: [{
//             ticks: {
//                 min: 0 // Edit the value according to what you need
//             },
//             gridLines: {
//                 display: false
//             }
//         }],
//         yAxes: [{
//             stacked: true,
//             gridLines: {
//                 display: false
//             }
//         }]
//     }
//   }
  
// });
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++novo codigo+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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
      //backgroundColor:'green',
      backgroundColor:secondaryColor,
      borderWidth:1,
      hoverBorderWidth:3,
      hoverBorderColor:'#000'
    }]
  },
  options:{
    // title:{
    //   display:true,
    //   text:'Ocorrências Semanais',
    //   fontSize:25
    // },
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