import * as fetch from "./functions/fetch.js"

$('#myTable').on('click', 'i', function () {
    $(this).closest('div').remove();
});

$('p button').click(function () {
    $('#myTable').append('<div class="field" name="witnesses"><div class="input-wrapper"><h4>Testemunho:</h4><input type="text" class="testimony"><i class="fas fa-times icon"></i></input></div></div><div class="field"><div class="input-wrapper"><h4>Justificação:</h4><input type="text" class="justification"/><i class="fas fa-times icon"></i></input></div></div>')
});

let id_occurrence = 1;

function saveTestimony() {
    var data = {};
    let route = "occurrences/" + id_occurrence + "/witnesses";
    data.testimony = document.getElementsByClassName("testimony").value;
    data.justification = document.getElementsByClassName("justification").value;
  
    fetch.postData(route, data);
}



//   var nodesSameClass = parent.getElementsByName("witnesses");
//     let witnessesNumber = nodesSameClass.length;
//     console.log(witnessesNumber);
