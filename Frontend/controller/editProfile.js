import * as fetch from "./functions/fetch.js"

let id_login = sessionStorage.getItem("id_login");

(async function(){
  let route1 = "users/"+ id_login;
  let route2 = "users/" +id_login+ "/email" ; 

  let user = await fetch.getData(route2);
  let emailset = user[0].email;

  document.getElementById("submit").addEventListener("click", function(){
    let newPassword = document.getElementById("newPassword").value;
    let confirmPassword = document.getElementById("cofirmNewPassword").value;
    if (newPassword == confirmPassword) {
      let data = {
        email : emailset,
        password : newPassword 
      }
      console.log(data);
      fetch.putData(route1, data);
      window.location = "profile.html";
    } else {
      var notify = $.notify('<strong>Erro!</strong> As palavra passes não coincidem', {
              type: 'danger',
              allow_dismiss: true,
            });
    }
  })
})()