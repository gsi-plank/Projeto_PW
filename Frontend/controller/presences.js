import * as fetch from "./functions/fetch.js";

// let id_occurrence = sessionStorage.getItem("id_occurrence");
let id_occurrence = 2;
(async function() {
    let route = "occurrences/"+ id_occurrence + "/operationals/";
    let operationals = await fetch.getData(route);
    console.log(operationals)
    let txt = `<div class="container-3">    
    <h5 id="registoColab">Registo de colaboradores no terreno: </h5>
    <div class="form">
        <form action="/action_page.php">`
    
    for(const operational of operationals) {
    txt += `
            <div class="checkbox-container">
                <input type="checkbox" name="checkbox" id="${operational.id_operational}">
                <label for="presenca1"> ${operational.name} </label><br>
            </div>
    `   
    }

    txt +=`
            </form>
        </div>
    </div>
    `
    document.getElementById("presences").innerHTML = txt;
    console.log(txt)
    let checkboxes = document.getElementsByName("checkbox");
    let submit = document.getElementById("submit");
    let routeOpera;
    submit.addEventListener("click", function() {
        for(const operational of operationals){
            for(const checkbox of checkboxes){
                if(checkbox.id == operational.id_operational) {
                    if(checkbox.checked){
                        operational.checked = "1";
                    } else {
                        operational.checked = "0";
                    }
                }
            }
            routeOpera = route + operational.id_operational;
            console.log(operational)
            fetch.putData(routeOpera, operational)
        }
    })
})()