

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
 