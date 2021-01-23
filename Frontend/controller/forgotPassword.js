import * as fetch from "./functions/fetch.js"

let id_login = 22;

(async function() {
    let route = "users/"+id_login;
    let email = await fetch.getData(route);
    console.log(route)
    console.log(email);
    document.getElementById("confirmacao").value = email.email;
    
})();