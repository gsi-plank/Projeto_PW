import * as fetch from "./functions/fetch.js"

document.getElementById("togglePassword").addEventListener("click", function() {
    if (document.getElementById("passInput").type === "password") {
        document.getElementById("passInput").type = "text";  
    } else {
        document.getElementById("passInput").type = "password";
    }
})

document.getElementById("submitInput").addEventListener("click", function() {
    let route1 = 'users/login';
    let email = document.getElementById("mailInput").value;
    let password = document.getElementById("passInput").value;
    let data = {
        email,
        password
    }
    fetch.postData(route1, data);
    window.location = "mainPage.html";
})