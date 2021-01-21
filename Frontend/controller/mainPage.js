import * as root from "./functions/dark.light.js";

window.onload = function () {
    (function () {
        // let route = "";
        // let typeMode = await fetch.getData(route);
        let typeMode = 0;
        let btnTypeMode = document.getElementById("btnMode");
        let btnHam = document.getElementById("ham-button");
        //MENU
        
        btnHam.addEventListener("click", function() {
            // Declare variable menu
            let menu = document.getElementById("side-menu");

            // toggle code
            if (menu.style.display === "block") {
                menu.style.display = "none";
            }
            else {
                menu.style.display = "block";
            }
        });

        root.getTypeMode(typeMode)
        root.setColor()

        btnTypeMode.addEventListener("click", function () {
            if (typeMode) {
                typeMode--;
            } else {
                typeMode++;
            }
            root.getTypeMode(typeMode);
            root.setColor()
        })
    })()
}