function balle_de_match(){
    addPlayer();
    $(".otherOptions").css("display","none");
    $("#titre").css("display","none");
    createHistoriqueJeu1();
    givemerandomBalleDeMatch();
    console.log("coucou")
}

function ChooseDifficulty(){
    console.log("choisir difficulté")

}

function easy(){
    console.log("easy")
    var easyNumber=Math.floor(Math.random() * 40);
    console.log(easyNumber);
}


function medium(min, max) {
    var min = Math.ceil(40);
    var max = Math.floor(70);
    console.log("medium");
    var mediumnumber= Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(mediumnumber);
}


function hard(min, max) {
    var min = Math.ceil(71);
    var max = Math.floor(100);
    console.log("hard");
    var mediumnumber= Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(mediumnumber);
}

function veryHard(min, max) {
    var min = Math.ceil(101);
    var max = Math.floor(160);
    console.log("VeryHard");
    var mediumnumber= Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(mediumnumber);
}