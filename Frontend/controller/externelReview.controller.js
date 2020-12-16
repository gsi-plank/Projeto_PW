

 let externalReviewBox = document.getElementById("externalReviewBox");

$("#addWitness").click(function(){
  let txt ="";
    txt +=  `
    <div class="item2">
 <b id="titulo2" class="titulo2">Avaliação Externa:</b>
    <input id="ext" type="text" class="ext"> </input>
    
    
<form id="externa" action="/action_page.php">
  <label for="myfile">Escolha ficheiros:</label>
  <input type="file" id="myfile" name="myfile" multiple><br><br>
</form>
</div>
            `
    externalReviewBox.innerHTML += txt;
});