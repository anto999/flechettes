$(document).ready(function(){
/*   for (i=0;i<5;i++){
       myFunction();
       
   }*/
  // document.getElementById("titre").innerHTML="A  " +player1.name+" de jouer !";

   document.getElementById("score").innerHTML="score : "+ player1.fleche1;
   document.getElementById("nomjoueur").innerHTML= player1.name;
   document.getElementById("points-restants").innerHTML="points restants  : "+ player1.pointsRestantsActuels;
   document.getElementById("score-cumulé").innerHTML="score total : "+ player1.resultatTotal;
   document.getElementById("score-tour").innerHTML="score tour : "+ player1.resultatTour;
   document.getElementById("coupsrestants").innerHTML="coups restants : "+ player1.coupsRestants;

   document.getElementById("score2").innerHTML="score : "+ player2.fleche1;
   document.getElementById("nomjoueur2").innerHTML= player2.name;
   document.getElementById("points-restants2").innerHTML="points restants  : "+ player2.pointsRestantsActuels;
   document.getElementById("score-cumulé2").innerHTML="score total : "+ player2.resultatTotal;
   document.getElementById("score-tour2").innerHTML="score tour : "+ player2.resultatTour;
   document.getElementById("coupsrestants2").innerHTML="coups restants : "+ player2.coupsRestants;
   


   
  
});
function coucou(){
    console.log('coucou');
}


