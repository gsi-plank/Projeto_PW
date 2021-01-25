   import * as fetch from "./functions/fetch.js"
   import * as root from "./functions/dark.light.js"
   
   //Se for a primera vez a entrar no site
   if(localStorage.getItem("typeMode") == undefined){
       //cor default (light-mode)
       localStorage.setItem("typeMode", 1);
       root.getTypeMode(1);
       root.setColor();
   } 

   document.getElementById("togglePassword").addEventListener("click", function() {
        let view = document.getElementById("passInput");
         if (view.type === "password") {
             view.type = "text";
         }
         else {
             view.type = "password";
         }
    })


//   SPLASH
    // setTimeout(() => {
    //       document.getElementById('splash').classList.toggle('fade');
    //   },2000);
 