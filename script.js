window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
});

function elemekElerese1() {
    /*Ide jön az első feladat */
    const ELEM = document.querySelectorAll("section h2") [0];
    let tartalom = ELEM.innerHTML;
    console.log(tartalom);
}
function elemekElerese2() {
    /*Ide jön az 2.  feladat */
    let tartalom = `<p>Jó reggelt!</p>`;
    const ELEM = document.getElementById("ide");
    ELEM.innerHTML = tartalom;
}
function elemekElerese3() {
    /*Ide jön az 3. feladat */
    const ELEM = document.getElementsByClassName("ide") [0];
    ELEM.innerHTML = `<p>Jó reggelt!</p>`;
}
function elemekElerese4() {
    const ELEM = document.querySelectorAll(".lista") [0];
    let szoveg = "<ul>";
    for (let i = 0; i < 5; i++) {
        let szam = randomGen(10, 30);
        szoveg += `<li>${szam}</li>`;
    }
    szoveg += "</ul>";
    ELEM.innerHTML = szoveg;
}
function elemekFormazasa1() {
    const ELEM = document.querySelectorAll(".lista") [0];
    ELEM.classList.add("formazott");
}
function elemekFormazasa2() {
    
}


function randomGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}