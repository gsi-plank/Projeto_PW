import * as fetch from "./functions/fetch.js"

console.log(sessionStorage.getItem("id_occurrence"));
let id_occurrence = sessionStorage.getItem("id_occurrence");

//criar uma funcao async
(async function() {
    let route = "occurrences/"+id_occurrence;
    let dateOccu = await fetch.getData(route);
    console.log(dateOccu)
    console.log(dateOccu[0].victim_number)
    document.getElementById("victimNumber").innerHTML = dateOccu[0].victim_number;
    document.getElementById("occurrenceType").innerHTML = dateOccu[0].occurrence_type;
    document.getElementById("local").innerHTML = dateOccu[0].local;
})()

