function filtrator(type) {
    const response = await fetch('https://cc102f71a59f4b86b46f44cac1acf38f.vfs.cloud9.us-east-1.amazonaws.com/occurrences');
    const occurrences = await response.json();
    let occurrencesFil = {};
    
    // Get the current date
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    
    
    if (type === 0) {
        for(const occurrence of occurrences) {
            if(yyy === dataDo)
        }
            
    }

    return occurrencesFil;
}




function occurrence() {
    const occurrenceList = document.getElementById("tableList");
    let txt = "";

    const occurrences = filtrator();
    //criação de uma tabela para demonstração dos resultados recebidos
    txt += "<table class='table' style='padding:10px; width:70%; margin:0% 15% 0% 15%'>";
    txt += "<thead style='background-color:#607d8b; color:white '>";
    txt += "<tr><th>Name</th><th>Email</th><th>Reg. Date</th></tr></thead><tbody>";
    //percorrer a variável users e por cada user cria a linha da tabela com os dados presentes
    for (const occurrence of occurrences) {
        txt += "<tr><td style='text-align: right'>" + occurrence.id + "</td><td>" + occurrence.partida + "</td><td>" + occurrence.chegada +
            "</td></tr>";
    }
    txt += "</tbody></table>";
    //envia a tabela construida para a view e mostra no object com ID result
    occurrenceList.innerHTML = txt;
}


function buttonSelect() {
    const btnWeek = document.getElementById("button1");
    const btnMonth = document.getElementById("button2");
    const btnYear = document.getElementById("button3");
    let type;
    
    if(btnWeek.onclick) {
        type = 0;
    } else if (btnMonth.onclick) {
        type = 1;
    } else if (btnYear.onclick) {
        type = 2;
    }
    
    return type;
}


// Compare the date
