function random(){
    myFunction();
    givemerandom();
    document.getElementById("titre").innerHTML="A  " +array[result].name+" de jouer !" ;
    displaycontainerRandom();
    
 
}

var displaycontainerRandom = function (){
    var a = document.getElementById('input_nbplayer0').value;
    console.log(a);
     var card ="";
     b=0;
     card += ' <table style="width:50%">';
     card += '      <tr>';
     card += '        <td>';
     card += '            <div class="table_nom_joueur">';
     card += '                joueur';
     card += '           </div>';
     card += '        </td>';
     card += '        <td>';
     card += '           score';
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
            card += ' </tr>';
        b=b+1;
         }    

    $("#h6").html(card);
    document.getElementById("titre").innerHTML="A  " +array[result].name+" de jouer !" ; 
    $("#ligne_"+result).css("font-weight","bold");

    var card2="";
    card2 += ' <div id="container_random" class="container_random">';
    card2 += '   <div id="ok" class="btnrandom" onclick="good()">';
    card2 += '     ok';
    card2 += '   </div>';
    card2 += '   <div id="no" class="btnrandom" onclick="bad()">';
    card2 += '     no';
    card2 += '   </div>';
    card2 += ' </div>';

    $("#randomdiv").html(card2);
   return parseInt(a);

}

var givemerandom = function (){
    var randomNumber = Math.floor(Math.random() * 20) + 1;
    console.log(randomNumber);
    $("#h7").html(randomNumber);
    document.getElementById("h7").setAttribute(
        "style", "background-color: beige; text-align: center; font-size:10em; ");
     
    }//fin givemerandom

    var good= function(){
        array[result].score++;
        document.getElementById("score"+result).innerHTML=array[result].score;
        verifWinRandom();
        givemerandom();
    }

    var bad = function(){
        $("#ligne_"+result).css("font-weight","initial");
        nextPlayer();
        $("#ligne_"+result).css("font-weight","bold");
        givemerandom();
        document.getElementById("titre").innerHTML="A  "+array[result].name+" de jouer !" ;
    }

    var verifWinRandom = function() {
        if(array[result].score==10){
            console.log("you win");
            modalwin();
            displayrestart();
        }
    }