import * as fetch from "./functions/fetch.js"

window.onload = function() {
    const picture = document.getElementById("picture");
    let fotoAuditor = "";
    fotoAuditor += `
    <img id="profilePicture" height="100px" width="100px" class="mx-auto rounded-circle" src="./images/Gypsy.jpg" alt="">
    `
    picture.innerHTML = fotoAuditor;

}

let id_login = 22;


(async function() {
    let route = "users"
    console.log(route)
    let profile = await fetch.getData(route);
    console.log(profile)
    document.getElementById("name").innerHTML = profile.id_login;
    document.getElementById("email").innerHTML = profile.email;
    // document.getElementById("date").innerHTML = profile.profile;
    
    
}) ()

// function dataAuditor() {
//     const picture = document.getElementById("picture");
//     const response = await fetch(`${urlBase}/auditor`);
//     const auditor = await response.json();
//     let fotoAuditor = "";


//     if (auditor.foto !== null) {
//         const fotoAuditor += `
//     <img id="profilePicture" class="mx-auto rounded-circle" src="${auditor.foto}" alt="">
//     `
//     }
//     picture.innerHTML = fotoAuditor;


//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const date = document.getElementById("date").value;

//     name = auditor.name;
//     email = auditor.email;
//     date = auditor.date;
// }