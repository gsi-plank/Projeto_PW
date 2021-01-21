

// let newPassword = document.getElementById("newPassword").value;
// let confirmPassword = document.getElementById("confirmPassword").value;
// let checked = document.getElementById("check");

$(function(){
  $("#check").on("click",function(){
 
    var notify = $.notify('<strong>Erro!</strong> As palavra passes não coincidem', {
      type: 'danger',
      allow_dismiss: true,
    });


    notify('message', '<strong>Erro!</strong> Page Data.');


    setTimeout(function() {
      notify('message', '<strong>Erro!</strong> User Data.');
    }, 500);
    
  });
});

