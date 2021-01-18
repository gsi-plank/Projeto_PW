"use strict";
import * as table from "./functions/table.js";
import * as selector from "./functions/selectorWeekMonthYear.js"

let occurrences = [
    {
        "id_occurrence": "534",
        "arrival": "2020-12-29",
        "departure": "2020-12-12"
    },
    {
        "id_occurrence": "432",
        "arrival": "2020-01-21",
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


window.onload = function () {

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
        //Confirmar o tipo
        console.log(type);

        // Filtrar a lista de ocorrencias
        
        let occurrenceSel = selector.filtrator(occurrences, type);
        
        // se nao existir correncias
        if(occurrenceSel.length == 0){
            let tab = document.getElementById("tableList");
            tab.innerHTML =  "";
            return;
        }
        
        let data = []
        
        data.head = [
            "ID",
            "Chegada",
            "Partida"
        ]

        data.body = occurrenceSel;
        console.log(occurrenceSel)
        // console.log(occurrenceSel)

        let tab = document.getElementById("tableList");
        tab.innerHTML =  table.fillTable(data);
        // }
        // fetchAsync().then(data => console.log("ok")).catch(reason => console.log(reason.message));
    }
}

    

