var y = new Player;
var z = new Player;
array.push(y,z);


function testcalcul(){

 

    let a = parseInt(document.getElementById('calc5').getAttribute("attr"));

    array[0].resultatTour = array[0].resultatTour+ a;
    

    document.getElementById("resultTourDiv").innerText = array[0].resultatTour;

}


var lancer= function(nb){
   // let a = parseInt(document.getElementById('calc5').getAttribute("attr"));
   window.navigator.vibrate(200);

        $(nb).addClass("green301").delay(200).queue(function(next){
            $(nb).removeClass("green301");
            next();
        });

    let aa = parseInt(nb.getAttribute("attr"));
    console.log(aa);
    array[result].resultatTour = array[result].resultatTour+ aa;
    document.getElementById("resultTourDiv").innerText = array[result].resultatTour;
}

function valider(az){
    window.navigator.vibrate(200);
    $(az).addClass("green301").delay(200).queue(function(next){
        $(az).removeClass("green301");
        next();
    });
    document.getElementById("points-restants"+result).innerHTML=array[result].pointsRestantsActuels-array[result].resultatTour;
    nextPlayer();
    console.log("result: "+result);
    array[result].resultatTour=0;
    document.getElementById("resultTourDiv").innerText = 0;

}
