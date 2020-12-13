window.onload = function () {

    async function fetchAsync() {
        const rankList = document.getElementById("tableList");
        const response = await fetch('https://cc102f71a59f4b86b46f44cac1acf38f.vfs.cloud9.us-east-1.amazonaws.com/operationals');
        const operationals = await response.json();
        let txt = "";

        //Adicionar a parte estatica do rank
        for (let i = 0; i < operationals.length; i++) {
            if (i === 0) {
                //confirmacao dos operacionais
                console.log(operationals[i].name);
                console.log(operationals[i].points);
                //Adicionar o primeiro lugar
                txt += `
            <div id="boxWinnerOne" class="box"></div>
           
            <div id="iconOne">
                <img src="images/icon_laurem.png"></img>
                <div id="numberOne">1</div>
                <img  class="profilePicture mx-auto rounded-circle" src="./images/profile.png" alt="">
                <label class="name"> ${operationals[i].name} </label>
                <label class="points"> ${operationals[i].points} </label>
            </div>
            `;
                continue;
            }
            if (i === 1) {
                 //confirmacao dos operacionais
                 console.log(operationals[i].name);
                 console.log(operationals[i].points);
                //Adicionar o segundo lugar
                txt += `
            <div id="boxWinnerTwo" class="box"></div>
            <div id="iconTwo">
                <img src="images/icon_laurem.png"></img>
                <div id="numberTwo">2</div>
                <img class="profilePicture mx-auto rounded-circle" src="./images/profile.png" alt="">
                <label class="name"> ${operationals[i].name} </label>
                <label class="points"> ${operationals[i].points} </label>
            </div>
            `;
                continue;
            }
            if (i === 2) {
                 //confirmacao dos operacionais
                 console.log(operationals[i].name);
                 console.log(operationals[i].points);
                //Adicionar o terceiro lugar
                txt += `
            <div id="boxWinnerTree" class="box"></div>
            <div id="iconThree">
                <img src="images/icon_laurem.png"></img>
                <div id="numberTree">3</div>
                <img class="profilePicture mx-auto rounded-circle" src="./images/profile.png" alt="">
                <label class="name"> ${operationals[i].name} </label>
                <label class="points"> ${operationals[i].points} </label>
            </div>
            `;
                break;
            }
        }
        if(operationals.length > 3) {
            txt = `
            <div class="container">
                <ul>
            `;
            for (let i=3; i<operationals.length; i++) {
                //confirmacao dos operacionais
                console.log(operationals[i].name);
                console.log(operationals[i].points);
                //Adicinar a parte dinamica do rank
                txt += `
                    
                    <li>
                        <div class="box"><img class="profilePicture mx-auto rounded-circle" src="./images/profile.png" alt="">
                        </div>
                        <span id="name" class="name">${operationals[i].name}</span>
                        <span id="points" class="points">${operationals[i].points}</span>
                    </li>
                  
                `;
            }
        }
        
        txt = ` </ul>
            </div>
        `;
        //envia a tabela construida para a view e mostra no object com ID result
    rankList.innerHTML = txt;
    }
    fetchAsync().then(data => console.log("ok")).catch(reason => console.log(reason.message));

}