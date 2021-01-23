import * as fetch from "./functions/fetch.js"

// $('#myTable').on('click', 'input[type="button"]', function () {
//     $(this).closest('tr').remove();
// })

// $('p button').click(function () {
//     $('#myTable').append('<tr><td><h4>Testemunho</h4><input type="text" class="fname" /></td><td><input class="remBtn" id="remBtn" type="button" value="Remover"></tr><tr><td><h4>Justificação</h4><input type="text" class="fname" /></td><td><input class="remBtn" id="remBtn" type="button" value="Remover"></tr>')
// });~

$('#myTable').on('click', 'i', function () {
    $(this).closest('div').remove();
})

$('p button').click(function () {
    $('#myTable').append('<div class="field"><div class="input-wrapper"><h4>Testemunho:</h4><input type="text" class="teste"><i class="fas fa-times icon"></i></input></div></div><div class="field"><div class="input-wrapper"><h4>Justificação:</h4><input type="text" class="teste"/><i class="fas fa-times icon"></i></input></div></div>')
});


