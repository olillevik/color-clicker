(function () {
    'use strict';

    //model
    //array of four colours
    //current colour
    //timer
    //points counter

    var el = function (id) {
        return document.getElementById(id + "");
    };

    var oppdater = function () {
        var knappTrykket = this.id;
        console.log("Knapp " + this.id + " trykket");

        //if knappTrykket.color === current.color
        //points.counter++

        //refresh current

        vis();
    };

    var vis = function (id) {
        //render model
    }

    for (var feltId = 0; feltId <= 5; feltId++) {
        el(feltId).addEventListener("click", oppdater);
    }

})();