function pts()//retourne la valeur de fleche 1
{   //document.getElementById("titre").innerHTML="A  " +player1.name+" de jouer !";
   //on stock la valeur de l'input dans une  variable nbpts20
   player2.resultatTour=0;
   document.getElementById("score-tour2").innerHTML= "score tour : "+player2.resultatTour;

    var nbpts = document.getElementById('ptsfleches').value;
 if (isNaN(parseInt(nbpts)) == true){
        nbpts=0;
        player1.coupsRestants ++;
        console.log(nbpts);
    }

    player1.fleche1=parseInt(nbpts);
    player1.coupsRestants --;
    player1.resultatTotal =(player1.resultatTotal+ player1.fleche1) ;
    player1.resultatTour=(player1.resultatTour+player1.fleche1);
    
    document.getElementById("points-restants").innerHTML="points restant : " +player1.pointsRestantsActuels;
    document.getElementById("score-cumulé").innerHTML= "score total : "+player1.resultatTotal;
    document.getElementById("coupsrestants").innerHTML= "coups restants : "+player1.coupsRestants;
    document.getElementById("score").innerHTML= "score fleche  : "+player1.fleche1;
    document.getElementById("score-tour").innerHTML= "score tour  : "+player1.resultatTour;

    //on retourne
    console.log(player1);
    
   // console.log (JSON.stringify (nbpts));
   if (player1.fleche1== player1.pointsRestantsActuels){
     console.log('gagné!')
       gagné1();
       
       
       return parseInt(nbpts);
   }else if(player1.fleche1>player1.pointsRestantsActuels){
       perdu1();
       player1.pointsRestantsActuels=player1.pointsrestantsDebutTour;
       document.getElementById("points-restants").innerHTML="points restant : " +player1.pointsRestantsActuels;

       console.log('perdu!');
       return parseInt(nbpts);
   }else if (player1.fleche1<player1.pointsRestantsActuels){
    player1.pointsRestantsActuels=(player1.pointsRestantsActuels- player1.fleche1);
    document.getElementById("points-restants").innerHTML="points restant : " +player1.pointsRestantsActuels;
    
   // document.getElementById("points-restants").innerHTML="points restant : " +player1.pointsRestantsActuels;
    console.log(parseInt(nbpts));
    return parseInt(nbpts);
   }

}
function pts2()//retourne la valeur de fleche 1
{   
   //on stock la valeur de l'input dans une  variable nbpts20
    var nbpts2 = document.getElementById('ptsfleches2').value;
    if (isNaN(parseInt(nbpts2)) == true){
        nbpts2=0;
        player1.coupsRestants ++;
        console.log(nbpts2);
    }
    player1.fleche2=parseInt(nbpts2);
    player1.coupsRestants --;
    player1.resultatTotal =(player1.resultatTotal+player1.fleche2) ;
    player1.resultatTour=(player1.resultatTour+player1.fleche2);

    document.getElementById("points-restants").innerHTML="points restant : " +player1.pointsRestantsActuels;
    document.getElementById("score-cumulé").innerHTML= "score total : "+player1.resultatTotal;
    document.getElementById("coupsrestants").innerHTML= "coups restants : "+player1.coupsRestants;
    document.getElementById("score").innerHTML= "score fleche  : "+player1.fleche2;
    document.getElementById("score-tour").innerHTML= "score tour  : "+player1.resultatTour;

    console.log(parseInt(nbpts2));
    console.log(player1);
    if (player1.fleche2== player1.pointsRestantsActuels){
        console.log('gagné!')
          gagné1();
          
          return parseInt(nbpts2);
      }else if(player1.fleche2>player1.pointsRestantsActuels){
         console.log('perdu!');
          perdu1();
          return parseInt(nbpts2);
      }else if (player1.fleche2<player1.pointsRestantsActuels){
       player1.pointsRestantsActuels=(player1.pointsRestantsActuels- player1.fleche2);
       document.getElementById("points-restants").innerHTML="points restant : " +player1.pointsRestantsActuels;
       return parseInt(nbpts2);
      }
}
function pts3()//retourne la valeur de fleche 1
{   
   //on stock la valeur de l'input dans une  variable nbpts20
    var nbpts3 = document.getElementById('ptsfleches3').value;
    if (isNaN(parseInt(nbpts3)) == true){
        nbpts3=0;
        player1.coupsRestants ++;
        console.log(nbpts3);
    }
    player1.fleche3=parseInt(nbpts3);
    player1.coupsRestants --;
    player1.resultatTotal =(player1.resultatTotal+player1.fleche3) ;
    player1.resultatTour=(player1.resultatTour+player1.fleche3);

    document.getElementById("points-restants").innerHTML="points restant : " +player1.pointsRestantsActuels;
    document.getElementById("score-cumulé").innerHTML= "score total : "+player1.resultatTotal;
    document.getElementById("coupsrestants").innerHTML= "coups restants : "+player1.coupsRestants;
    document.getElementById("score").innerHTML= "score fleche  : "+player1.fleche3;
    document.getElementById("score-tour").innerHTML= "score tour  : "+player1.resultatTour;

    console.log(parseInt(nbpts3));
    console.log(player1);
    if (player1.fleche3== player1.pointsRestantsActuels){
        console.log('gagné!')
          gagné1();
          
          return parseInt(nbpts3);
      }else if(player1.fleche3>player1.pointsRestantsActuels){
          perdu1();
          console.log('perdu!');
          return parseInt(nbpts3);
      }else if (player1.fleche3<player1.pointsRestantsActuels){
       console.log('joueur suivant!') 
       player1.pointsRestantsActuels=(player1.pointsRestantsActuels- player1.fleche3);
       document.getElementById("titre").innerHTML="A  " +player2.name+" de jouer !";
       document.getElementById("points-restants").innerHTML="points restant : " +player1.pointsRestantsActuels;
       player2.coupsRestants=3;
       document.getElementById("coupsrestants2").innerHTML="coups restants : " +player2.coupsRestants;
       player1.pointsrestantsDebutTour=player1.pointsRestantsActuels;
       document.getElementById("form2").reset();

       return parseInt(nbpts3);
      }
    }

 function ptspts()//retourne la valeur de fleche 1
        { console.log('ca passe!');
            player1.resultatTour=0;
            document.getElementById("score-tour").innerHTML= "score tour  : "+player1.resultatTour;
            document.getElementById("titre").innerHTML="A  " +player2.name+" de jouer !";
            
        //on stock la valeur de l'input dans une  variable nbpts20
            var nbnbpts = document.getElementById('pts2fleches').value;
            if (isNaN(parseInt(nbnbpts)) == true){
                nbnbpts=0;
                player2.coupsRestants ++;
                console.log(nbnbpts);
            }
            player2.fleche1=parseInt(nbnbpts);
            player2.coupsRestants --;
            player2.resultatTotal =(player2.resultatTotal+ player2.fleche1) ;
            player2.resultatTour=(player2.resultatTour+player2.fleche1);
            
            document.getElementById("points-restants2").innerHTML="points restant : " +player2.pointsRestantsActuels;
            document.getElementById("score-cumulé2").innerHTML= "score total : "+player2.resultatTotal;
            document.getElementById("coupsrestants2").innerHTML= "coups restants : "+player2.coupsRestants;
            document.getElementById("score2").innerHTML= "score fleche  : "+player2.fleche1;
            document.getElementById("score-tour2").innerHTML= "score tour  : "+player2.resultatTour;
            //on retourne
            console.log(player2);
            
        // console.log (JSON.stringify (nbpts));
                if (player2.fleche1== player2.pointsRestantsActuels){
                    console.log('gagné!')
                    gagné2();
                    
                    return parseInt(nbnbpts);
                }else if(player2.fleche1>player2.pointsRestantsActuels){
                    perdu2();
                    console.log('perdu!');
                    return parseInt(nbnbpts);
                }else if (player2.fleche1<player2.pointsRestantsActuels){
                    player2.pointsRestantsActuels=(player2.pointsRestantsActuels- player2.fleche1);
                    document.getElementById("points-restants2").innerHTML="points restant : " +player2.pointsRestantsActuels;

                    return parseInt(nbnbpts);
                }
        }
        
