//Notification Button
let notification = document.getElementById("notifi");
notification.onclick = myNotification;


function myNotification() {
  window.location.href = "notification.html";
}

let back = document.getElementById("back");
back.onclick = goBack;

function goBack() {
    window.history.back();
}



ta tudo mal