"use strict"
import * as fetch from "./functions/fetch.js";
import * as table from "./functions/table.js";

window.onload = function() {

      ( function() {
        // const route = "users/audits"
        // const users = await fetch.getData(route);
        // console.log(users);
        //criação de uma tabela para demonstração dos resultados recebidos
        
        let data = [];

        data.head = [
            "ID",
            "Nome",
            "Email"
        ]


        data.body = [{
                "name": "64359",
                "website": "Pedro Teixeira",
                "contact": "teixeira@gmail.com"
            },
            {
                "name": "42510",
                "website": "Dong Xuyong",
                "contact": "dong@gmail.com"
            },
            {
                "name": "49782",
                "website": "Beatriz Fernandes",
                "contact": "coelhinha@live.com.pt"
            },
        ]

        let tab = document.getElementById("dyanmicTable");
        tab.innerHTML =  table.fillTable(data);
        table.editable()
    })()


};
