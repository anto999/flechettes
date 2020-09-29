$('.bouledebillard').click(b1);
$('#nul').click(b0);
$('.boule').click(viber);

function b0(){
    var thisnumb=parseInt(this.innerText);
    $("#ligne_"+result).css("font-weight","initial");
    arraybillard.lastCoup=0;
    arraybillard.histo.push(thisnumb);
    arraybillard.ptsRestantsEnJeu=arraybillard.ptsRestantsEnJeu-thisnumb;
    nextPlayerbillard();
}

function b1(){
    var thisnumb=parseInt(this.innerText);
    var del = arraybillard.array;
    var index=del.indexOf(thisnumb);
        if (index> -1){
            del.splice(index,1);
        $("#boule"+thisnumb).removeClass("boulevert");
        $("#boule"+thisnumb).removeClass("boulerouge");
        $("#boule"+thisnumb).removeClass("boule");
        $("#boule"+thisnumb).removeClass("boule"+thisnumb);
        $("#boule"+thisnumb).addClass("boulemorte");
        array[result].tableaubillard.push(thisnumb);
        arraybillard.histo.push(thisnumb);
        arraybillard.ptsRestantsEnJeu=arraybillard.ptsRestantsEnJeu-thisnumb;
        arraybillard.lastCoup=1;
        array[result].fleche1=thisnumb;
        array[result].resultatTotal=array[result].resultatTotal+  array[result].fleche1;
        displayContainerBillard();
        $("#ligne_"+result).css("font-weight","initial");
        billardWin();
        nextPlayerbillard();
    }//fin if
}//fin b1

function displayContainerBillard(){
    var a = document.getElementById('input_nbplayer0').value;
     var card ='<div class ="containerBillard">';
     b=0;
     card += ' <table style="width:75%; font-size:1.3em; border: solid 2px; margin-top:5px;">';
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
        for(i=0;i<a;i++)
        {
            card += ' <tr  id="ligne_'+b+'">';
            card += '      <td>';
            card += '         <div id="nomjoueur'+i+'">'+array[b].name+'</div>';
            card += '       </td>';
            card += '      <td>';
            card += '        <div class ="" id="score'+i+'"> '+array[b].resultatTotal+'</div>';
            card += '      </td>';
            card += '      <td>';
            card += '        <div class ="" id="positionBillard_'+i+'"> '+array[b].position+'</div>';
            card += '      </td>';
            card += ' </tr>';
            b=b+1;
         }
         card += '</table>';
         card +=  '<div class="case_vide" id ="retourBillard" onclick="returnBillard()">';
         card +=     '<img class="backBillard" src=images/icons/back.png>';
         card +=  '</div>';// fin case_vide
         card +='<div>';//fin containerBillard

         $("#h6").html(card);
         $("#h6").css("display","flex");
         return parseInt(a);
      }//fin displayContainerBillard()

function nextPlayerbillard()
{
    if (result>= array.length-1)
    {
        result=0;
        document.getElementById("titre").innerHTML="A  "+array[result].name+" de jouer !" ;
        var eles = document.getElementsByClassName("nbtour");
        tour++;
        for(var i in eles)
        {
            document.getElementsByClassName("nbtour")[i].innerText = tour;
        }
    }else{
        result=result+1;
        document.getElementById("titre").innerHTML="A  "+array[result].name+" de jouer !" ;
    }
    $("#ligne_"+result).css("font-weight","bold");
    displayPositionBillard();
}
//var res=1;

function myFunc(total, num) {
    return total + num;
  }

function billardWin()
{

    if (arraybillard.ptsRestantsEnJeu==0)
    {
        var nbjoueurs=array.length;
        var scoretotal
        for(i=0;i<nbjoueurs;i++)
        {
            scoretotal =array[i].resultatTotal;
            arraybillard.score.push(scoretotal)
        }
        console.log(arraybillard.score);
        var verifSiégalité=arraybillard.score;//on créé un tableau dans lequel on supprime le score max
        var indexmax = arraybillard.score.indexOf(Math.max(... arraybillard.score));
       // console.log(indexmax);
        verifSiégalité.splice(indexmax, 1);
       // console.log(arraybillard.array);
        modalwin();
        document.getElementById("titre").innerHTML="Victoire de  " +array[indexmax].name+" !"//ici modalwin ne suffit pas car elle fait appler a array[name] alors que nous voulons array[indexmax]
        displayrestart();
        $('.containerboule').css("display","none");//on efface les boules
        displayPositionBillard();
        throw new Error('This is not an error. This is just to abort javascript');//juste pour stopper le script et ne pas passer à l'instruction suivante
    }
}

