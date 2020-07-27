$(document).ready(function(){
    
    $('.container-title').css("margin-top","300px");
    $('.select_game').css("display","none");
    $('.200').css("display","none");
    $('.containerboule').css("display","none");

    btnWall();
    document.getElementById("input_nbplayer0").focus();

});

//testwidth();
//test device width
function animateIfDesktop(){
    if (window.screen.width >= 500){
        $(this).animate({    
            fontSize:'2em',
        })
        $(this).animate({    
            fontSize:'1em',
        })
    }
}
function viber(){
    window.navigator.vibrate(130);
}



var fullscreen= function(){
    if (window.screen.width <= 500){
    document.documentElement.webkitRequestFullScreen();
    console.log("fullscreen");
    }
} 

class billardcolor
{
    constructor(rouge,vert,premiercoup){
        this.rouge=0;this.vert=0;this.premiercoup=false;this.lastflech=""};
        
}

class Rapide{
    constructor(state){
        this.state="";
    }

}
const rapido = new Rapide ("no");
const color = new billardcolor (0,0);//pour billardcolor

function partie_rapide(){
    window.navigator.vibrate(130);
   rapido.state="ok";
    console.log(rapido);
    displayGamesAndRules();
    $("#formOptions").hide(100);
    $("#formOptions").css("flex-wrap","wrap");
    $('#games').css('display', 'flex')
    document.getElementById("titre").innerHTML="Choisisez un jeu" ;
    
}

var displayRules = function(){ //affiche la modale des règles
    modalRules.style.display = "block";
}

var closemodalrules= function(){//ferme la modale des règles
    modalRules.style.display = "none";
}

var displayrestart = function(){ //affiche le btn restar a la fin d'une game
    var cardRestart = '<button type ="button" id="restartButton" onclick="restart()">restart</button>';
    $('#restart').css('visibility', 'initial');
    //$('#restart').css('margin-top',  '40px');

    $("#restart").html(cardRestart);
}

var restart = function(){ //reload la page
    document.location.reload(true);
}

$('#btn-display-input-name').click(createInputName);

function displayGamesAndRules(){
    var games=""; 
    games += '<button type ="button" id="create_myfunctionGhost" onclick="enchaine()" class="create_myfunction games">301</button>';
    games += '<button type ="button" id="create_myfunctionGhost" onclick="enchaine501()" class="create_myfunction games">501</button>';
    games += ' <button type ="button" class="button_criquet games" onclick="criquet()" id="criquet">criquet</button>';
    games += '<button type ="button" id="create_myfunctionGhost200" onclick="displayContainer200TEST()" class="create_myfunction games">+100</button>';
    games += ' <button type ="button" class="create_myfunction games" onclick="billard()" id="billard">billard</button>';
    games += ' <button type ="button" class="create_myfunction games" onclick="billardColor()" id="billardcolor">billard color</button>';
    
    games += ' <button type ="button" class="button_random games" onclick="random()" id="random">random</button>';

    var rules='<button type ="button" class="button_rules rules" onclick="displayRules()" id="rules">Règles</button>';
    var back ='<div class="backMenu" id="retourmenu" onclick="restart()">';
    back +=       '<img class="backMenu" src=images/icons/back.png>';
    back +=    '</div>'
    
    $("#games").html(games);
    $("#rules").html(rules);
    $("#back").html(back);
}



function createInputName(){
    var b = document.getElementById('input_nbplayer0').value;//la valeur de la liste déroulante = aux nombres de joueurs
    a=b-b;//pour l'id du joueur
    var c =1; //pour placeholder
    //console.log(b);
    var inputname="";
   
    
        for(i=b;i>-0;i--)
        {   
            inputname +=' <input type ="text" placeholder="enter player'+c+' name" id ="input_add_name'+a+'" class="input_add_name"><br>';
            a=a+1;
            c=c+1;
        }
        $("#inputname").html(inputname);
        displayGamesAndRules();

       
        
        $('.select_game').css('display', 'none');
        $("#formOptions").hide(100);
        $("#formOptions").css("flex-wrap","wrap");
        document.getElementById("input_add_name0").focus();
       
      // fullscreen();//passe en monde plein ecran (au click de btn-display-input-name)
        return parseInt(b);
}


