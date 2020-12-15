

 let externalReviewBox = document.getElementById("externalReviewBox");

$("#addWitness").click(function(){
  let txt ="";
    txt +=  `<b class="titulo2">Avaliação Externa:</b>
            <input type="text" class="ext"> </input>
            <form action="/action_page.php">
            <label for="myfile">Escolha ficheiros:</label>
            <input type="file" name="myfile" multiple><br><br>
            </form>;
            `
    externalReviewBox.innerHTML += txt;
});