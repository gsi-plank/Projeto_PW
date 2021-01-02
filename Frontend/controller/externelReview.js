 let externalReviewBox = document.getElementById("externalReviewBox");

$("#addWitness").click(function(){
  let txt ="";
    txt +=  `
    <div class="item2">
        <h4>Avaliação externa:</h4>
        <input type="text" class="form-control ext"> </input>
    </div>
            `
    externalReviewBox.innerHTML += txt;
});