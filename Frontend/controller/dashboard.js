 
 
// Link for setUps Chart
// https://www.chartjs.org/docs/latest/configuration/title.html#position

//  Line Chart
 
 let lineChart = document.getElementById('lineChart').getContext('2d');

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 12;
    Chart.defaults.global.defaultFontColor = '#777';
    Chart.defaults.global.tooltips.backgroundColor = '#777';

    let massOcuChart = new Chart(lineChart, {
      type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
        datasets:[{
          label:'Ocorrências',
          data:[
            3,
            2,
            0,
            2,
            4,
            1,
            6
          ],
          //backgroundColor:'green',
          backgroundColor:'#AB0404',
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
            fontColor:'#000'
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
        }
      }
    });
    
    // bar Chart
    
    let barChart = document.getElementById('barChart').getContext('2d');

    
    let EquipeReviewChart = new Chart(barChart, {
      type:'horizontalBar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['Equipa 1', 'Equipa 2', 'Equipa 3'],
        datasets:[{
          label:'Nota',
          data:[
            3, 
            2,
            4,
            5,
            5
          ],
          //backgroundColor:'green',
          backgroundColor:['#AB0404', '#AB0404', '#E7E7E7'],
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
            fontColor:'#000'
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
        }
      }
    });