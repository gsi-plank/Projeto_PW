import * as fetch from "./functions/fetch.js"

let id_login = sessionStorage.getItem("id_login");

(async function(){
  let route1 = "users/"+ id_login;
  let route2 = "users/" +id_login+ "/email" ; 
  let route3 = "users/" +id_login+"/profile"; 
  let route4 = "admins/" + id_login;
  let route5 = "audits/" + id_login;

  let user = await fetch.getData(route2);
  let profType = await fetch.getData(route3);

  let emailset = user[0].email;

  document.getElementById("submit").addEventListener("click", function(){
    let newPassword = document.getElementById("newPassword").value;
    let confirmPassword = document.getElementById("cofirmNewPassword").value;
    let add = document.getElementById("newAddress").value;
    let p_nr = document.getElementById("phone").value;

    if (newPassword == confirmPassword) {
      let data = {
        email : emailset,
        password : newPassword 
      }
      let data1 = {
        address : add,
        phone_nr : p_nr
      }
      fetch.putData(route1, data);
      
      if ("Administrador" == profType[0].profile) {
          fetch.putData(route4, data1);
      } else {
          fetch.putData(route5, data1)
      }
      window.location = "profile.html";
    } else {
      var notify = $.notify('<strong>Erro!</strong> As palavra passes não coincidem', {
              type: 'danger',
              allow_dismiss: true,
            });
    }
  })
})()