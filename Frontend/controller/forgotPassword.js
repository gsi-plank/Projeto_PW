import * as fetch from "./functions/fetch.js"

let id_login = 22;

(async function() {
    let route = "users/"+id_login + "/email";
    let email = await fetch.getData(route);
    console.log(route)
    console.log(email[0].email);
    document.getElementById("confirmacao").value = email[0].email;
    
})();