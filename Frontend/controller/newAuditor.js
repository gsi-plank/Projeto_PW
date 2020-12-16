window.onload = function() {
    const urlBase = "https://58717807e0f449edb5fcb157313592f1.vfs.cloud9.us-east-1.amazonaws.com";

validator();
    document.getElementById("formNewUser").onsubmit = function(e) {
        //validação do formulário ao submeter
        validator();
    };
    
    
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
        data.id_auditor = document.getElementById("id_auditor").value;
        data.id_login = document.getElementById("id_login").value;
        data.name = document.getElementById("name").value;
        data.email = document.getElementById("email").value;
        data.date_birth = document.getElementById("date").value;
        data.password = document.getElementById("pwd").value;
        console.log(data); //debugging para ver os dados que foram enviados
        //chamada fetch para envio dos dados para o servior via POST
        fetch(`${urlBase}/users/audits`, {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(data)
        }).then(function(response) {
            if (!response.ok) {
                console.log(response.status); //=> number 100–599
                console.log(response.statusText); //=> String
                console.log(response.headers); //=> Headers
                console.log(response.url); //=> String
                if (response.status === 409) {
                    alert("Duplicated Email");
                }
                else {
                    throw Error(response.statusText);
                }
            }
            else {
                document.getElementById("formNewUser").reset(); //limpeza dos dados do form
                alert("submitted with success");
            }
        }).then(function(result) {
            console.log(result);
        }).catch(function(err) {
            alert("Submission error");
            console.error(err);
        });
    }
    
}