function ptspts2()//retourne la valeur de fleche 1
{   
   //on stock la valeur de l'input dans une  variable nbpts20
    var nbnbpts2 = document.getElementById('pts2fleches2').value;
    if (isNaN(parseInt(nbnbpts2)) == true){
        nbnbpts2=0;
        player2.coupsRestants ++;
        console.log(nbnbpts2);
    }
    player2.fleche2=parseInt(nbnbpts2);
    player2.coupsRestants --;
    player2.resultatTotal =(player2.resultatTotal+player2.fleche2) ;
    player2.resultatTour=(player2.resultatTour+player2.fleche2);
    console.log(player2.pointsRestantsActuels);

    document.getElementById("points-restants2").innerHTML="points restant : " +player2.pointsRestantsActuels;
    document.getElementById("score-cumulé2").innerHTML= "score total : "+player2.resultatTotal;
    document.getElementById("coupsrestants2").innerHTML= "coups restants : "+player2.coupsRestants;
    document.getElementById("score2").innerHTML= "score fleche  : "+player2.fleche2;
    document.getElementById("score-tour2").innerHTML= "score tour  : "+player2.resultatTour;

    console.log(parseInt(nbnbpts2));
    console.log(player2);
    if (player2.fleche2== player2.pointsRestantsActuels){
        console.log('gagné!')
          gagné2();
          
          return parseInt(nbnbpts2);
      }else if(player2.fleche2>player2.pointsRestantsActuels){
         console.log('perdu!');
          perdu2();
          return parseInt(nbnbpts2);
      }else if (player2.fleche2<player2.pointsRestantsActuels){
       player2.pointsRestantsActuels=(player2.pointsRestantsActuels- player2.fleche2);
       document.getElementById("points-restants2").innerHTML="points restant : " +player2.pointsRestantsActuels;
       console.log(player2.pointsRestantsActuels);
       return parseInt(nbnbpts2);
      }
}
function ptspts3()//retourne la valeur de fleche 1
{   
   //on stock la valeur de l'input dans une  variable nbpts20
    var nbnbpts3 = document.getElementById('pts2fleches3').value;
    if (isNaN(parseInt(nbnbpts3)) == true){
        nbnbpts3=0;
        player2.coupsRestants ++;
        console.log(nbnbpts3);
    }
    player2.fleche3=parseInt(nbnbpts3);
    player2.coupsRestants --;
    player2.resultatTotal =(player2.resultatTotal+player2.fleche3) ;
    player2.resultatTour=(player2.resultatTour+player2.fleche3);
    

    document.getElementById("points-restants2").innerHTML="points restant : " +player2.pointsRestantsActuels;
    document.getElementById("score-cumulé2").innerHTML= "score total : "+player2.resultatTotal;
    document.getElementById("coupsrestants2").innerHTML= "coups restants : "+player2.coupsRestants;
    document.getElementById("score2").innerHTML= "score fleche  : "+player2.fleche3;
    document.getElementById("score-tour2").innerHTML= "score tour  : "+player2.resultatTour;


    console.log(parseInt(nbnbpts3));
    console.log(player2);
    if (player2.fleche3== player2.pointsRestantsActuels){
        console.log('gagné!')
          gagné2();
          
          return parseInt(nbnbpts3);
      }else if(player2.fleche3>player2.pointsRestantsActuels){
          perdu2();
          console.log('perdu!');
          return parseInt(nbnbpts3);
      }else if (player2.fleche3<player2.pointsRestantsActuels){
       console.log('joueur suivant!') 
       player2.pointsRestantsActuels=(player2.pointsRestantsActuels- player2.fleche3);
       document.getElementById("titre").innerHTML="A  " +player1.name+" de jouer !";
       document.getElementById("points-restants2").innerHTML="points restant : " +player2.pointsRestantsActuels;
       player1.coupsRestants=3;
       document.getElementById("coupsrestants").innerHTML="coups restants : " +player1.coupsRestants;
       player2.pointsrestantsDebutTour=player2.pointsRestantsActuels;
       document.getElementById("form1").reset();
       return parseInt(nbnbpts3);
      }
}

