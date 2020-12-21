"use strict";
import * as table from "./functions/table.js";

let occurrences = [
    {
        "id_occurrence": "534",
        "arrival": "2020-12-12 18:15:30",
        "departure": "2020-12-12"
    },
    {
        "id_occurrence": "432",
        "arrival": "2020-01-21 05:45:10",
        "departure": "2019-07-08"
    },
    {
        "id_occurrence": "422",
        "arrival": "2020-12-01 05:45:10",
        "departure": "2019-07-08"
    },
    {
        "id_occurrence": "42",
        "arrival": "2020-11-23 05:45:10",
        "departure": "2019-07-08"
    },
    {
        "id_occurrence": "4222",
        "arrival": "2020-07-01 05:45:10",
        "departure": "2019-07-08"
    },
    {
        "id_occurrence": "4322",
        "arrival": "2020-12-12 05:45:10",
        "departure": "2019-07-08"
    }
    ];


window.onload = function () {

    const btnWeek = document.getElementById("button1");
    const btnMonth = document.getElementById("button2");
    const btnYear = document.getElementById("button3");
    
    fillTable(0);
    $("#button1").click(function(){
        fillTable(0);
      });
    $("#button2").click(function(){
        fillTable(1);
      });
    $("#button3").click(function(){
        fillTable(2);
      });


    function fillTable(type) {
        // async function fetchAsync() {
        //Confirmar o tipo
        console.log(type);
        const occurrenceList = document.getElementById("tableList");
        let txt = "";
            const occurrences = table.filtrator(occurrences, type);
        //criação de uma tabela para demonstração dos resultados recebidos
        txt += "<table class='table table-hover' style='padding:10px; width:100%; margin:5px;'>";
        txt += "<thead style='background-color: #E0E6ED; color: black '>";
        txt += "<tr><th>ID</th><th>Partida</th><th>Chegada</th></tr></thead><tbody>";
        //percorrer a variável users e por cada user cria a linha da tabela com os dados presentes
        for (const occurrence of occurrences) {
            //confirmar os dados de ocorrencia
            console.log(occurrence.id_occurrence);
            console.log(occurrence.arrival);
            console.log(occurrence.departure);
            txt += "<tr><td>" + occurrence.id_occurrence + "</td><td>" + occurrence.arrival + "</td><td>" + occurrence.departure +
                "</td>"+ `<td class="diference2"><a href="./occurrenceDate.html"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg></a>
            </td>` + "</tr>";
            
        
        }
        txt += "</tbody></table>";
        //envia a tabela construida para a view e mostra no object com ID result
        occurrenceList.innerHTML = txt;
        // }
        // fetchAsync().then(data => console.log("ok")).catch(reason => console.log(reason.message));
    }
}

    

