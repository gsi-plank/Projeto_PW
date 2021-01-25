   import * as fetch from "./functions/fetch.js"
   import * as root from "./functions/dark.light.js"
   
   if(localStorage.getItem("typeMode") == undefined){
       localStorage.setItem("typeMode", 1);
   } else {
       //cor default (light-mode)
        root.getTypeMode(1)
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
 