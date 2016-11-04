(function () {
    'use strict';

    //data
    var farger = ["red", "yellow", "blue"];
    var tekst = ["RØD", "GUL", "BLÅ"];
    var poeng = 0;
    var slutt = false;

    var el = function (id) {
        return document.getElementById(id + "");
    };

    var settNyFarge = function () {
        el("farge").style.color = farger[Math.random() * 3];
        el("farge").style.color = tekst[Math.random() * 3];
    }

    //oppdater modell
    var knappTrykket = function () {
        if (slutt === false) {
            console.log("Knapp " + this.id + " trykket");

            var valgtFarge = el(this.id).style.color;
            var riktigFarge = el("farge").style.color;

            if (valgtFarge === riktigFarge) {
                poeng = poeng + 1;
            }
        }
        settNyFarge();
    }

    var timeout = function () {
        slutt = true;
    };

    //inputs
    for (var feltId = 0; feltId <= 2; feltId++) {
        el(feltId).addEventListener("click", knappTrykket);
    }

    window.setInterval(timeout, 100000);

    settNyFarge();
})();