class Billard
{
    constructor(){
        this.array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
        this.ptsRestantsEnJeu=[210];this.histo=[];this.lastCoup=1;this.score=[];
    }
}

var arraybillard="";
function billard(){
    addPlayer();//créer les joueurs
    $('#criquetDiv').css('display', 'none');
    var bil =new Billard;
  //  console.log(bil);
    arraybillard=bil;
    $('.containerboule').css("display","flex");
    $('#h6').css("display","none");
    document.getElementById("titre").innerHTML="A  "+array[result].name+" de jouer !" ;
    displayContainerBillard();
    $("#ligne_"+result).css("font-weight","bold");
    $('.otherOptions').css("display","none");

    return bil;
}

function toto(){
    var toto=billard();
    console.log(toto);
    return toto;
}

function displayPositionBillard(){
    for (a=0;a<array.length;a++){
        totauxEnCours.push(array[a]);
      }
      totauxEnCours.sort(function(a, b){
        if(a.resultatTotal > b.resultatTotal)
            return -1;
        if(a.resultatTotal < b.resultatTotal)
            return 1;
        return 0;
      });

      for(i=0;i<array.length;i++) {
        if(i != 0 && totauxEnCours[i].resultatTotal == totauxEnCours[i-1].resultatTotal)  // Si on a le même score que le précédent, on donne le même classement
            totauxEnCours[i].position = totauxEnCours[i-1].position;
        else                                            // Sinon on met bien l'index +1
            totauxEnCours[i].position = i+1;
    }
      for (a=0;a<array.length;a++){
        document.getElementById("positionBillard_"+a).innerHTML=array[a].position;
      }
   //   console.log(totauxEnCours);
      totauxEnCours=[];
}
//a ajouter:
function returnBillard(){

    if (arraybillard.histo.length==0){
        console.log("ko");
    }else{
        $("#ligne_"+result).css("font-weight","initial");
        nextPlayerInvers();
        $("#ligne_"+result).css("font-weight","bold");
        var lastNumberScored =arraybillard.histo[arraybillard.histo.length-1];
        console.log(lastNumberScored);//dernier element ajouté
        array[result].resultatTotal = array[result].resultatTotal-lastNumberScored;
        displayContainerBillard();
        displayPositionBillard();
        $("#ligne_"+result).css("font-weight","bold");
        arraybillard.histo.pop();
       // $("#boule"+lastNumberScored).css("visibility","initial");
        $("#boule"+lastNumberScored).removeClass("boulemorte");
        $("#boule"+lastNumberScored).addClass("boule");
        arraybillard.array.push(lastNumberScored);
        document.getElementById("titre").innerHTML="A  "+array[result].name+" de jouer !" ;
        arraybillard.ptsRestantsEnJeu=arraybillard.ptsRestantsEnJeu+lastNumberScored;
    }
}//fin returnBillard


/////////////////////////////
////////////billartdColor:////////////////
//////////////////////////////////

class billardcolor
{
    constructor(rouge,vert,premiercoup){
        this.rouge=0;this.vert=0;this.premiercoup=false;this.lastflech="";this.touche=2;this.arrayRouge=[];this.arrayVert=[];
    }

}
const color = new billardcolor (0,0);//pour billardcolor

$('.boulevertcolor').click(vert);
$('.boulerougecolor').click(rouge);
$('#nulcolor').click(nextPlayerBillardColor);

