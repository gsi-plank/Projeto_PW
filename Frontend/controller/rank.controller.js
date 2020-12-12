window.onload = function() {

    async function fetchAsync() {
        const fistThree = document.getElementById("firstThreePlaces");
        const response = await fetch('https://cc102f71a59f4b86b46f44cac1acf38f.vfs.cloud9.us-east-1.amazonaws.com/occurrences');
        const occurrences = await response.json();
        let txt = "";

        for(let i=0; i<occurrences.length; i++) {
            if(i===0) {
                //Adicionar o primeiro lugar
            txt += `
            <div id="boxWinnerOne" class="box"></div>
           
            <div id="iconOne">
                <img src="images/icon_laurem.png"></img>
                <div id="numberOne">1</div>
                <img id="profilePicture" class="mx-auto rounded-circle" src="./images/profile.png" alt="">
            </div>
            `
            }
            if(i===1) {
                //Adicionar o segundo lugar
            txt += `
            <div id="boxWinnerTwo" class="box"></div>
            <div id="iconTwo">
                <img src="images/icon_laurem.png"></img>
                <div id="numberTwo">2</div>
                <img id="profilePicture" class="mx-auto rounded-circle" src="./images/profile.png" alt="">
            </div>
            `
            }
            if(i===2) {
                //Adicionar o terceiro lugar
            txt += `
            <div id="boxWinnerTree" class="box"></div>
            <div id="iconThree">
                <img src="images/icon_laurem.png"></img>
                <div id="numberTree">3</div>
                <img id="profilePicture" class="mx-auto rounded-circle" src="./images/profile.png" alt="">
            </div>
            `
            }
            
            
            
        }
            
            
            
            
        }

        const occurrenceList = document.getElementById("tableList");
        let txt = "";
        const occurrences =
            //criação de uma tabela para demonstração dos resultados recebidos
            txt += "<table class='table' style='padding:10px; width:70%; margin:0% 15% 0% 15%'>";
        txt += "<thead style='background-color:#607d8b; color:white '>";
        txt += "<tr><th>Name</th><th>Email</th><th>Reg. Date</th></tr></thead><tbody>";
        //percorrer a variável users e por cada user cria a linha da tabela com os dados presentes
        for (const occurrence of occurrences) {
            txt += "<tr><td style='text-align: right'>" + occurrence.id + "</td><td>" + occurrence.arrival + "</td><td>" + occurrence.departure +
                "</td></tr>";
        }
        txt += "</tbody></table>";
        //envia a tabela construida para a view e mostra no object com ID result
        occurrenceList.innerHTML = txt;
    }
    fetchAsync().then(data => console.log("ok")).catch(reason => console.log(reason.message));
}
