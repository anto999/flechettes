$(document).ready(function(){
/*   for (i=0;i<5;i++){
       myFunction();
   }*/
   

});



function selectNbPlayers()
{   
   // var NbPlayer = document.getElementById('grr').value;
    var NbPlayer = document.getElementById('grr').value;

    //console.log(NbPlayer);
    
    document.getElementById("h0").innerHTML= NbPlayer;

    if (NbPlayer <= 10 )
    {
        document.getElementById("h1").innerHTML= "nous avons " +NbPlayer+  " joueurs" ;
        choisirJeu();
        return NbPlayer;

    } 
    else
    {
        document.getElementById("h1").innerHTML= "<h1>trop de monde!</h1> ";
        document.getElementById("h2").innerHTML= "";
        document.getElementById("h3").innerHTML= "";
    }


}



class Player
{
    constructor(num,name,pointsRestants,coupsRestants)
    {
        this.num=num;
        this.name=name;
        this.pointsrestantsDebutTour=301;
        this.pointsRestantsActuels=301;
        this.coupsRestants = 3;
        this.fleche = 0;
        this.resultatTour = 0;
        this.nbredetours=0;
        this.gagnant= false;
        this.test=null;
    }
    sayplayer()
    {
        return `${this.num} ${this.name} ${this.pointsRestants}`;
    }
        
}
const player = new Player ();
const player1 = new Player (1,"anto");
const player2 = new Player (2,"micka");
//console.log(player);
console.log(player1);
console.log(player2);
/*console.log(player1.name)
console.log(player1.sayplayer());
console.log(player2.sayplayer());
console.log(player1.name);*/


/*for (i=3;i>0;i--){
    
    console.log(player1);
    player1.coupsRestants -= 1 ;
    console.log(player1);
    player1.pointsRestants -= x;    

}*/


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

   go();



    //addplayerinput();
    

}

function g501() {
    document.getElementById("h4").innerHTML= 'vous avez choisi le 501' ;
}

function g701() {
    document.getElementById("h4").innerHTML= 'vous avez choisi le 701' ;
}

/*function inputPlayer(){
    var inputplayername = '';
    inputplayername += '<label id="nameplayer">prénom:</label>';
    inputplayername += '<input type="input" id="inputplayername"></input>';
    inputplayername += '<button>créer joueur !</button><br>';

    $('#h5').html(inputplayername);
  
}*/

function addplayerinput() {
    var elmnt = document.getElementsByTagName("form")[0];
    var cln = elmnt.cloneNode(true);
    document.body.appendChild(cln);
}

function go(){
    
    console.log('a '+player1.name+' de jouer!');
    
    
    
   
        for (i=player1.coupsRestants;i>0;i--)
        {   
            player1.fleche=25;

            if (player1.fleche>player1.pointsRestantsActuels)
            {
                //perdu();
                console.log("domage vous avez fait trop de points!")
                player1.pointsRestantsActuels = pointsrestantsDebutTour;    
                console.log('coup 1 : ' +player1.fleche+' ! ');

                
            }else if(player1.fleche == player1.pointsRestantsActuels) 
            {
                gagné();
            }else if (player1.fleche<player1.pointsRestantsActuels){


                player1.resultatTour += player1.fleche;
                player1.coupsRestants -= 1;
                player1.pointsRestantsActuels-= player1.fleche;
                console.log('coup 1 : ' +player1.fleche+' ! ');

                        if (player1.fleche>player1.pointsRestantsActuels)
                        {
                            //perdu();
                            console.log("domage vous avez fait trop de points!")
                            player1.pointsRestantsActuels = pointsrestantsDebutTour;    
                            console.log('coup 1 : ' +player1.fleche+' ! ');
                
                            
                        }else if(player1.fleche == player1.pointsRestantsActuels) 
                        {
                            gagné();
                        }
                
                console.log(player1);
                player1.fleche=0;


            }
    
        }
    


}

function perdu(){

}