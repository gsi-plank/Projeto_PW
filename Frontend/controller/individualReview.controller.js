let slider1 = document.getElementById("review1");
let output1 = document.getElementById("value1");
output1.innerHTML = slider1.value;
slider1.oninput = function() {
  output1.innerHTML = this.value;
}

let slider2 = document.getElementById("review2");
let output2 = document.getElementById("value2");
output2.innerHTML = slider2.value;
slider2.oninput = function() {
  output2.innerHTML = this.value;
}

let slider3 = document.getElementById("review3");
let output3 = document.getElementById("value3");
output3.innerHTML = slider3.value;
slider3.oninput = function() {
  output3.innerHTML = this.value;
}

let slider4 = document.getElementById("review4");
let output4 = document.getElementById("value4");
output4.innerHTML = slider4.value;
slider4.oninput = function() {
  output4.innerHTML = this.value;
}

let slider5 = document.getElementById("review5");
let output5 = document.getElementById("value5");
output5.innerHTML = slider5.value;
slider5.oninput = function() {
  output5.innerHTML = this.value;
}

let slider6 = document.getElementById("review6");
let output6 = document.getElementById("value6");
output6.innerHTML = slider6.value;
slider6.oninput = function() {
  output6.innerHTML = this.value;
}

//Para atribuir os pontos 
$(document).on("pagecreate", "#page1", function () {
    $(".slider").on("change", function () {
        addAll();
    });
    
    addAll();
});

function addAll() {
    let sum = 0
    $('.slider').each(function (){        
        sum += isNaN(this.value) || $.trim(this.value) === '' ? 0 : parseFloat(this.value);        
    });
    $('#totalPontos').html(sum);
}

/* $(document).ready (function(e) {
  var toplam = 0;
  $("input(class=slider)").each(function(){
    toplam=toplam + parseInt($(this).val()); 
} 
  
  $("input(id=totalPontos)").val(toplam);
  }) ;
  
*/



/*$('slider').on(input,function(){
  var totalSum=0;
  $('slider').each(function(){
    var inputVal = $(this).val();
    
      totalSum += parseFloat(inputVal);
      
    
  })
})
*/



