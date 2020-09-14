//let nbTour = 0;

function chooseNumber(){
    $('.rules').css('display', 'none');
    $('.backMenu').css('display', 'none');
    $('#inputname').css('display', 'none');//fait disparaitre le champ où on doit remplir son nom et les jeux disponibles
    $('#games').css('display', 'none');//fait disparaitre le champ où on doit remplir son nom et les jeux disponibles
    addPlayer();

    
    var txt='<div class ="chooseNumber">';
    txt +=   'Choisissez le nombre de tour :';
    txt += '</div>';
    txt += '<form class="selectplayers" id="formOptions">';
    txt +=  '<select id="input_nbTour">';
    txt +=      '<option value="1">1</option>';
    txt +=      ' <option value="2" >2</option>';
    txt +=      '<option value="3">3</option>';
    txt +=       '<option value="4">4</option>';
    txt +=        '<option value="5" selected>5</option>';
    txt +=     '<option value="6">6</option>';
    txt +=     '<option value="7">7</option>';
    txt +=     '<option value="8">8</option>';
    txt +=     '<option value="9">9</option>';
    txt +=     '<option value="10">10</option>';
    txt +=   ' </select>';
    txt += '<button type="button" id="btn-ChooseNbTour" onclick="ValidateNbTour()">ok </button>';
    
    txt += '</form>';
    txt += '';
    txt += '';
    txt += '';
    txt += '';
    txt += '';

    $("#h7").html(txt);

}

function ValidateNbTour(){
    var nbTour=document.getElementById("input_nbTour").value;
   
    array[result].nbTour = nbTour;
    parseInt(array[result].nbTour);
    console.log(nbTour);
    displayContainerBestCombo(nbTour);
    
}

function BestCombo(){
    $('.test').css("display","none");
    addPlayer();
    displayContainerBestCombo();
    $('.BestCobo').css("display","flex");
}

function displayContainerBestCombo(nbTour){
    console.log("ici");
    var a = document.getElementById('input_nbplayer0').value;
    console.log(a);
     var card ="";
     b=0;
     
     card += ' <table class="scoreCombo">';
     card += '      <tr>';
     card += '        <td>';
     card += '            <div class="table_nom_joueur">';
     card += '                Joueur';
     card += '           </div>';
     card += '        </td>';
     card += '        <td>';
     card += '           Meilleur<br>Score';
     card += '       </td>';
     card += '        <td id="position">';
     card += '          Position';
     card += '       </td>';
     card += '   </tr>';
     
        for(i=0;i<a;i++)
        {
       
            card += ' <tr  id="ligne_'+b+'">';
            card += '    <td>';
            card += '        <div id="nomjoueur'+i+'">'+array[b].name+'</div>';
            card += '    </td>';
            card += '    <td>';
            card += '       <div id="score-max'+b+'">';
            card += '           '+array[b].meilleurscore+'';
            card += '       </div>';
            card += '    </td>';
            card += '    <td id="position_'+b+'">';
            card += '          0';
            card += '     </td>';
            card += '   </tr>';
 
        b=b+1;
         }   
      card += '</table> ';
      card += '<div class="containertourbest">';
      card +=   '<div> ';
      card +=       '   Tour: ';
      card +=   '</div> ';
      card +=   '<div class="nbtour" id="containertourbest"> ';
      card +=      tour;
      card +=   '</div> ';
      card +=   '<div> ';
      card +=   ' /'+nbTour ;
      card +=   '</div> ';
      card += '</div> ';

   $("#h6").html(card);
   document.getElementById("titre").innerHTML="A  "+array[result].name+" de jouer !" ;
   //$(".f1").css("display","flex");
   $("#ligne_"+result).css("font-weight","bold");
   $('#h7').css('display', 'none');
   $('.BestCombo').css('display', 'flex');
   createHistoriqueJeu1();//on essaie avec cette variable, pas la pein de creer un objet historique pour tous les jeux?
   return parseInt(a);
   
}//fin displayContainerCombo()

var lancerBest = function(nb){
    window.navigator.vibrate(100);
     
    $(nb).addClass("green301").delay(200).queue(function(next){
        $(nb).removeClass("green301");
        next();
    });
    let aa = parseInt(nb.getAttribute("attr"));
    array[result].resultatTour =array[result].resultatTour+ aa;
    document.getElementById("resultTourDivBest").innerText = array[result].resultatTour; 
}