function nextPlayerBillardColor(){
    nextPlayer();
    if (color.lastflech=="vert"){
        $('.boulevertcolor').css('visibility', 'hidden');
        $('.boulerougecolor').css('visibility', 'initial');
        $('.boulemorte').css('visibility', 'hidden');
        color.lastflech="rouge";

    }else if (color.lastflech=="rouge"){
        $('.boulerougecolor').css('visibility', 'hidden');
        $('.boulevertcolor').css('visibility', 'initial');
        $('.boulemorte').css('visibility', 'hidden');
        color.lastflech="vert";
    }else{

    }
    color.touche=0;
}

function verifSiWinBillardColor(){
    if (color.vert==10){
        console.log("winner vert!");
        $('.container-title').css('display', 'initial');
        modalwin();
    }
    else if(color.rouge==10){
        console.log("winner rouge!");
        $('.container-title').css('display', 'initial');
        modalwin();
    }
}

function vert(){
    if (color.premiercoup==false){
        document.getElementById("titre").innerHTML="Equipe vert : " +array[result].name ;
        array[result].equipe="vert";
        array[result+1].equipe="rouge";
    }
        $('#retourBillardColor').css("visibilty","initial");
        var x= this.innerHTML;
        color.arrayVert.push(x);
        console.log(color.arrayVert);
        console.log(x);
        color.premiercoup=true;
        $(this).addClass("boulemorte");
       // $(this).removeClass("boulevertcolor");
        color.vert=color.vert+1;
        color.lastflech="vert";
        console.log(color.vert);
        $('.container-title').css('display', 'none');
        verifSiWinBillardColor();
        array[result].resultatTotal=color.vert;
        displayContainerBillardColor();
        $('.boulerougecolor').css('visibility', 'hidden');
      //  $(this).css('visibility', 'hidden');
        $('#nulcolor').css('visibility', 'initial');
        color.touche=1;
}

function rouge(x){
    if (color.premiercoup==false){
        document.getElementById("titre").innerHTML="Equipe rouge : " +array[result].name ;
        array[result].equipe="rouge";
        array[result+1].equipe="vert";
    }
        $('#retourBillardColor').css("visibilty","initial");
        var x= this.innerHTML;
        color.arrayRouge.push(parseInt(x));
        console.log(color.arrayRouge);
        color.premiercoup=true;
        $(this).addClass("boulemorte");
      //  $(this).removeClass("boulerougecolor");
        color.rouge=color.rouge+1;
        color.lastflech="rouge";
        console.log(color.rouge);
        $('.container-title').css('display', 'none');
        verifSiWinBillardColor();
        array[result].resultatTotal=color.rouge;
        displayContainerBillardColor();
        $('.boulevertcolor').css('visibility', 'hidden');
       // $(this).css('visibility', 'hidden');
        $('#nulcolor').css('visibility', 'initial');
        color.touche=1;

}

function billardColor(){
    myfunctionBillardColor();
    $('#criquetDiv').css('display', 'none');
    $('.containerbouleColor').css("display","flex");
    document.getElementById("titre").innerHTML="A  "+array[result].name+" de jouer !" ;
    $('#nulcolor').css('visibility', 'hidden');
    $(".otherOptions").css("display","none");
    $("#containertitrecriquet").css("display","none");
    //var color = new billardcolor (0,0);
}

function myfunctionBillardColor(){
    $('.rules').css('display', 'none');
    $('.backMenu').css('display', 'none');
    var b = document.getElementById('input_nbplayer0').value;//la valeur de la liste déroulante = aux nombres de joueurs
    var x = document.getElementsByClassName("input_add_name");//x.length retournera le nombre de joueurs
    console.log("laa: "+b);
    var res=[];
    var a=0;//pr recup l'index du tableau
    var aa=1;//pr le numero du joueur
    for (i=2;i>0;i--)
    {
        if(rapido.state=="ok")
        { //
            var nom = "joueur "+aa;
            console.log(nom);
            console.log("test ici");
            res.push(nom);
            console.log(res);
            aa=aa+1;
        }
        else
        {
            var nom = x[a].value;
            console.log(nom);
            res.push(nom);
            a=a+1;
        }
    }//fin for
    console.log(res);
    createPlayerBillardColor();
        function createPlayerBillardColor()
        {  // returnRes();
            //var P = document.getElementById('input_nbplayer0').value;
            for (i=0;i<2;i++)
            {
            const player = new Player();
            var x = res[i];
                console.log(x);
                player.name= x;
                player.num=i;
                array.push(player)
                console.log(array);
               }//fin for
               $('#inputname').css('display', 'none');//fait disparaitre le champ où on doit remplir son nom et les jeux disponibles
               $('#games').css('display', 'none');//fait disparaitre le champ où on doit remplir son nom et les jeux disponibles
               fullscreen();
        }//fin createPlayer
    document.getElementById("lancer1").focus();

}// fin myfunctionBillardColor

