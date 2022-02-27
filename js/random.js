function random(){
    addPlayer();
    createHistoriqueJeu1();
    givemerandom();
    document.getElementById("titre").innerHTML="A  " +array[result].name+" de jouer !" ;
    displaycontainerRandom();
    $(".otherOptions").css("display","none");
    $("#h7").css("display","flex");
    
    
 
}

var displaycontainerRandom = function (){
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
         card += '    <div class="case_vide_random" id ="retourRandom" onclick="returnRandom()">   ';
         card += '       <img class="backRandom" src=images/icons/back.png>   ';
         card += '     </div> ';

    $("#h6").html(card);
    document.getElementById("titre").innerHTML="A  " +array[result].name+" de jouer !" ; 
    $("#ligne_"+result).css("font-weight","bold");

    var card2="";
    card2 += ' <div id="container_random" class="container_random">';
    card2 += '   <div id="ok" class="ok btnrandom" onclick="good(this)">';
    card2 += '     OK';
    card2 += '   </div>';
    card2 += '   <div id="no" class="no btnrandom" onclick="bad(this)">';
    card2 += '     NO';
    card2 += '   </div>';
    card2 += ' </div>';
    card2 += '  <div class="containertourRandom"> ';
    card2 += '    <div class="tour"> Tour&nbsp:</div>    ';
    card2 += '    <div class="nbtour nbtourRandom">'+tour+'</div>    ';
    card2 += '  </div> ';

    $("#randomdiv").html(card2);
   return parseInt(a);

}

var givemerandom = function (){
    
    var randomNumber = Math.floor(Math.random() * 20) + 1;
    console.log(randomNumber);
    $("#h7").html(randomNumber);
   /* document.getElementById("h7").setAttribute(
        "style", "background-color: beige; text-align: center; font-size:9em; line-height:130px;border: solid; width: 50%; margin: 5px auto; color:#000");
        if (window.screen.width >= 500){
            document.getElementById("h7").setAttribute(
                "style", "background-color: beige; text-align: center; font-size:10em; width:80%; margin-left:10%;");
        }*/
       // //randomNumber.push(HistoriqueJeu1Var.lastrandomnumber);
        HistoriqueJeu1Var.lastrandomnumber.push(randomNumber);
       // console.log(HistoriqueJeu1Var.lastrandomnumber);

     
    }//fin givemerandom

    var good= function(x){
        window.navigator.vibrate(50);
        $(x).addClass("grey").delay(200).queue(function(next){
            $(x).removeClass("grey");
            next();
        });
        HistoriqueJeu1Var.lastcoup=1;
        array[result].score++;
        HistoriqueJeu1Var.historique.push(JSON.stringify(array));
        document.getElementById("score"+result).innerHTML=array[result].score;
        verifWinRandom();
        givemerandom();
        displayPositionRandom();
    }

    var bad = function(x){
        window.navigator.vibrate(50);
        $(x).addClass("grey").delay(200).queue(function(next){
            $(x).removeClass("grey");
            next();
        });
        HistoriqueJeu1Var.lastcoup=0;
        HistoriqueJeu1Var.historique.push(JSON.stringify(array));
        $("#ligne_"+result).css("font-weight","initial");
        nextPlayer();
        $("#ligne_"+result).css("font-weight","bold");
        givemerandom();
        displayPositionRandom();
        document.getElementById("titre").innerHTML="A  "+array[result].name+" de jouer !" ;
    }

    var verifWinRandom = function() {
        if(array[result].score==10){
            console.log("you win");
            modalwin();
            displayrestart();
        }
    }

    function displayPositionRandom(){
        for (a=0;a<array.length;a++){
            totauxEnCours.push(array[a]);
          }
          totauxEnCours.sort(function(a, b){
            if(a.score > b.score)
                return -1;
            if(a.score < b.score)
                return 1;
            return 0;
          });
    
          for(i=0;i<array.length;i++) {
            if(i != 0 && totauxEnCours[i].score == totauxEnCours[i-1].score)  // Si on a le même score que le précédent, on donne le même classement
                totauxEnCours[i].position = totauxEnCours[i-1].position;
            else                                            // Sinon on met bien l'index +1
                totauxEnCours[i].position = i+1;
        }
          for (a=0;a<array.length;a++){
            document.getElementById("scorePos"+a).innerHTML=array[a].position;
          }
         // console.log(totauxEnCours);
          totauxEnCours=[];
    }

    function returnRandom(){

        if (HistoriqueJeu1Var.lastcoup==1){
            var histocoupPrecedent=HistoriqueJeu1Var.historique.length-2;
            var newstate=JSON.parse(HistoriqueJeu1Var.historique[histocoupPrecedent]);
            array=newstate;
            HistoriqueJeu1Var.historique.pop();//on supprime le dernier coup de l'historique
            document.getElementById("titre").innerHTML="A  " +array[result].name+" de jouer !" ;
            displaycontainerRandom();
            displayPositionRandom();
            givemerandom();

        }else{
            console.log("lastcoup bad");
            $("#ligne_"+result).css("font-weight","initial");
             // nextplayer inversé:
                if (result==0 ){
                    result=array.length-1;
                    tour--;
                    eles = document.getElementsByClassName("nbtour");
                        for(var i in eles) {
                            document.getElementsByClassName("nbtour")[i].innerText = tour;
                        }//fin f0r
                }//fin if result=0
                    else{
                        result=result-1;
                    }//fin else1
            $("#ligne_"+result).css("font-weight","bold");
            document.getElementById("titre").innerHTML="A  " +array[result].name+" de jouer !" ;
            displaycontainerRandom();
            displayPositionRandom();
            givemerandom();

         }//fin else2
      
    }//fin returnRandom