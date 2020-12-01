let newPassword = document.getElementById("newPassword").value;
let confirmPassword = document.getElementById("confirmPassword").value;
let checked = document.getElementById("check").onclick;

function saveChanges(){
    if(checked){
        confirmPassword();
    }
}

function confirmPassword(){
    if(newPassword.length !== newPassword.length || newPassword !== newPassword){
        document.getElementById("textTxt1").className = "textTxtClass text-center";
        document.getElementById("textTxt").className = "hidden";
        document.getElementById("errorFrame").className = "errorFrame";
    }
    else {
        changePassword();
    }
}



function changePassword(){
    
}
