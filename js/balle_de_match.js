function balle_de_match(){
    addPlayer();
    $(".otherOptions").css("display","none");
    $("#titre").css("display","block");
    createHistoriqueJeu1();
    displaycontainerBalleDeMatch(); 
    console.log("coucou")
    document.getElementById("titre").innerHTML="A  " +array[result].name+" de jouer !" ;

}

var displaycontainerBalleDeMatch = function (){
    var a = document.getElementById('input_nbplayer0').value;
    console.log(a);
     var card ="";
     b=0;
     card += ' <table style="width:70%; font-size: 1.3em; border: solid 2px; margin-top:4px">';
     card += '      <tr style="border-bottom: 1px solid black;">';
     card += '        <td>';
     card += '            <div class="table_nom_joueur">';
     card += '                Joueur';
     card += '           </div>';
     card += '        </td>';
     card += '        <td>';
     card += '           Score';
     card += '       </td>';
     card += '        <td>';
     card += '           Pos';
     card += '       </td>';
     card += '   </tr>';
        for(i=0;i<a;i++){
            card += ' <tr  id="ligne_'+b+'">';
            card += '      <td>';
            card += '         <div id="nomjoueur'+i+'">'+array[b].name+'</div>';
            card += '       </td>';
            card += '      <td>';
            card += '        <div class ="" id="score'+i+'"> '+array[b].score+'</div>';
            card += '      </td>';
            card += '      <td>';
            card += '        <div class ="" id="scorePos'+i+'"> '+array[b].position+'</div>';
            card += '      </td>';
            card += ' </tr>';
        b=b+1;
         }    
         card += '     </table> ';
        /* card += '    <div class="case_vide_random" id ="retourRandom" onclick="returnRandom()">   ';
         card += '       <img class="backRandom" src=images/icons/back.png>   ';
         card += '     </div> ';*/

    $("#h6").html(card);
    document.getElementById("titre").innerHTML="A  " +array[result].name+" de jouer !" ; 
    $("#ligne_"+result).css("font-weight","bold");

    var card2="";
    
    card2 +=    '<div id="containerDifficulty" class="containerDifficulty">';
    card2 +=     '<button type="button" id="easy"class="easy btnballe" onclick="easy()">';
    card2 +=          'easy';
    card2 +=        '</button>';
    card2 +=     '<button type="button" id="medium"class="medium btnballe" onclick="medium()">';
    card2 +=          'medium';
    card2 +=        '</button>';
    card2 +=     '<button type="button" id="hard"class="hard btnballe" onclick="hard()">';
    card2 +=          'hard';
    card2 +=        '</button>';
    card2 +=   '</div>';
    card2 += ' <div id="container_random" class="container_random">';
    card2 += '   <div id="okBalleDeMatch" class="ok btnrandom" onclick="goodBalleDeMatch(this)">';
    card2 += '     OK';
    card2 += '   </div>';
    card2 += '   <div id="noBalleDeMatch" class="no btnrandom" onclick="badBalleDeMatch(this)">';
    card2 += '     NO';
    card2 += '   </div>';
    card2 += ' </div>';
    card2 += '  <div class="containertourRandom"> ';
    card2 += '    <div class="tour"> Tour&nbsp:</div>    ';
    card2 += '    <div class="nbtour nbtourRandom">'+tour+'</div>    ';
    card2 += '  </div> ';

    $("#randomdiv").html(card2);
}

function ChooseDifficulty(){
    console.log("choisir difficulté")

}



var difficulty=0;

function easy(min, max){
    console.log("easy");
    var min = Math.ceil(20);
    var max = Math.floor(45);
    var easyNumber= Math.floor(Math.random() * (max - min + 1)) + min;

    //var easyNumber=Math.floor(Math.random() * 40 ) +1;
    console.log(easyNumber);
    difficulty=1;
    console.log("difficulty= "+difficulty);
    $("#h7").html(easyNumber);
    $("#h8").html("facile 1pt");
    $('.h7').css("display","flex");
    $('#h8').css("display","flex");
    

}


function medium(min, max) {
    var min = Math.ceil(45);
    var max = Math.floor(75);
    console.log("medium");
    var mediumnumber= Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(mediumnumber);
    difficulty=2;
    console.log("difficulty= "+difficulty);
    $("#h7").html(mediumnumber);
    $("#h8").html("normal 2pts");
    $('.h7').css("display","flex");
    $('#h8').css("display","flex");
}


function hard(min, max) {
    var min = Math.ceil(76);
    var max = Math.floor(120);
    console.log("hard");
    var hardnumber= Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(hardnumber);
    difficulty=3;
    console.log("difficulty= "+difficulty);
    $("#h7").html(hardnumber);
    $("#h8").html("difficile 3pts");
    $('.h7').css("display","flex");
    $('#h8').css("display","flex");
}

function veryHard(min, max) {
    var min = Math.ceil(101);
    var max = Math.floor(160);
    console.log("VeryHard");
    var mediumnumber= Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(mediumnumber);
    $('.h7').css("display","flex");
    $('#h8').css("display","flex");
}

var Victoire=0;
var verifWinBalleDeMatch = function() {
    if(array[result].score>=10){
        console.log("you win");
        modalwin();
        displayrestart();
        Victoire = 1;
        return 0;
        
    }
}

function goodBalleDeMatch(){
    console.log(difficulty);
    if (difficulty==1){
        array[result].score++;
    }else if (difficulty==2){
        array[result].score++;
        array[result].score++;
    }else if (difficulty==3){
        array[result].score++;
        array[result].score++;
        array[result].score++;
    }
    document.getElementById("score"+result).innerHTML=array[result].score;
    verifWinBalleDeMatch();
    if (Victoire==1){
        console.log("victoire");
        return 0;
    }
    nextPlayer();
    document.getElementById("titre").innerHTML="A  " +array[result].name+" de jouer !" ;
    //console.log("ca doit pas marcher");
    $('.h7').css("display","none");
    $('#h8').css("display","none");
}

function badBalleDeMatch(){

    nextPlayer();
    document.getElementById("titre").innerHTML="A  " +array[result].name+" de jouer !" ;
    $('.h7').css("display","none");
    $('#h8').css("display","none");
}