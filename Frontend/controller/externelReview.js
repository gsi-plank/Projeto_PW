 let externalReviewBox = document.getElementById("externalReviewBox");

$("#addWitness").click(function(){
  let txt ="";
    txt +=  `
    <div class="item2">
        <h4>Avaliação externa:</h4>
        <input id="ext" type="text" class="form-control"> </input>
    </div>
            `
    externalReviewBox.innerHTML += txt;
});

