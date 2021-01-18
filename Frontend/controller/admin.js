"use strict"
import * as fetch from "./functions/fetch.js";
import * as table from "./functions/table.js";



    //Global variables
    var params = null;  		//Parameters
    var colsEdi = null;
    var newColHtml = `
<div class="btn-group pull-right">
    <button id="bEdit" type="button" class="btn btn-sm btn-default" onclick="rowEdit(this);">
        <span class="glyphicon glyphicon-pencil"></span>
    </button>
    <button id="bElim" type="button" class="btn btn-sm btn-default" onclick="rowElim(this);">
        <span class="glyphicon glyphicon-trash"></span>
    </button>
    <button id="bAcep" type="button" class="btn btn-sm btn-default" style="display:none;" onclick="rowAcep(this);">
        <span class="glyphicon glyphicon-ok"> </span>
    </button>
    <button id="bCanc" type="button" class="btn btn-sm btn-default" style="display:none;" onclick="rowCancel(this);">
        <span class="glyphicon glyphicon-remove"> </span>
    </button>
</div>`;
    var colEdicHtml = '<td name="buttons">' + newColHtml + '</td>';

    $.fn.SetEditable = function (options) {
        var defaults = {
            columnsEd: null,         //Index to editable columns. If null all td editables. Ex.: "1,2,3,4,5"
            $addButton: null,        //Jquery object of "Add" button
            onEdit: function () { },   //Called after edition
            onBeforeDelete: function () { }, //Called before deletion
            onDelete: function () { } //Called after deletion
        };
        params = $.extend(defaults, options);
        this.find('thead tr').append('<th name="buttons"></th>');  //encabezado vacío
        this.find('tbody tr').append(colEdicHtml);
        var $tabedi = this;   //Read reference to the current table, to resolve "this" here.
        //Process "addButton" parameter
        if (params.$addButton != null) {
            //Se proporcionó parámetro
            params.$addButton.click(function () {
                rowAddNew($tabedi.attr("id"));
            });
        }
        //Process "columnsEd" parameter
        if (params.columnsEd != null) {
            //Extract felds
            colsEdi = params.columnsEd.split(',');
        }
    };

window.onload = function() {


      ( function fill() {
        // const route = "users/audits"
        // const users = await fetch.getData(route);
        // console.log(users);
        //criação de uma tabela para demonstração dos resultados recebidos
        
        let data = [];

        data.head = [
            "ID",
            "Nome",
            "Email"
        ]


        data.body = [{
                "name": "64359",
                "website": "Pedro Teixeira",
                "contact": "teixeira@gmail.com"
            },
            {
                "name": "42510",
                "website": "Dong Xuyong",
                "contact": "dong@gmail.com"
            },
            {
                "name": "49782",
                "website": "Beatriz Fernandes",
                "contact": "coelhinha@live.com.pt"
            },
        ]

        let tab = document.getElementById("dyanmicTable");
        tab.innerHTML =  table.fillTable(data);
        table.editable()

        
    // $("#bEdit").click(function(){
    //     rowEdit(this);
    //   });


    })()
};