$('#create_myfunctionGhost').click(enchaine);


//$('#').click(selectGame);
class GameSelected
{
    constructor(){
        this.game="";
    }//fin constructor
  
}

const gameselected = new GameSelected();


function selectGame501(){
    document.getElementById("selectedGame").innerHTML="501"
}

//501
function enchaine501(){
    selectGame501();
    addPlayer();

    displayContainer();
    $('#form').show(100);
    $('#form').css("display","flex")
    document.getElementById("lancer1").focus();
    $('.container-title').css("margin-top","10px")
    $('#icon0').css("visibility","initial");
    return 0;
}

//301
function enchaine(){
    addPlayer();
    displayContainer();
    $('#form').show(100);
    $('#form').css("display","flex")
    document.getElementById("lancer1").focus();
    $('.container-title').css("margin-top","10px")
    $('#icon0').css("visibility","initial");

    return 0;
}

function addPlayer() { //enregistre les joueurs dans un tableau puis créé ces joueurs avec createplayer()
    $('.rules').css('display', 'none');
    $('.backMenu').css('display', 'none');

    var b = document.getElementById('input_nbplayer0').value;//la valeur de la liste déroulante = aux nombres de joueurs
    var x = document.getElementsByClassName("input_add_name");//x.length retournera le nombre de joueurs
    console.log("laa: "+b);
    var res=[];
    var a=0;//pr recup l'index du tableau
    var aa=1;//pr le numero du joueur
    for (i=b;i>0;i--)
    {
        if(rapido.state=="ok")
        { //
            var nom = "joueur_"+aa;
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
    createPlayer();
        function createPlayer()
        {  // returnRes();
            var P = document.getElementById('input_nbplayer0').value;
            for (i=0;i<P;i++)
            {     
            const player = new Player();
            var x = res[i];
                console.log(x);
                player.name= x;
                player.num=i;
                var d=document.getElementById("selectedGame").innerHTML;
                console.log(d);
                if (d=="501"){
                    player.pointsRestantsActuels= 501;
                    player.pointsrestantsDebutTour=501;
                }
                array.push(player)
                console.log(array);
               }//fin for
               $('#inputname').css('display', 'none');//fait disparaitre le champ où on doit remplir son nom et les jeux disponibles
               $('#games').css('display', 'none');//fait disparaitre le champ où on doit remplir son nom et les jeux disponibles
            
        }//fin createPlayer
    document.getElementById("lancer1").focus();
    fullscreen();
}// fin myfunc

function createPlayer()
    {  // returnRes();
        var P = document.getElementById('input_nbplayer0').value;
        for (i=0;i<P;i++)
        {   
            const player = new Player();
            var x = res[i];
            console.log(x);
            player.name= x;
            console.log(i);           
        }
    }

function displayContainer(){ //créer les div nom joueur, points restants, score...

    var a = document.getElementById('input_nbplayer0').value;
    console.log(a);
     var card ="";
     b=0;

     card += ' <table>';
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
     
        for(i=0;i<a;i++)
        {
       
            card += ' <tr  id="ligne_'+b+'">';
            card += '      <td>';
            card += '         <div id="nomjoueur'+i+'">'+array[b].name+'</div>';
           
            card += '  </td>';
            card += '    <td>';
            card += '       <div id="points-restants'+b+'">';
            card += '           '+array[b].pointsRestantsActuels+'';
            card += '       </div>';
            card += '   </td>';
            card += '   </tr>';

        
       
        b=b+1;
         }   
      card += '</table> ';

   $("#h6").html(card);
   document.getElementById("titre").innerHTML="A  "+array[result].name+" de jouer !" ;
   //$(".f1").css("display","flex");
   $("#ligne_"+result).css("font-weight","bold");
   return parseInt(a);
   
}//fin displayContainer()


function displayContainer200(){
    $('#inputname').css('display', 'none');
    $('.container-title').css("margin-top","10px")
    addPlayer();
    var a = document.getElementById('input_nbplayer0').value;
    console.log(a);
     var card ="";
     b=0;
        for(i=0;i<a;i++)
        {
       
        console.log(array[b]);
        
        card += '<div class="tableaubouttons">';
        card +='<div class="ico">'; 
             card += '<img class="icon" id="icon'+i+'" src="./images/icons/cible.png">';
        card +='</div>'; 
            card += ' <div class="container-card" id="'+i+'">';
                card += ' <div class ="nomjoueur200 case pl" id="nomjoueur'+i+'">'+array[b].name+'</div>';
              
                card += ' <div class ="score200 case" id="score'+i+'">score: '+array[b].fleche1+'</div>';
               
                card += '<div class ="score-tour200 case" id="score-tour'+i+'">score tour '+array[b].resultatTour+'</div>';
                card += '<div class ="coupsrestants200 case" id="coupsrestants'+i+'">coups restants '+array[b].coupsRestants+'</div>';
                card += ' <div class ="score-cumulé200 case" id="score-cumulé'+i+'">total '+array[b].resultatTotal+'</div>';
            card += '</div>';
        card += '</div>';
        b=b+1;
         }    

   $("#h6").html(card);
   document.getElementById("titre").innerHTML="A  " +array[result].name+" de jouer !" ;
   document.getElementById("tit").innerHTML="A  " +array[result].name+" de jouer !" ;
   //$(".f1").css("display","flex");
   $("#form").css("display","none");
   $('.200').css("display","block");
   document.getElementById("lancer200_1").focus();
   if(array[result+1]){
    array[result+1].coupsRestants=3;
     document.getElementById("coupsrestants1").innerHTML= "coups restants : "+array[result+1].coupsRestants;
     $('#icon0').css("visibility","initial");
     $("#"+result).addClass("green");
}
  

   return parseInt(a);
   
}//fin displayContainer200()

function displayContainer200TEST(){
    $('#inputname').css('display', 'none');
    $('.container-title').css("margin-top","10px")
    addPlayer();
    var a = document.getElementById('input_nbplayer0').value;
    console.log(a);
     var card ="";
     b=0;

     card += ' <table>';
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


        for(i=0;i<a;i++)
        {
       
        console.log(array[b]);
        card += ' <tr  id="ligne_'+b+'">';
            card += '      <td>';
            card += '         <div id="nomjoueur'+i+'">'+array[b].name+'</div>';
           
            card += '  </td>';
            card += '    <td>';
            card += ' <div class ="" id="score-cumulé'+i+'"> '+array[b].resultatTotal+'</div>';
            card += '   </td>';
            card += '   </tr>';

        
       
        b=b+1;
         }    

   $("#h6").html(card);
   document.getElementById("titre").innerHTML="A  " +array[result].name+" de jouer !" ;
   document.getElementById("tit").innerHTML= "coups restants : "+array[result].coupsRestants;
   //$(".f1").css("display","flex");
   $("#form").css("display","none");
   $('.200').css("display","block");
   document.getElementById("lancer200_1").focus();
   if(array[result+1]){
    array[result+1].coupsRestants=3;
    $("#ligne_"+result).css("font-weight","bold");
}
  

   return parseInt(a);
   
}//fin displayContainer200TEST()

function compteurTour200(){
    var resultCompteurTour200=3;
    return resultCompteurTour200;
}

var resultTour200 =compteurTour200();


function verifSiwin() //verif si win le +100
{
    var arrayResTotal=[];
    
    for (i=0;i<array.length;i++)
    {   
         arrayResTotal.push(array[i].resultatTotal)
    }
    console.log(arrayResTotal);
      arrayResTotal.splice(result, 1);
      console.log(arrayResTotal);
      var m= Math.max(...arrayResTotal);
      console.log(m);
      console.log(array[result].resultatTotal);

      if(array[result].resultatTotal-100>=m){
         // modalwin();
        console.log('gagné!!!');
         document.getElementById("titre").innerHTML="Victoire de  " +array[result].name+" !"
         document.getElementById("tit").innerHTML="Victoire de  " +array[result].name+" !"
         array[result].gagnant=true;

         modalwin();

        $("#form200").css({ 
            display : 'none'
        })
          return 0;
      }
}
 function flech200() //au clic de du btn "lancer" une fois +100 selectioné 
 {
            var nbpts200 = document.getElementById('lancer200_1').value;
            console.log(nbpts200);
                if (isNaN(parseInt(nbpts200)) == true)
                { //verif si l'input est bien un int
                nbpts200=0;
                array[result].coupsRestants ++;
                console.log(nbpts200);
                }

            array[result].fleche1=parseInt(nbpts200);
            array[result].coupsRestants --;
            array[result].resultatTotal =(array[result].resultatTotal+ array[result].fleche1) ;
            array[result].resultatTour=(array[result].resultatTour+array[result].fleche1);
            array[result].tousLesCoups.push(array[result].fleche1);
            array[result].average =array[result].resultatTotal/array[result].tousLesCoups.length;
            var num= array[result].average.toFixed(1);
            document.getElementById("score-cumulé"+result).innerHTML=array[result].resultatTotal;
            form200.reset();
            resultTour200 =resultTour200 -1;
            console.log(resultTour200);
            verifSiwin();
            document.getElementById("tit").innerHTML= "coups restants : "+array[result].coupsRestants;
            document.getElementById("lancer200_1").focus();
            
            if(resultTour200==0){
                console.log('on change!');
                
                $('#icon'+result).css("visibility","hidden");
                resultTour200=6;
                array[result].coupsRestants =6;
                $("#ligne_"+result).css("font-weight","initial");
                nextPlayer();
                $("#ligne_"+result).css("font-weight","bold");
                var weHaveAWinner=false;
                for (i=0;i<array.length;i++){
                    if (array[i].gagnant){
                        weHaveAWinner=true;
                    }
                }
                    if (weHaveAWinner==false)
                    {
           
                array[result].resultatTour=0;
                $('#icon'+result).css("visibility","initial");
                $("#"+result).addClass("green");
                document.getElementById("titre").innerHTML="A  " +array[result].name+" de jouer !" ;
                array[result].coupsRestants=6;
                document.getElementById("tit").innerHTML= "coups restants : "+array[result].coupsRestants;
             
                    }
            }
 }//fin flech200()
class HistoriqueCriquet
{
    constructor(){
        this.historique;
    }
}

class Player
{
    constructor(num,name){
        this.num=num;this.name=name;this.score= 0;this.pointsrestantsDebutTour=301;this.pointsRestantsActuels=301;
        this.coupsRestants = 3;this.fleche1 = 0;this.fleche2 = 0;this.fleche3 = 0;this.fleche4 = 0;this.fleche5 = 0;this.fleche6 = 0;
        this.resultatTotal = 0;this.nbredetours=0;this.gagnant= false;this.test=null;this.resultatTour=0;this.tousLesCoups=[];
        this.average=0;this.tableaubillard=[];this.equipe="";this.closed={15:0,16:0,17:0,18:0,19:0,20:0,25:0,score:0,win:false };
        }//fin constructor
   /* sayplayer()
    {
        return `${this.num} ${this.name} ${this.pointsRestants}`;
    }*/
}


var array=[];
var Match=[];



$('#create_myfunction').click(addPlayer);
function returnRes(){
    var joueursdanstableau=addPlayer();
    console.log(joueursdanstableau);
}


    $('#creerjoueur').click(createPlayer);
  
    $('#test').click(displayArray);

    function displayArray(){
        console.log(array)
        
    }
const player1 = new Player (1,"anto");
const player2 = new Player (2,"micka");


function g501() {
    document.getElementById("h4").innerHTML= 'vous avez choisi le 501' ;
}

function g701() {
    document.getElementById("h4").innerHTML= 'vous avez choisi le 701' ;
}

function gagné1(){
    document.getElementById("titre").innerHTML="Victoire de  " +array[result].name+" !"
    document.getElementById("tit").innerHTML="Victoire de  " +array[result].name+" !"
    array[result].pointsRestantsActuels=0;
    document.getElementById("points-restants"+result).innerHTML=array[result].pointsRestantsActuels;
    modalwin();


    var num= array[result].average.toFixed(1);
    console.log(Math.max(...array[result].tousLesCoups))
    document.getElementById("h1").innerHTML="Vous avez fini en  " +array[result].tousLesCoups.length+" coups! moyenne : "+num+" "


  

    var li ='';
    for (i=0;i<array[result].tousLesCoups.length;i++)
    {

        
        li+= '<li class="list li'+[i]+'">';
        li+=     array[result].tousLesCoups[i];
        li+='</li>';

    }
    //pour afficher tous les coups du gagnant 
    //$("#listefinale").html(li);

    var listeCoups='';
    listeCoups += '<div class="listecoups">';
    listeCoups +=   array[result].tousLesCoups ;
    listeCoups += '</div>';
  //  $("#h2").html(listeCoups);
    //document.getElementById("h2").innerHTML=array[result].tousLesCoups;

   // $("#exampleModal").modal("show");
    //openmodal();
}
 function modalwin(){
   // $("#exampleModalCenter").modal("show");
  // document.getElementById("open").click()
  document.getElementById("titre").innerHTML="Victoire de  "+array[result].name;
  $("#titre").animate({    
      width : 'auto',
      height: '200px',
     padding:'10% 0 0',
      fontSize:'3em',
  })
  $("#containertitrecriquet").css("visibility","hidden");//pour le criquet
  displayrestart();

 }



// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
 function openmodal() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
/*span.onclick = function() {
    modal.style.display = "none";
}*/

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}








function nextPlayer(){
    if (result>= array.length-1){
        result=0;
    }else{
        result=result+1;
    }
    
}


function perdu1(){
    
    document.getElementById("titre").innerHTML="Domage " +array[result].name+", trop de points !"
    
    array[result].pointsRestantsActuels=array[result].pointsrestantsDebutTour;
    document.getElementById("points-restants"+result).innerHTML=+array[result].pointsRestantsActuels;
    array[result].coupsRestants=3;
   // document.getElementById("coupsrestants"+[result]).innerHTML="coups restants : "+ array[result].coupsRestants;
   
    document.getElementById("form").reset();
    form.reset();
    $('#icon'+result).css("visibility","hidden");
    $("#ligne_"+result).css("font-weight","initial");
    nextPlayer();
    $("#ligne_"+result).css("font-weight","bold");
    $('#icon'+result).css("visibility","initial");
    array[result].coupsRestants=3;
   // document.getElementById("coupsrestants"+[result]).innerHTML="coups restants : "+ array[result].coupsRestants;
    document.getElementById("lancer1").focus();

   // $(".f1").css("display","flex");
   // $(".f2").css("display","none");
   // $(".f3").css("display","none");
    

}


 
    function compteur(){
        var resultCompteur=0;
        return resultCompteur;
    }

    var result =compteur();

    function lancerFleche()
    { 

        var fin = false;
        console.log(result);
      
            array[result].resultatTour=0;
         //   document.getElementById("score-tour"+result).innerHTML= "score tour : "+array[0].resultatTour;
           // if (array[result])
            var nbpts = document.getElementById('lancer1').value;
            if (isNaN(parseInt(nbpts)) == true){ //verif si l'input est bien un int
                    nbpts=0;
                    array[result].coupsRestants ++;
                    console.log(nbpts);
                }
            
            array[result].fleche1=parseInt(nbpts);
            console.log(array[result].fleche1);

            array[result].coupsRestants --;
            array[result].resultatTotal =(array[result].resultatTotal+ array[result].fleche1) ;
            array[result].resultatTour=(array[result].resultatTour+array[result].fleche1);
            //document.getElementById("points-restants0").innerHTML="points restant : " +array[0].pointsRestantsActuels;

            array[result].tousLesCoups.push(array[result].fleche1);
            console.log(array[result].tousLesCoups);

            array[result].average =array[result].resultatTotal/array[result].tousLesCoups.length;
            var num= array[result].average.toFixed(1);
            console.log("average:"+num);

          //  document.getElementById("score-cumulé"+result).innerHTML= "score total : "+array[result].resultatTotal;
        //    document.getElementById("coupsrestants"+result).innerHTML= "coups restants : "+array[result].coupsRestants;
      //      document.getElementById("score"+result).innerHTML= "score fleche  : "+array[result].fleche1;
    //        document.getElementById("score-tour"+result).innerHTML= "score tour  : "+array[result].resultatTour;
           
            //console.log(array[result]);
            console.log(array[result].pointsrestantsDebutTour);
            
            // console.log (JSON.stringify (nbpts));
            if (array[result].fleche1== array[result].pointsRestantsActuels){
            console.log('gagné!')
                gagné1();
                return parseInt(nbpts);
            }
            else if(array[result].fleche1>array[result].pointsRestantsActuels){
                perdu1();
                array[result].pointsRestantsActuels=array[result].pointsrestantsDebutTour;
           //     document.getElementById("points-restants"+array[result]).innerHTML="points restant : " +array[i].pointsRestantsActuels;
                console.log('perdu!');
                return parseInt(nbpts);
            }
            else if (array[result].fleche1<array[result].pointsRestantsActuels){
            array[result].pointsRestantsActuels=(array[result].pointsRestantsActuels-array[result].fleche1);
            document.getElementById("points-restants"+result).innerHTML=array[result].pointsRestantsActuels;
            document.getElementById("lancer2").focus();
       //     document.getElementById("score"+result).innerHTML= "score fleche  : "+array[result].fleche1;
            console.log(array[result].pointsrestantsDebutTour);
            // document.getElementById("points-restants").innerHTML="points restant : " +array[0].pointsRestantsActuels;
            console.log(parseInt(nbpts));
           // $(".f1").css("display","none");
          //  $(".f2").css("display","flex");
            $("#ligne_"+result).css("font-weight","bold");

            
            return parseInt(nbpts);

            }//fin else if
     }//fin function lancerfleche



 function lancerFleche2()//retourne la valeur de fleche 2
    {   
      
           // document.getElementById("score-tour"+result).innerHTML= "score tour : "+array[result].resultatTour;
            if (array[result])
            var nbpts2 = document.getElementById('lancer2').value;

            if (isNaN(parseInt(nbpts2)) == true){ //verif si l'input est bien un int
                    nbpts2=0;
                    array[result].coupsRestants ++;
                    console.log(nbpts2);
                }
            
            array[result].fleche2=parseInt(nbpts2);
            array[result].coupsRestants --;
            array[result].resultatTotal =(array[result].resultatTotal+ array[result].fleche2);
            array[result].resultatTour=(array[result].resultatTour+array[result].fleche2);
            document.getElementById("points-restants"+result).innerHTML=array[0].pointsRestantsActuels;
            //var h=0;
            array[result].tousLesCoups.push(array[result].fleche2);
            console.log(array[result].tousLesCoups);
            array[result].average =array[result].resultatTotal/array[result].tousLesCoups.length;
            var num= array[result].average.toFixed(1);
            console.log("average:"+num);

            console.log(array[result].pointsrestantsDebutTour);
     //       document.getElementById("score-cumulé"+result).innerHTML= "score total : "+array[result].resultatTotal;
      //      document.getElementById("coupsrestants"+result).innerHTML= "coups restants : "+array[result].coupsRestants;
      //      document.getElementById("score"+result).innerHTML= "score fleche  : "+array[result].fleche2;
        //    document.getElementById("score-tour"+result).innerHTML= "score tour  : "+array[result].resultatTour;
            
            //on retourne
            console.log(array[result]);

           
            console.log(array[result].tousLesCoups);
            
            // console.log (JSON.stringify (nbpts));
            if (array[result].fleche2== array[result].pointsRestantsActuels){
            console.log('gagné!')
                gagné1();
                return parseInt(nbpts2);
            }else if(array[result].fleche2>array[result].pointsRestantsActuels){
                perdu1();
                array[result].pointsRestantsActuels=array[result].pointsrestantsDebutTour;
                document.getElementById("points-restants"+result).innerHTML=array[result].pointsRestantsActuels;
                console.log('perdu!');
                return parseInt(nbpts2);
            }else if (array[result].fleche2<array[result].pointsRestantsActuels){
            array[result].pointsRestantsActuels=(array[result].pointsRestantsActuels- array[result].fleche2);
           document.getElementById("points-restants"+result).innerHTML=array[result].pointsRestantsActuels;
            document.getElementById("lancer3").focus();
            // document.getElementById("points-restants").innerHTML="points restant : " +array[0].pointsRestantsActuels;
            console.log(parseInt(nbpts2));
            //$(".f2").css("display","none");
           // $(".f3").css("display","flex");
            console.log(array[result].pointsrestantsDebutTour);
            $("#ligne_"+result).css("font-weight","bold");
            return parseInt(nbpts2);
            

            }//fin else if
     }//fin function lancerfleche

     function lancerFleche3()//retourne la valeur de fleche 3
    {   //document.getElementById("titre").innerHTML="A  " +player1.name+" de jouer !";
        
      //  var fin = false;
        
      //$(".f3").css("display","none");
     // $(".f1").css("display","flex");
            
            
          //  document.getElementById("score-tour"+result).innerHTML= "score tour : "+array[result].resultatTour;
            if (array[result])
            var nbpts3 = document.getElementById('lancer3').value;

            if (isNaN(parseInt(nbpts3)) == true){ //verif si l'input est bien un int
                    nbpts3=0;
                    array[result].coupsRestants ++;
                    console.log(nbpts3);
                }
            
            array[result].fleche3=parseInt(nbpts3);
            array[result].coupsRestants --;
            array[result].resultatTotal =(array[result].resultatTotal+ array[result].fleche3) ;
            array[result].resultatTour=(array[result].resultatTour+array[result].fleche3);
            //document.getElementById("points-restants0").innerHTML="points restant : " +array[0].pointsRestantsActuels;
            //var h=0;
           

            array[result].tousLesCoups.push(array[result].fleche3);
            console.log(array[result].tousLesCoups);
            array[result].average =array[result].resultatTotal/array[result].tousLesCoups.length;
            var num= array[result].average.toFixed(1);
            console.log("average:"+num);

            console.log(array[result].pointsrestantsDebutTour);
   //         document.getElementById("score-cumulé"+result).innerHTML= "score total : "+array[result].resultatTotal;
     //       document.getElementById("coupsrestants"+result).innerHTML= "coups restants : "+array[result].coupsRestants;
      //      document.getElementById("score"+result).innerHTML= "score fleche  : "+array[result].fleche3;
       //     document.getElementById("score-tour"+result).innerHTML= "score tour  : "+array[result].resultatTour;
            //on retourne
            console.log(array[result]);
            
            // console.log (JSON.stringify (nbpts));
            if (array[result].fleche3== array[result].pointsRestantsActuels){
            console.log('gagné!')
                gagné1();

                return parseInt(nbpts3);
            }else if(array[result].fleche3>array[result].pointsRestantsActuels){
                perdu1();
                array[result].pointsRestantsActuels=array[result].pointsrestantsDebutTour;
                document.getElementById("points-restants"+result).innerHTML=array[result].pointsRestantsActuels;
                console.log('perdu!');
                return parseInt(nbpts3);
            }else if (array[result].fleche3<array[result].pointsRestantsActuels){
            array[result].pointsRestantsActuels=(array[result].pointsRestantsActuels- array[result].fleche3);
            document.getElementById("points-restants"+result).innerHTML=array[result].pointsRestantsActuels;
            document.getElementById("lancer1").focus();
            // document.getElementById("points-restants").innerHTML="points restant : " +array[0].pointsRestantsActuels;
            console.log(parseInt(nbpts3));
            console.log(array[result].pointsrestantsDebutTour);
            array[result].pointsrestantsDebutTour=array[result].pointsrestantsDebutTour-array[result].resultatTour
            $('#icon'+result).css("visibility","hidden");
            $("#ligne_"+result).css("font-weight","initial");
            nextPlayer();
            $('#icon'+result).css("visibility","initial");
            document.getElementById("titre").innerHTML="A  " +array[result].name+" de jouer !" ;
       
            array[result].coupsRestants=3;
         //   document.getElementById("coupsrestants"+result).innerHTML= "coups restants : "+array[result].coupsRestants;
            form.reset();
            $("#ligne_"+result).css("font-weight","bold");
            return parseInt(nbpts3);
           
            

            }//fin else if
     }//fin function lancerfleche

    

     function btnWall(){
    var card ="";
    
    card += ' <button id="container-wall" class="container-wall">wall</button>';
    $("#btnwall").html(card);

    }
    $('#btnwall').click(changeBackground);
    
    
    function changeBackground(){
        $("body").css("background-image", "url(./images/wall/wall2.jpg)");
        var card ="";
    
        card += ' <button id="container-wall2" class="container-wall">wall</button>';
        $("#btnwall").html(card);
        $('#btnwall').click(changeBackground2);

    }
    

    function changeBackground2(){

      /*  var boule ='<img class="icon" id="icon"'+result+' src="boule.png" ">';
        $(".ico").html(boule);*/

        $("body").css("background-image", "url(./images/wall/wall3.jpg)");
        var card ="";
        card += ' <button id="container-wall3" class="container-wall">wall</button>';
        $("#btnwall").html(card);
        $('#btnwall').click(changeBackground3);

    }
    function changeBackground3(){

        $("body").css("background-image", "url(./images/wall/wall4.jpg)");
        var card ="";
    
        card += ' <button id="container-wall4" class="container-wall">wall</button>';
        $("#btnwall").html(card);
        $('#btnwall').click(changeBackground4);

    }

    function changeBackground4(){
        $("body").css("background-image", "url(./images/wall/wall5.jpg)");
        var card ="";
    
        card += ' <button id="container-wall5" class="container-wall">wall</button>';
        $("#btnwall").html(card);
        $('#btnwall').click(changeBackground5);

    }

   /* function changeBackground5(){
        $("body").css("background-image", "url(./images/wall/wall6.jpg)");
        var card ="";
    
        card += ' <button id="container-wall6" class="container-wall">wall</button>';
        $("#btnwall").html(card);
        $('#btnwall').click(changeBackground6);

    }

    function changeBackground6(){
        $("body").css("background-image", "url(./images/wall/wall1.jpg)");
        var card ="";
    
        card += ' <button id="container-wall" class="container-wall">wall</button>';
        $("#btnwall").html(card);
        $('#btnwall').click(changeBackground);

    }
    */


    // ces  variables servent à "simuler" un click quand on click sur entrée (keycode 13) et aussi de "tabuler" (methode focus)
    var input = document.getElementById("lancer1");
    input.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("btn-f1").click();
            
            console.log(input);
        }
    });

    var input2 = document.getElementById("lancer2");
    input2.addEventListener("keyup", function(event) {
         
        if (event.keyCode === 13) {
            document.getElementById("btn-f2").click();
            
        }
    });

    var input3 = document.getElementById("lancer3");
    input3.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("btn-f3").click();
            
        }
    });

    var input200 = document.getElementById("lancer200_1");
    input200.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("btn200-f1").click();
            
        }
    });

  /*  var letsgo = document.getElementById("input_nbplayer0");
    letsgo.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("lancer3").focus();
        
        }
    });*/


    
