$(document).ready(function(){
/*   for (i=0;i<5;i++){
       myFunction();
       
   }*/
   document.getElementById("score").innerHTML="score : "+ player1.fleche1;
   document.getElementById("nomjoueur").innerHTML="joueur : "+ player1.name;
   document.getElementById("points-restants").innerHTML="points restants  : "+ player1.pointsRestantsActuels;
   document.getElementById("score-cumulé").innerHTML="score cumulé : "+ player1.resultatTour;
   document.getElementById("coupsrestants").innerHTML="cours restants : "+ player1.coupsRestants;
   document.getElementById("titre").innerHTML="A  " +player1.name+" de jouer !";
});

function selectNbPlayers()
{    
    var NbPlayer = document.getElementById('grr').value;
    //console.log(NbPlayer);
   // document.getElementById("h0").innerHTML= NbPlayer;

    if (NbPlayer <= 10 )
    {
        document.getElementById("h1").innerHTML= "nous avons " +NbPlayer+  " joueurs" ;
        choisirJeu();
        return parseInt(NbPlayer);
    } 
    else
    {
        document.getElementById("h1").innerHTML= "<h1>trop de monde!</h1> ";
        document.getElementById("h2").innerHTML= "";
        document.getElementById("h3").innerHTML= "";
    }
}

function displayNbPlayers(){
    var NbPlayers =selectNbPlayers();
    console.log('Vous etes' +NbPlayers+' !');
}

function go()
{
   
    console.log('a '+player1.name+' de jouer!');
   
        for (i=player1.coupsRestants;i>0;i--)
        {/* player1.fleche1=0;*/
            player1.fleche1=pts();

            if (player1.fleche1<player1.pointsRestantsActuels)
            {
                console.log(player1.resultatTour);
                console.log(player1.fleche1);
              // $('.score').html(NbPlayer);
                document.getElementById("score").innerHTML= selectNbPlayers();
               // pts();
                selectNbPlayers();
                /*console.log(NbPlayers);
                console.log(NbPlayer);*/
                
                player1.resultatTour = player1.resultatTour + player1.fleche1
                console.log(`resultat du tour 1 :  ${player1.resultatTour} ! `)
              //  console.log(`il reste ${p2.pv} PV à ${p2.prenom}.`)
                player1.fleche1=pts()
                player1.coupsRestants -= 1;
                player1.pointsRestantsActuels = player1.pointsrestantsDebutTour; 

                console.log('coup 1 : ' +player1.fleche1+' ! ');
                console.log('coups restants : ' +player1.coupsRestants+' ! ');
                player1.fleche1=player1.fleche1+player1.fleche1;
                console.log('pts : ' +player1.fleche1+' ! ');

                        if (player1.fleche1>player1.pointsRestantsActuels)
                        {
                            //perdu();
                            console.log("domage vous avez fait trop de points!")
                            player1.pointsRestantsActuels = player1.pointsrestantsDebutTour;    
                            console.log('coup 1 : ' +player1.fleche+' ! ');
                
                        }else if(player1.fleche1 == player1.pointsRestantsActuels) 
                        {
                            gagné();
                        }   
                console.log(player1);
                //player1.fleche=0;
            }//fin de if

            else if(player1.fleche1 == player1.pointsRestantsActuels) 
            {
                gagné();
            }
           else if (player1.fleche1>player1.pointsRestantsActuels)
            {
                //perdu();
                console.log("domage vous avez fait trop de points!")
                player1.pointsRestantsActuels = player1.pointsrestantsDebutTour;    
                console.log('coup 1 : ' +player1.fleche+' ! ');
                console.log('coups restants : ' + player1.coupsRestants+' ! ');
                player1.fleche = player1.fleche + player1.fleche;
                console.log('pts : ' +player1.fleche+' ! ');

            }//fin de else if
            
        }//fin de la boucle

}// fin de go()

//displayNbPlayers();

