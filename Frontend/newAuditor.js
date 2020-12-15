window.onload = function() {
    

    
    
    const btnRegister = document.getElementById("btnRegister");
    
    btnRegister.addEventListener("click", function() {
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const date = document.getElementById("date");
        const urlBase = "localhost:8080";
        
        const response = await fetch(`${urlBase}/localicao`, {
            headers: { "Content-Type": "application/x-www-form-urlencoded"},
            method: "POST",
            body: `name=${name}&email=${email}&password=${password}&date=${date}`
        })
        
        const result = await response.json();
        if(result.value.success) {
            swal('Envio de mensagem', result.value.mensagem.pt, 'success');
        } else {
            
        }
    })
    
}