function validerBest(az){
    window.navigator.vibrate(100);
    $(az).addClass("green301").delay(200).queue(function(next){
        $(az).removeClass("green301");
        next();
      
    });
       
        array[result].tousLesCoups.push(array[result].resultatTour);
        array[result].meilleurscore = Math.max(...array[result].tousLesCoups);
        document.getElementById('score-max'+result).innerHTML=array[result].meilleurscore;
        document.getElementById('resultTourDivBest').innerHTML=0;
        array[result].resultatTour =0;
        $("#ligne_"+result).css("font-weight","initial");
        nextPlayer();
        document.getElementById("titre").innerHTML="A  " +array[result].name+" de jouer !" ;
        $("#ligne_"+result).css("font-weight","bold");
        displayPosition();
        HistoriqueJeu1Var.historique.push(JSON.stringify(array));
       
        if (tour> array[0].nbTour){ //on a stocké la variable dans array[0].nBtour car...je ne savais pas faire autrement!(putin de portée des variables)
            BestComboWin();
        }
        
        function BestComboWin()
        {
                var nbjoueurs=array.length;
                var bestScore;
                var totaux=[];
                for(i=0;i<nbjoueurs;i++){
                        bestScore =array[i].meilleurscore;
                        totaux.push(bestScore);
                    }
                var verifSiégalité=totaux;//on créé un tableau dans lequel on supprime le score max
                var indexmax = totaux.indexOf(Math.max(... totaux));
                verifSiégalité.splice(indexmax, 1);
                
                modalwin();
                document.getElementById("titre").innerHTML="Victoire de  " +array[indexmax].name+" !"//ici modalwin ne suffit pas car elle fait appler a array[name] alors que nous voulons array[indexmax] 
                $("#ligne_"+result).css("font-weight","initial");
                $("#ligne_"+array[indexmax].num).css("font-weight","bold");
                displayrestart();
                $('.BestCombo').css("display","none");//on efface les boules
                document.getElementById("containertourbest").innerText= tour-1;
                
        
                throw new Error('This is not an error. This is just to abort javascript');//juste pour stopper le script et ne pas passer à l'instruction suivante
        }

}//fin validerBest
let totauxEnCours=[];
function displayPosition(){
    for (a=0;a<array.length;a++){
        totauxEnCours.push(array[a]);
      }
      totauxEnCours.sort(function(a, b){
        if(a.meilleurscore > b.meilleurscore)
            return -1;
        if(a.meilleurscore < b.meilleurscore)
            return 1;
        return 0;
      });

      for(i=0;i<array.length;i++) {
        if(i != 0 && totauxEnCours[i].meilleurscore == totauxEnCours[i-1].meilleurscore)  // Si on a le même score que le précédent, on donne le même classement
            totauxEnCours[i].position = totauxEnCours[i-1].position;
        else                                            // Sinon on met bien l'index +1
            totauxEnCours[i].position = i+1;
    }
      for (a=0;a<array.length;a++){
        document.getElementById("position_"+a).innerHTML=array[a].position;
      }
      totauxEnCours=[];
}

function returnBest(){
    var histocoupPrecedent=HistoriqueJeu1Var.historique.length-2;
    var newstate=JSON.parse(HistoriqueJeu1Var.historique[histocoupPrecedent]);

    $("#ligne_"+result).css("font-weight","initial");
    //nextplayer inversé:
    if (result==0 ){
        result=array.length-1;
        tour--;
        eles = document.getElementsByClassName("nbtour");
            for(var i in eles) {
                document.getElementsByClassName("nbtour")[i].innerText = tour;
            }

    }
    else{
        result=result-1;

    }

    $("#ligne_"+result).css("font-weight","bold");
    document.getElementById("resultTourDiv").innerText = 0;

    array=newstate;
    HistoriqueJeu1Var.historique.pop();//on supprime le dernier coup de l'historique
    document.getElementById("titre").innerHTML="A  " +array[result].name+" de jouer !" ;
    document.getElementById("score-max"+result).innerHTML=array[result].meilleurscore;
    displayPosition();

}