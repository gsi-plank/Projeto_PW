"use strict";
import * as chart from "./functions/chart.js";
import * as selector from "./functions/selectorWeekMonthYear.js"


let occurrences = [{
    "id_occurrence": "534",
    "arrival": "2020-12-29",
    "departure": "2020-12-12"
  },
  {
    "id_occurrence": "432",
    "arrival": "2021-01-17",
    "departure": "2019-07-08"
  },
  {
    "id_occurrence": "422",
    "arrival": "2020-12-01",
    "departure": "2019-07-08"
  },
  {
    "id_occurrence": "42",
    "arrival": "2020-11-23",
    "departure": "2019-07-08"
  },
  {
    "id_occurrence": "4222",
    "arrival": "2020-07-01",
    "departure": "2019-07-08"
  },
  {
    "id_occurrence": "4322",
    "arrival": "2020-12-12",
    "departure": "2019-07-08"
  }
];

let today = new Date();

fillLineChart(0);
$("#button1").click(function() {
  fillLineChart(0);
});
$("#button2").click(function() {
  fillLineChart(1);
});
$("#button3").click(function() {
  fillLineChart(2);
});



function fillLineChart(type) {
  //Confirmar o tipo
  console.log(type);

  // Filtrar a lista de ocorrencias

  let occurrenceSel = selector.filtrator(occurrences, type);
  
  let lineChart = document.getElementById('lineChart').getContext('2d');
  
  // se nao existir ocorrencias nesse periodo de tempo 
  if (occurrenceSel.length == 0) {
    let labelLineChart = [];
    let dataLineChart = [];
    chart.createLineChart(lineChart, labelLineChart, dataLineChart);
    return;
  }
  
  let labelLineChart = getLabelChart(type);
  let dataLineChart = getOccurrencesArryChart(occurrenceSel, type);
  chart.createLineChart(lineChart, labelLineChart, dataLineChart);
}

(function() {

  //Avaliação equipa
  let barChart = document.getElementById("barChart").getContext('2d');
  let labelBarChart = ["Equipa 1", "Equipa 2", "Equipa 8", "Equipa 3", "Equipa 5"];
  let dataBarChart = [5, 2, 1, 4, 3];
  let colors = getColorsNeed(dataBarChart);
  chart.createBarChart(barChart, labelBarChart, dataBarChart, colors);

  //Testemunhas
  let lineChart2 = document.getElementById("lineChart2").getContext('2d');
  let labelLineChart2 = ["Oc 251", "Oc 444", "Oc 120", "Oc 005", "Oc 200"];
  let dataLineChart2 = [3, 0, 1, 4, 2];
  chart.createLineChart2(lineChart2, labelLineChart2, dataLineChart2);

})();

function getColorsNeed(data) {
  //Get root color
  let docStyle = getComputedStyle(document.documentElement);
  //get variable

  let secondaryColor = docStyle.getPropertyValue('--secondary-color');
  let graficColor = docStyle.getPropertyValue('--grafic-color');

  let colors = [];

  for (let i = 0; i < data.length; i++) {
    if (i % 2 == 0) {
      colors.push(secondaryColor);
    }
    else
      colors.push(graficColor);
  }
  return colors;
}
// +++++++++++++++++++gerador de legendas++++++++++++++++++++++++++++++++++
function getLabelChart(key) {
  switch (key) {
    case 0:
      return getDayOfWeekLabels();
    case 1:
      return getThirtyDaysLabel();
    default:
      return getMonthOfYearLabels();
  }

}

function getDayOfWeekLabels() {
  let array = [];
  //  obter o dia da semana de hoje
  let numDay = today.getDay();

  // obter os ultimos 6 dias
  let aux = numDay;
  for (let i = 0; i < 7; i++) {
    array.push(getDayOfWeek(aux));
    aux++;
    aux = aux % 7;
  }
  console.log(array);
  return array;
}

function getDayOfWeek(key) {
  switch (key) {
    case 0:
      return "Dom";
    case 1:
      return "Seg";
    case 2:
      return "Ter";
    case 3:
      return "Qua";
    case 4:
      return "Qui";
    case 5:
      return "Sex";
    case 6:
      return "Sab";
  }
}

function getMonthOfYearLabels() {
  let array = [];
  let thisMonth = today.getMonth();

  let aux = thisMonth;
  for (let i = 0; i < 12; i++) {
    array.push(getMonthsOfYear(aux));
    aux++;
    aux = aux % 12;
  }

  console.log(array);
  return array;
}

function getMonthsOfYear(key) {
  switch (key) {
    case 0:
      return "Jan";
    case 1:
      return "Fev";
    case 2:
      return "Mar";
    case 3:
      return "Abr";
    case 4:
      return "Mai";
    case 5:
      return "Jun";
    case 6:
      return "Jul";
    case 7:
      return "Ago";
    case 8:
      return "Set";
    case 9:
      return "Out";
    case 10:
      return "Nov";
    default:
      return "Dez";
  }
}

function getThirtyDaysLabel() {
  let array = [];
  let startDate = new Date(new Date().setDate(new Date().getDate() - 30));
  let startDay = startDate.getDate();
  let startMonth = getMonthsOfYear(startDate.getMonth());

  let endDay = today.getDate();
  let endMonth = getMonthsOfYear(today.getMonth());
  array[0] = startDay + " " + startMonth;

  array[29] = endDay + " " + endMonth;

  return array;
}

// +++++++++++++++++calcular o conteudo dos graficos+++++++++++++++++++++++
//   Obter o numero de ocorrencias por dia durante uma semana || um mes (30 dias) || por meses durante um ano
function getOccurrencesArryChart(occurrences, type) {
  let array;
  let index;

  if (type == 0) {
    // O ultimo elemento da array eh o dia da semana de hoje
    let sameOccuDaysInWeek = new Array(7).fill(0);

    for (const occurrence of occurrences) {
      index = getIndexWeek(occurrence.arrival);
      // somar 1 ao posicao do array do dia da semana
      sameOccuDaysInWeek[index]++;
    }
    array = sameOccuDaysInWeek;
  }

  if (type == 1) {
    // o ultimo elemento da array eh o dia de hoje
    let sameOccDaysInMonth = new Array(30).fill(0);
    for (const occurrence of occurrences) {
      // somar 1 ao posicao do array dos ultimos 30 dias
      index = getIndexThirtyDays(occurrence.arrival);
      sameOccDaysInMonth[index]++;
    }
    array = sameOccDaysInMonth;
  }

  if (type == 2) {
    // o ultimo elemento da array eh o mes de hoje
    let occuInMonths = new Array(12).fill(0);
    for (const occurrence of occurrences) {
      index = getIndexMonthInYear(occurrence.arrival);
      occuInMonths[index]++;
    }
    array = occuInMonths;
  }

  return array;
}


function getIndexWeek(date) {
  let occurrenceDate = new Date(date);
  return (today.getDay() - occurrenceDate.getDay() + 7) % 7;
}

function getIndexThirtyDays(date) {
  // Obter o tempo em milisegundos desde meia noite de 1970/01/01 
  let occuDate = new Date(date).getTime();

  // Um dia em milisegundos
  let oneDay = 24 * 60 * 60 * 1000;

  let todayMidnight = parseInt(today.getTime() / oneDay);
  let occuDateMidnight = parseInt(occuDate / oneDay);

  let startDate = todayMidnight - 30;

  return occuDateMidnight - startDate - 1;
}

function getIndexMonthInYear(date) {
  let occurrenceDate = new Date(date);
  return (today.getDate() - occurrenceDate.getDate() + 11) % 12;
}
