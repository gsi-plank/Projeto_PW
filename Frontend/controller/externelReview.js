import * as fetch from "./functions/fetch.js"

$('#myTable').on('click', 'input[type="button"]', function () {
    $(this).closest('tr').remove();
})
$('p input[type="button"]').click(function () {
    $('#myTable').append('<tr><td><input type="text" class="fname" /></td><td><input type="button" value="Remover" /></td></tr>')
});