class Player
{
    constructor(num,name){
        this.num=num;this.name=name;this.pointsrestantsDebutTour=301;this.pointsRestantsActuels=301;
        this.coupsRestants = 3;this.fleche1 = 0;this.fleche2 = 0;this.fleche3 = 0;
        this.resultatTotal = 0;this.nbredetours=0;this.gagnant= false;this.test=null;this.resultatTour=0;
    }//fin constructor
   /* sayplayer()
    {
        return `${this.num} ${this.name} ${this.pointsRestants}`;
    }*/
}

var array=[];
var Match=[];

function myFunction() {


    var x = document.getElementsByClassName("input_add_name");
    var res=[];
    var a=0;
    for (i=x.length;i>0;i--){
       
      //  console.log(x[a].value);
        var nom = x[a].value;
        console.log(nom);
        res.push(x[a].value);
        a=a+1;
    }
    console.log(res);
    createPlayer();
        function createPlayer()
        {  // returnRes();
            var P = document.getElementById('input_nbplayer0').value;
            for (i=0;i<P;i++)
            {   
                
            const player = new Player();
            // console.log(player);
            // var x = document.getElementById("input_add_name0").value
            var x = res[i];
            //  var x = document.getElementById("input_add_name"+i).value
                console.log(x);
                player.name= x;
                player.num=i;
              array.push(player)
              console.log(array[i])
                console.log(array);

            
        }//fin for
        
    }//fin createPlayer
   

}// fin myfunction

$('#create_myfunction').click(myFunction);


function returnRes(){
    var joueursdanstableau=myFunction();
    console.log(joueursdanstableau);
}

function createPlayer()
    {  // returnRes();
        var P = document.getElementById('input_nbplayer0').value;
        for (i=0;i<P;i++)
        {   
            
            const player = new Player();
           // console.log(player);
           // var x = document.getElementById("input_add_name0").value
           var x = res[i];
          //  var x = document.getElementById("input_add_name"+i).value
            console.log(x);
            player.name= x;
          //  array.push(player)
          //  console.log(array[i])
            console.log(i);

            
        }
    }
    $('#creerjoueur').click(createPlayer);
   // $('#btn-display-input-name').click(createPlayer);
    $('#test').click(displayArray);

    function displayArray(){
        console.log(array)
        
    }

    function enattente(){
        var P = document.getElementById('input_nbplayer0').value;
        for (i=0;i<P;i++){
            a=0;
            var P1 = new Player;
            //var res= document.getElementById("input_add_name'+i+'").value;
            var inpt2= document.getElementById("input_add_name0").value;
           
            P1.name=inpt2;
          //  P1.name=res;

            P1.num=i;

            array.push(P1)
            console.log(array);
            document.getElementById("input_add_name1").value="";
           var inpt2= document.getElementById("input_add_name'+i+'").value;

           document.getElementById('input_add_name1').value=inpt2;

            a=a+1;


        }//fin for
        
    }//fin function
    $('#atd').click(enattente);



   
//var NbPlayer = document.getElementById('input_nbplayer').value;


/*
createInputName();
var x=createInputName();
console.log(x);*/

const player1 = new Player (1,"anto");
const player2 = new Player (2,"micka");

var arrayAntoMick=[];
arrayAntoMick.push(player1,player2);
console.log(arrayAntoMick[0].name);
console.log(arrayAntoMick);


//console.log(player);
console.log(player1);
console.log(player2);

