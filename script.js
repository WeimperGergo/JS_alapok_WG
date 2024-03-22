window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa1();
    esemenyKezeles1();
    esemenyKezeles2();
    esemenyKezeles3();
    sotetmod();
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

// Innen JQuery-vel íródott

function elemekFormazasa1() {
    const ELEM = $(".lista");
    //console.log(ELEM)
    ELEM.addClass("formazott");
}

function esemenyKezeles1() {
    const ELEM = $(".lista");
    const kattDIV = $(".kattintasutan"); 
    ELEM.on("click", function(){
        kattDIV.html(ELEM.html());
    });

}

function esemenyKezeles2() {
    const ELEM = $(".feladat");
    let gomb = `<button style=\'display: block; margin: auto; margin-bottom: 10px;\'>Hozzáad</button>`;
    ELEM.html(gomb);
    const gombELEM = $(".feladat button");
    gombELEM.on("click", function(){
        ELEM.append("<img src=\'https://scontent.fbud10-1.fna.fbcdn.net/v/t39.30808-6/305039025_507761254687514_4156001838985411102_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=SYIkQ2R_YiIAX-23FtL&_nc_ht=scontent.fbud10-1.fna&oh=00_AfAPKqzn8ytWW7rw-kdr0pnM3WcDH0H_t19yHKEvAZKVdw&oe=6601EAE1\' alt=\'Retard cica\' style=\'width: 100%; height: 200px;\'>");
    });
}

function esemenyKezeles3() { // Nem működik
    const ELEM = $("section .tarolo div");
    let elemTARTALOM = [];
    const EREDMENY = $(".eredmeny");
    for (let i = 0; i < ELEM.length; i++) {
        elemTARTALOM[i] = ELEM.eq(i).html();
        ELEM.on("click", function(){
            EREDMENY.append(elemTARTALOM[i]);
        });
    }
}

function esemenyKezeles4() {
    
}

function sotetmod() {
    const ELEM = $("body");
    const GOMB = $("#sotetKapcsolo");
    ELEM.toggleClass("sotet");
    GOMB.on("click", function(){
        ELEM.toggleClass("sotet");
    });
}

function randomGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}