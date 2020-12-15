
let occurrences = [
    {
        "id_occurrence": "534",
        "arrival": "2020-12-12 18:15:30",
        "departure": "2020-12-12"
    },
    {
        "id_occurrence": "432",
        "arrival": "2020-01-21 05:45:10",
        "departure": "2019-07-08"
    },
    {
        "id_occurrence": "432",
        "arrival": "2020-12-01 05:45:10",
        "departure": "2019-07-08"
    }];


window.onload = function () {

    const btnWeek = document.getElementById("button1");
    const btnMonth = document.getElementById("button2");
    const btnYear = document.getElementById("button3");
    
    fillTable(0);
    $("#button1").click(function(){
        fillTable(0);
      });
    $("#button2").click(function(){
        fillTable(1);
      });
    $("#button3").click(function(){
        fillTable(2);
      });


    function fillTable(type) {
        // async function fetchAsync() {
        //Confirmar o tipo
        console.log(type);
        const occurrenceList = document.getElementById("tableList");
        let txt = "";
        const occurrences = filtrator(type);
        //criação de uma tabela para demonstração dos resultados recebidos
        txt += "<table class='table' style='padding:10px; width:70%; margin:0% 15% 0% 15%'>";
        txt += "<thead style='background-color:#607d8b; color:white '>";
        txt += "<tr><th>Name</th><th>Email</th><th>Reg. Date</th></tr></thead><tbody>";
        //percorrer a variável users e por cada user cria a linha da tabela com os dados presentes
        for (const occurrence of occurrences) {
            //confirmar os dados de ocorrencia
            console.log(occurrence.id_occurrence);
            console.log(occurrence.arrival);
            console.log(occurrence.departure);
            txt += "<tr><td style='text-align: right'>" + occurrence.id_occurrence + "</td><td>" + occurrence.arrival + "</td><td>" + occurrence.departure +
                "</td></tr>";
        }
        txt += "</tbody></table>";
        //envia a tabela construida para a view e mostra no object com ID result
        occurrenceList.innerHTML = txt;
        // }
        // fetchAsync().then(data => console.log("ok")).catch(reason => console.log(reason.message));
    }


    function filtrator(type) {
        //confirmar o tipo
        console.log(type);

        // const response = await fetch('https://cc102f71a59f4b86b46f44cac1acf38f.vfs.cloud9.us-east-1.amazonaws.com/occurrences');
        // const occurrences = await response.json();
        let occurrencesFil = [];

        // Get the current date
        let today = new Date();



        if (type === 0) {
            for (const occurrence of occurrences) {
                if (DateDiff.inWeeks(today, new Date(occurrence.arrival)) == 0){
                    //cofirmar a ocorrencia
                    console.log(DateDiff.inWeeks(today, new Date(occurrence.arrival)));
                occurrencesFil.push(occurrence);
                }
            }

        }
        else
            if (type === 1) {
                for (const occurrence of occurrences) {
                    if (DateDiff.inMonths(today, new Date(occurrence.arrival)) == 0) {
                        //cofirmar a ocorrencia
                        console.log(occurrence);
                    occurrencesFil.push(occurrence);
                    }
                }

            }
            else
                if (type === 2) {
                    for (const occurrence of occurrences) {
                        if (DateDiff.inYears(today, new Date(occurrence.arrival)) == 0) {
                            //cofirmar a ocorrencia
                            console.log(occurrence);
                        occurrencesFil.push(occurrence);
                        }
                    }

                }

        return occurrencesFil;
    }
}





    // Date difference
    var DateDiff = {

        inDays: function (d1, d2) {
            var t2 = d2.getTime();
            var t1 = d1.getTime();

            return parseInt((t2 - t1) / (24 * 3600 * 1000));
        },

        inWeeks: function (d1, d2) {
            var t2 = d2.getTime();
            var t1 = d1.getTime();

            return parseInt((t2 - t1) / (24 * 3600 * 1000 * 7));
        },

        inMonths: function (d1, d2) {
            var d1Y = d1.getFullYear();
            var d2Y = d2.getFullYear();
            var d1M = d1.getMonth();
            var d2M = d2.getMonth();

            return (d2M + 12 * d2Y) - (d1M + 12 * d1Y);
        },

        inYears: function (d1, d2) {
            return d2.getFullYear() - d1.getFullYear();
        }
    }