function choisirJeu()
{
    document.getElementById("h2").innerHTML= "choisissez votre jeu";
    var listejeu= '<div class="listejeux"><button type="button" onclick= g301()>301</button><br><button type="button" onclick=g501()>501</button><br><button type="button" onclick=g701()>701</button></div'
    document.getElementById("h6").innerHTML= listejeu
}

function g301() 
{   //a remettre quand j'aurais finis la fction go()

   /* document.getElementById("h4").innerHTML= 'vous avez choisi le 301' ;
    var NbPlayer = document.getElementById("grr").value
    console.log(NbPlayer);
    document.getElementById("h5").innerHTML= 'vous etes ' +NbPlayer+ ' a jouer' ;
 
    $('#forminput').css('display', 'flex');
 
      for (i=0;i<NbPlayer-1;i++)
      {
        addplayerinput();
      }*/

   //go();

    //addplayerinput();
}

function g501() {
    document.getElementById("h4").innerHTML= 'vous avez choisi le 501' ;
}

function g701() {
    document.getElementById("h4").innerHTML= 'vous avez choisi le 701' ;
}



function addplayerinput() {
    var elmnt = document.getElementsByTagName("form")[0];
    var cln = elmnt.cloneNode(true);
    document.body.appendChild(cln);
}

function gagné1(){
    document.getElementById("titre").innerHTML="Victoire de  " +player1.name+" !"
    openmodal();
}
function gagné2(){
    document.getElementById("titre").innerHTML="Victoire de  " +player2.name+" !"
    openmodal();
}

function perdu1(){
    document.getElementById("titre").innerHTML="Domage " +player1.name+", trop de points !"
    player1.pointsRestantsActuels=player1.pointsrestantsDebutTour;
    document.getElementById("points-restants").innerHTML="points restant : " +player1.pointsRestantsActuels;
    player2.coupsRestants=3;
    document.getElementById("coupsrestants").innerHTML="coups restants : "+ player2.coupsRestants;
    player2.coupsRestants=3;
    document.getElementById("coupsrestants2").innerHTML="coups restants : "+ player2.coupsRestants;
    document.getElementById("form2").reset();
}

function perdu2(){
    document.getElementById("titre").innerHTML="Domage " +player2.name+", trop de points !"
    player2.pointsRestantsActuels=player2.pointsrestantsDebutTour;
       document.getElementById("points-restants2").innerHTML="points restant : " +player2.pointsRestantsActuels;
       player1.coupsRestants=3;
       document.getElementById("coupsrestants").innerHTML="coups restants : "+ player1.coupsRestants;
       document.getElementById("coupsrestants2").innerHTML="coups restants : "+ player2.coupsRestants;
       document.getElementById("form1").reset();
}



/*function inputPlayer(){
    var inputplayername = '';
    inputplayername += '<label id="nameplayer">prénom:</label>';
    inputplayername += '<input type="input" id="inputplayername"></input>';
    inputplayername += '<button>créer joueur !</button><br>';

    $('#h5').html(inputplayername);
  
}*/