function displayContainerBillardColor(){
    var a = document.getElementById('input_nbplayer0').value;
    console.log(a);
     var card ='<div class="containerBillardColor">';
     b=0;
     card += ' <table style="width:70%;font-size:1.3em; border: solid">';
     card += '      <tr style="border-bottom: 1px solid black;">';
     card += '        <td>';
     card += '            <div class="table_nom_joueur">';
     card += '                Joueur';
     card += '           </div>';
     card += '        </td>';
     card += '        <td>';
     card += '            <div class="table_nom_joueur">';
     card += '                Equipe';
     card += '           </div>';
     card += '        </td>';
     card += '        <td>';
     card += '           Score';
     card += '       </td>';
     card += '   </tr>';
        for(i=0;i<2;i++)
        {
        //console.log(array[b]);
            card += ' <tr id="ligne_'+b+'" style="font-weight:600" class="'+array[b].equipe+ '">';
            card += '      <td>';
            card += '         <div id="nomjoueur'+i+'">'+array[b].name+'</div>';
            card += '       </td>';
            card += '      <td>';
            card += '        <div class ="" id="equipe'+i+'"> '+array[b].equipe+'</div>';
            card += '      </td>';
            card += '      <td>';
            card += '        <div class ="" id="score'+i+'"> '+array[b].resultatTotal+'</div>';
            card += '      </td>';
            card += ' </tr>';

            b=b+1;
         }
         card += ' </table>';
         card +=    '<div class="case_vide" id ="retourBillardColor" onclick="returnBillardColor()">';
         card +=        '<img class="backBillard" src=images/icons/back.png>';
         card +=    '</div>';// fin case_vide
        // card += ' </div>';//fin containerBillardColor


         $("#h6").html(card);
         $("#h6").css("display","flex");
         return parseInt(a);
      }//fin displayContainerBillardColor()

    function returnBillardColor(){

        if (color.touche ==0){ //si on execute la fonction après "joueur suivant"
        nextPlayerInvers();

            if (color.lastflech=="vert"){
                $('.boulevertcolor').css('visibility', 'hidden');
                $('.boulerougecolor').css('visibility', 'initial');
                $('.boulemorte').css('visibility', 'hidden');


            }else if (color.lastflech=="rouge"){
                $('.boulerougecolor').css('visibility', 'hidden');
                $('.boulevertcolor').css('visibility', 'initial');
                $('.boulemorte').css('visibility', 'hidden');

            }else{
                console.log("pb returnBillardColor")
            }
        }
        else if (color.touche ==1){ //si on execute la fonction apres avoir touché une case
            if(color.lastflech=="vert"){
                color.vert=color.vert-1;
                //color.lastflech="rouge";
                var xx = color.arrayVert[color.arrayVert.length-1]
                console.log("xx= "+xx);
                $("#boule"+xx+"color").removeClass("boulemorte");

            }else if(color.lastflech=="rouge"){
                color.rouge=color.rouge-1;
              //  color.lastflech="vert";
                var xx = color.arrayRouge[color.arrayRouge.length-1]
                console.log("xx= "+xx);
                $("#boule"+xx+"color").removeClass("boulemorte");
            }
            array[result].resultatTotal --;
            displayContainerBillardColor();
        }
        else {
            console.log("erreur probleme returnBillardColor")
        }
      console.log("result : "+result);
     // $('#retourBillardColor').css("visibilty","hidden");
      $('#retourBillardColor').css("display","none");
      console.log("hidden");


      }//fin returnBillardColor