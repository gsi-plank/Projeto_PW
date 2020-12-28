"use strict"
import * as fetch from "./functions/fetch.js";
import * as table from "./functions/table.js";




window.onload = function() {

      ( function fill() {
        // const route = "users/audits"
        // const users = await fetch.getData(route);
        // console.log(users);
        //criação de uma tabela para demonstração dos resultados recebidos
        
        let data = [];

        data.head = [
            "Full Name",
            "WebSite",
            "Contact No"
        ]


        data.body = [{
                "name": "John M",
                "website": "http://john-m.com",
                "contact": "9876543210"
            },
            {
                "name": "Ariana Smith",
                "website": "https://araiana-smith.com",
                "contact": "1234567890"
            },
            {
                "name": "Silver Bourne",
                "website": "https://silver-bourne.com",
                "contact": "988889888"
            },
        ]

        let tab = document.getElementById("dyanmicTable");
        tab.innerHTML =  table.fillTable(data);
        table.editable()
    })()


};
