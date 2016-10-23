(function () {
    'use strict';

    //modell
    //liste med farger
    //nåværende farge
    //timer
    //poengteller

    var el = function (id) {
        return document.getElementById(id + "");
    };

    //oppdater modell
    var oppdater = function (timeout) {
        var knappTrykket = this.id;
        console.log("Knapp " + this.id + " trykket");

        //if knappTrykket.color === current.color
        //points.counter++

        //refresh current

        vis();
    };

    //oppdater visning
    var vis = function (id) {
        //tegn nåværende farge
        //oppdater score
    }

    //inputs
    for (var feltId = 0; feltId <= 5; feltId++) {
        el(feltId).addEventListener("click", oppdater);
    }

    //kall oppdater med timeout

})();