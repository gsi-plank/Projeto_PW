 window.onload = function() {

     //"view" Button
     let view = document.getElementById("viewTxt");
     view.onclick = viewButton;



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
     new Validator(document.querySelector('form[name="form"]'), function(err, res) {


     });
 };

//   SPLASH
    setTimeout(() => {
          document.getElementById('splash').classList.toggle('fade');
      },2000);
 