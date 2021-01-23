import * as fetch from "./functions/fetch.js"

$('#myTable').on('click', 'input[type="button"]', function () {
    $(this).closest('tr').remove();
})

$('p input[type="button"]').click(function () {
    $('#myTable').append('<tr><td><h4>Testemunho</h4><input type="text" class="fname" /></td><td><input class="remBtn" id="remBtn" type="button" value="Remover"></tr><tr><td><h4>Justificação</h4><input type="text" class="fname" /></td><td><input class="remBtn" id="remBtn" type="button" value="Remover"></tr>')
});


