window.onload = function() {
    const picture = document.getElementById("picture");
    let fotoAuditor = "";
    fotoAuditor += `
    <img id="profilePicture" class="mx-auto rounded-circle" src="./images/profile.png" alt="">
    `
    picture.innerHTML = fotoAuditor;

}


// function dataAuditor() {
//     const picture = document.getElementById("picture");
//     const response = await fetch(`${urlBase}/auditor`);
//     const auditor = await response.json();
//     let fotoAuditor = "";


//     if (auditor.foto !== null) {
//         const fotoAuditor += `
//     <img id="profilePicture" class="mx-auto rounded-circle" src="${auditor.foto}" alt="">
//     `
//     }
//     picture.innerHTML = fotoAuditor;


//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const date = document.getElementById("date").value;

//     name = auditor.name;
//     email = auditor.email;
//     date = auditor.date;
// }

