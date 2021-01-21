

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

 let removeexternalReviewBox = document.getElementById("externalReviewBox");

$("#remWitness").click(function(){
     

  let txt ="";
    txt -=  `
    <div class="item2">
            <h4>Avaliação externa:</h4>
            <input type="text" class="form-control ext"> </input>
			<a href="#" class="example-2-remove-input fa fa-times" title="Remove field"></a>            
        </div>
            `
    externalReviewBox.innerHTML -= txt;
});



function sweetAlert(){
  swal("hello world")
  
  
}