function pts()//retourne la valeur de fleche 1
{   document.getElementById("titre").innerHTML="A  " +player1.name+" de jouer !";
   //on stock la valeur de l'input dans une  variable nbpts20
    var nbpts = document.getElementById('ptsfleches').value;
    player1.fleche1=parseInt(nbpts);
    player1.coupsRestants --;
    player1.resultatTour =(player1.resultatTour+ player1.fleche1) ;
    

    document.getElementById("points-restants").innerHTML="points restant : " +player1.pointsRestantsActuels;
    document.getElementById("score-cumulé").innerHTML= "score cumulé : "+player1.resultatTour;
    document.getElementById("coupsrestants").innerHTML= "coups restants : "+player1.coupsRestants;
    document.getElementById("score").innerHTML= "score fleche  : "+player1.fleche1;
    //on retourne
    console.log(player1);
    
   // console.log (JSON.stringify (nbpts));
   if (player1.fleche1== player1.pointsRestantsActuels){
     console.log('gagné!')
       gagné();
       
       return parseInt(nbpts);
   }else if(player1.fleche1>player1.pointsRestantsActuels){
       perdu();
       return parseInt(nbpts);
   }else if (player1.fleche1<player1.pointsRestantsActuels){
    player1.pointsRestantsActuels=(player1.pointsRestantsActuels- player1.fleche1);
    document.getElementById("points-restants").innerHTML="points restant : " +player1.pointsRestantsActuels;
    return parseInt(nbpts);
   }

}
function pts2()//retourne la valeur de fleche 1
{   
   //on stock la valeur de l'input dans une  variable nbpts20
    var nbpts2 = document.getElementById('ptsfleches2').value;
    player1.fleche2=parseInt(nbpts2);
    player1.coupsRestants --;
    player1.resultatTour =(player1.resultatTour+player1.fleche2) ;
    player1.pointsRestantsActuels=(player1.pointsRestantsActuels- player1.fleche2);

    document.getElementById("points-restants").innerHTML="points restant : " +player1.pointsRestantsActuels;
    document.getElementById("score-cumulé").innerHTML= "score cumulé : "+player1.resultatTour;
    document.getElementById("coupsrestants").innerHTML= "coups restants : "+player1.coupsRestants;
    document.getElementById("score").innerHTML= "score fleche  : "+player1.fleche2;
    

    console.log(parseInt(nbpts2));
    console.log(player1);
    return parseInt(nbpts2);
   // console.log (JSON.stringify (nbpts));

}
function pts3()//retourne la valeur de fleche 1
{   
   //on stock la valeur de l'input dans une  variable nbpts20
    var nbpts3 = document.getElementById('ptsfleches3').value;
    player1.fleche3=parseInt(nbpts3);
    player1.coupsRestants --;
    player1.resultatTour =(player1.resultatTour+player1.fleche3) ;
    player1.pointsRestantsActuels=(player1.pointsRestantsActuels- player1.fleche3);

    document.getElementById("points-restants").innerHTML="points restant : " +player1.pointsRestantsActuels;
    document.getElementById("score-cumulé").innerHTML= "score cumulé : "+player1.resultatTour;
    document.getElementById("coupsrestants").innerHTML= "coups restants : "+player1.coupsRestants;
    document.getElementById("score").innerHTML= "score fleche  : "+player1.fleche3;


    console.log(parseInt(nbpts3));
    console.log(player1);
    return parseInt(nbpts3);
   

}

class Player
{
    constructor(num,name){
        this.num=num;this.name=name;this.pointsrestantsDebutTour=301;this.pointsRestantsActuels=301;
        this.coupsRestants = 3;this.fleche1 = 0;this.fleche2 = 0;this.fleche3 = 0;
        this.resultatTour = 0;this.nbredetours=0;this.gagnant= false;this.test=null;
    }//fin constructor
   /* sayplayer()
    {
        return `${this.num} ${this.name} ${this.pointsRestants}`;
    }*/
}
const player1 = new Player (1,"anto");
const player2 = new Player (2,"micka");

//console.log(player);
console.log(player1);
console.log(player2);

function choisirJeu()
{
    document.getElementById("h2").innerHTML= "choisissez votre jeu";
    var listejeu= '<div class="listejeux"><button type="button" onclick= g301()>301</button><br><button type="button" onclick=g501()>501</button><br><button type="button" onclick=g701()>701</button></div'
    document.getElementById("h3").innerHTML= listejeu
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



function perdu(){

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