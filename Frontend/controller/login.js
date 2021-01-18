 window.onload = function() {
     
     let view = document.getElementById("togglePassword");
     view.onclick = viewButton;

    let login = document.getElementById("submitInput");
    login.onclick = mainPage;
    
    function mainPage() {
        window.location.href = "mainPage.html";
    }
     //Fuction of the "view" button
     function viewButton() {
         let view = document.getElementById("passInput");
         if (view.type === "password") {
             view.type = "text";
         }
         else {
             view.type = "password";
         }
     }
 };

//   SPLASH
    setTimeout(() => {
          document.getElementById('splash').classList.toggle('fade');
      },2000);
 