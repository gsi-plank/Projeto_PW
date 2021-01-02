let operationals = [
    {
        "name": "Borat",
        "points": "1233"
    },
    {
        "name": "Rocky",
        "points": "3221"
    },
    {
        "name": "Luffy",
        "points": "4322"
    },
    {
        "name": "Gypsy",
        "points": "3342"
    },
    {
        "name": "Pantufa",
        "points": "2321"
    }

]


window.onload = function () {

    (function fillTable() {
        // async function fetchAsync() {
        const rankList = document.getElementById("tableList");
        // const response = await fetch('https://cc102f71a59f4b86b46f44cac1acf38f.vfs.cloud9.us-east-1.amazonaws.com/operationals');
        // const operationals = await response.json();
        let txt = "";

        txt += '<div class="d-flex topThree">';
        //Adicionar a parte estatica do rank
        for (let i = 0; i < operationals.length; i++) {
            if (i === 0) {
                //confirmacao dos operacionais
                console.log(operationals[i].name);
                console.log(operationals[i].points);
                //Adicionar o primeiro lugar
                txt += `  
                <div class="box align-self-end" id="boxWinnerOne">
                    <img class="iconLaurem" src="images/icon_laurem.png">
                    </img>
                    <span>${i+1}</span>
                    <div class="spaceTopOne">
                        <img class="profilePicture mx-auto rounded-circle" src="./images/profile.png" alt="">
                    </div>
                    <div class="spaceTopTwo">
                        <label class="name">${operationals[i].name}</label>
                    </div>
                    <div class="spaceTopThree">
                        <label class="points">${operationals[i].points}</label>
                    </div>
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
                <div class="box align-self-end" id="boxWinnerTwo">
                    <img class="iconLaurem" src="images/icon_laurem.png">
                    </img>
                    <span>${i+1}</span>
                    <div class="spaceTopOne">
                        <img class="profilePicture mx-auto rounded-circle" src="./images/profile.png" alt="">
                    </div>
                    <div class="spaceTopTwo">
                        <label class="name">${operationals[i].name}</label>
                    </div>
                    <div class="spaceTopThree">
                        <label class="points">${operationals[i].points}</label>
                    </div>
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
                <div class="box align-self-end" id="boxWinnerTree">
                    <img class="iconLaurem" src="images/icon_laurem.png">
                    </img>
                    <span>${i+1}</span>
                    <div class="spaceTopOne">
                        <img class="profilePicture mx-auto rounded-circle" src="./images/profile.png" alt="">
                    </div>
                    <div class="spaceTopTwo">
                        <label class="name">${operationals[i].name}</label>
                    </div>
                    <div class="spaceTopThree">
                        <label class="points">${operationals[i].points}</label>
                    </div>
                </div>
                `;
                break;
            }
        }
        txt += '</div>';


        // Parte Dinaminca do rank
        if (operationals.length > 3) {
            txt += `
            <div class="container">
                <ul>
            `;
            for (let i = 3; i < operationals.length; i++) {
                //confirmacao dos operacionais
                console.log(operationals[i].name);
                console.log(operationals[i].points);
                //Adicinar a parte dinamica do rank
                txt += `
                <li>
                <div class="box">
                    <div class="spaceOne">
                        <span>${i + 1}</span>
                    </div>
                    <div class="spaceTwo">
                        <img class="positionProfile profilePicture mx-auto rounded-circle" src="./images/profile.png"
                            alt="">
                    </div>
                    <div class="spaceThree">
                        <span class="name">${operationals[i].name}</span>
                    </div>
                    <div class="spaceFour">
                        <span class="points">${operationals[i].points}</span>
                    </div>
                </div>
            </li>
                `;
            }
        }

        txt += ` </ul>
            </div>
        `;
        console.log(txt)
        //envia a tabela construida para a view e mostra no object com ID result
        rankList.innerHTML = txt;
        // }
        // fetchAsync().then(data => console.log("ok")).catch(reason => console.log(reason.message));
    })()
}