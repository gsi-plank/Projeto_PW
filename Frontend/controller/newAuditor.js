import * as fetch from "./functions/fetch.js";


    // window.onload = function(){
    validator();
    

    // submit
    // document.getElementById("formNewUser").onsubmit = function(e) {
    //     //validação do formulário ao submeter
    //     validator();
    // };
    
  

    //função de validação
    function validator() {
        new Validator(document.querySelector('form[name="formNewUser"]'), function(err, res) {
            if (res) {
                saveUsers();
            }
        }, {
            rules: {
                password: function(value) {
                    console.log(value);
                    return (value === document.getElementById("pwd").value);
                }
            },
            messages: {
                en: {
                    password: {
                        incorrect: "A palavra-passe não coicidem"
                    }
                }
            }
        });
    }
    
    
function saveUsers() {
        var data = {};
        let route = "users/audits";
        data.id_login = document.getElementById("id_login").value;
        data.name = document.getElementById("name").value;
        data.email = document.getElementById("email").value;
        data.date_birth = document.getElementById("date").value;
        data.password = document.getElementById("pwd").value;
        console.log(data); //debugging para ver os dados que foram enviados
        //chamada fetch para envio dos dados para o servior via POST
        
        fetch.postData(route, data);
    }

// }