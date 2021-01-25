import * as root from "./functions/dark.light.js";

    (function () {
        let typeMode = localStorage.getItem("typeMode");
        let btnTypeMode = document.getElementById("btnMode");
        let btnHam = document.getElementById("ham-button");
        //MENU
        
        btnHam.addEventListener("click", function() {
            // Declare variable menu
            let menu = document.getElementById("side-menu");

            // toggle code
            if (menu.style.display === "block") {
                menu.style.display = "none";
            }
            else {
                menu.style.display = "block";
            }
        });

        btnTypeMode.addEventListener("click", function () {
            if (typeMode) {
                // btnTypeMode.innerHTML = '<i class="fas fa-moon"></i> Darkmode';
                btnTypeMode.innerHTML = '<i class="fas fa-sun"></i> Lightmode';
                typeMode = 0;
                localStorage.setItem("typeMode", typeMode);
            } else {
                // btnTypeMode.innerHTML = '<i class="fas fa-sun"></i> Lightmode';
                btnTypeMode.innerHTML = '<i class="fas fa-moon"></i> Darkmode';
                typeMode = 1;
                localStorage.setItem("typeMode", typeMode);
            }
            root.getTypeMode(typeMode);
            root.setColor()
        })
    })()




document.getElementById("occurrences").addEventListener("click", function() {
   window.location = "occurrenceList.html";
});

document.getElementById("admin").addEventListener("click", function() {
    window.location = "admin.html";
});


// terminar sessão
document.getElementById("close").addEventListener("click", function(){
    Swal.fire({
        title: 'Terminar sessão',
        text: 'Deseja mesmo terminar sessão?',
        showCancelButton: true,
        confirmButtonText: `Sim`,
        cancelButtonColor: `Cancelar`,
}).then((result) => {
    if (result.isConfirmed) {
    Swal.fire('Sessão terminada', '', 'success');
    window.location = "login.html";
  } else if(result.dismiss === Swal.DismissReason.cancel){
    // window.location = "mainPage.html";
  }
});
});