function changescore(){
    player1.fleche1=100;
    document.getElementById("score").innerHTML="score : "+ player1.fleche1;

    console.log(player1.fleche1);
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

var nbplayers=selectNbPlayers();
function selectNbPlayers()
{    
    var NbPlayer = document.getElementById('input_nbplayer0').value;
    //console.log(NbPlayer);
   // document.getElementById("h0").innerHTML= NbPlayer;

    if (NbPlayer <= 10 )
    {
        document.getElementById("h1").innerHTML= "nous avons " +NbPlayer+  " joueurs" ;
       // createInputName();

        return parseInt(NbPlayer);
    } 
    else
    {
        document.getElementById("h1").innerHTML= "<h1>trop de monde!</h1> ";
        
    }
}

$('#btn-display-input-name').click(selectNbPlayers);

/*function displayNbPlayers(){
    var NbPlayers =selectNbPlayers();
    console.log('Vous etes' +NbPlayers+' !');
}*/


//displayNbPlayers();


function createInputName(){
    var b = document.getElementById('input_nbplayer0').value;
    a=b-b;
    //console.log(b);
    var inputname="";
        for(i=b;i>-0;i--)
        {   
            inputname +=' <input type ="text" id ="input_add_name'+a+'" class="input_add_name">';
            a=a+1
        }
        inputname += '<button type ="button" id="create_myfunctionGhost" class="create_myfunction">create!</button>';
        $("#h6").html(inputname);
        return parseInt(b);
}
$('#btn-display-input-name').click(createInputName);



function displayContainer(){
    var a = document.getElementById('input_nbplayer0').value;
    console.log(a);
     var card ="";
     b=0;
        for(i=0;i<a;i++)
        {
       
        console.log(array[b]);
        card += '<div class="tableaubouttons">'; 
            card += ' <div class="container-card" id="'+i+'">';
                card += ' <div class ="nomjoueur case pl" id="nomjoueur'+i+'">'+array[b].name+'</div>';
                card += '<div id="points-restants'+i+'" class ="case points-restants">points restants : '+array[b].pointsRestantsActuels+' </div>';
                card += ' <div class ="score case" id="score'+i+'">score: '+array[b].fleche1+'</div>';
                card += ' <div class ="score-cumulé case" id="score-cumulé'+i+'">score total '+array[b].resultatTotal+'</div>';
                card += '<div class ="score-tour case" id="score-tour'+i+'">score tour '+array[b].resultatTour+'</div>';
                card += '<div class ="coupsrestants case" id="coupsrestants'+i+'">coups restants '+array[b].coupsRestants+'</div>';
            card += '</div>';
        card += '</div>';
        b=b+1;
         }    
   
   $("#h6").html(card);
   return parseInt(a);
   
}
$('#displayContainer').click(displayContainer);



function card (){
    var card ="";

card += ' <div class="container-card">';
card += '   <div class ="nomjoueur case" id="nomjoueur">nom Joueur</div>';
card += '   <div id="points-restants" class ="case points-restants">points restants</div>';
card += '   <div class ="score case" id="score">score</div>';
card += '   <div class ="score-cumulé case" id="score-cumulé">score total</div>';
card += '   <div class ="score-tour case" id="score-tour">score tour</div>';
card += '   <div class ="coupsrestants case" id="coupsrestants">coups restants</div>';
card += '</div>';



}
$('.ok').click(card);
$("#h6").html(card);

function lancerFleche()//retourne la valeur de fleche 1
{   //document.getElementById("titre").innerHTML="A  " +player1.name+" de jouer !";
   //on stock la valeur de l'input dans une  variable nbpts20
   player2.resultatTour=0;
   document.getElementById("score-tour2").innerHTML= "score tour : "+player2.resultatTour;

    var nbpts = document.getElementById('ptsfleches').value;
 if (isNaN(parseInt(nbpts)) == true){
        nbpts=0;
        player1.coupsRestants ++;
        console.log(nbpts);
    }

    player1.fleche1=parseInt(nbpts);
    player1.coupsRestants --;
    player1.resultatTotal =(player1.resultatTotal+ player1.fleche1) ;
    player1.resultatTour=(player1.resultatTour+player1.fleche1);
    
    document.getElementById("points-restants").innerHTML="points restant : " +player1.pointsRestantsActuels;
    document.getElementById("score-cumulé").innerHTML= "score total : "+player1.resultatTotal;
    document.getElementById("coupsrestants").innerHTML= "coups restants : "+player1.coupsRestants;
    document.getElementById("score").innerHTML= "score fleche  : "+player1.fleche1;
    document.getElementById("score-tour").innerHTML= "score tour  : "+player1.resultatTour;

    //on retourne
    console.log(player1);
    
   // console.log (JSON.stringify (nbpts));
   if (player1.fleche1== player1.pointsRestantsActuels){
     console.log('gagné!')
       gagné1();
       
       
       return parseInt(nbpts);
   }else if(player1.fleche1>player1.pointsRestantsActuels){
       perdu1();
       player1.pointsRestantsActuels=player1.pointsrestantsDebutTour;
       document.getElementById("points-restants").innerHTML="points restant : " +player1.pointsRestantsActuels;

       console.log('perdu!');
       return parseInt(nbpts);
   }else if (player1.fleche1<player1.pointsRestantsActuels){
    player1.pointsRestantsActuels=(player1.pointsRestantsActuels- player1.fleche1);
    document.getElementById("points-restants").innerHTML="points restant : " +player1.pointsRestantsActuels;
    
   // document.getElementById("points-restants").innerHTML="points restant : " +player1.pointsRestantsActuels;
    console.log(parseInt(nbpts));
    return parseInt(nbpts);
   }