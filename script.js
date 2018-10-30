$(document).ready(function(){
/*   for (i=0;i<5;i++){
       myFunction();
   }*/
   

});



function selectNbPlayers()
{   
    var NbPlayer = document.getElementById('grr').value;
  
    
    
    console.log(NbPlayer);
    
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

function test(){
    var testa = selectNbPlayers();

}

class Player
{
    constructor(num,name,pointsRestants,coupsRestants)
    {
        this.num=num;
        this.name=name;
        this.pointsRestants=301;
        this.coupsRestants = 3;

    }
    sayplayer()
    {
        return `${this.num} ${this.name} ${this.pointsRestants}`;
    }
        
}
const player1 = new Player (1,"anto");
const player2 = new Player (2,"micka",501);
console.log(player1.name)
console.log(player1.sayplayer());
console.log(player2.sayplayer());
console.log(player1.name);

var x = 10;
var y = 55;
var z = 50;

for (i=3;i>0;i--){
    
    console.log(player1);
    player1.coupsRestants -= 1 ;
    console.log(player1);
    player1.pointsRestants -= x;
    console.log(player1);
    player1.pointsRestants -= y;
    console.log(player1);
    player1.pointsRestants -= z;
    
    

}


function choisirJeu(){
    document.getElementById("h2").innerHTML= "choisissez votre jeu";
    var listejeu= '<div class="listejeux"><button type="button" onclick= g301()>301</button><br><button type="button" onclick=g501()>501</button><br><button type="button" onclick=g701()>701</button></div'
    document.getElementById("h3").innerHTML= listejeu
}

function g301() {
    document.getElementById("h4").innerHTML= 'vous avez choisi le 301' ;
    var NbPlayer = document.getElementsByClassName("nbplayers").value
    console.log(NbPlayer);
    document.getElementById("h5").innerHTML= 'vous etes ' +NbPlayer+ ' a jouer' ;
    inputPlayer();
    

}

function g501() {
    document.getElementById("h4").innerHTML= 'vous avez choisi le 501' ;
}

function g701() {
    document.getElementById("h4").innerHTML= 'vous avez choisi le 701' ;
}

function inputPlayer(){
    var inputplayername = '';
    inputplayername += '<label id="nameplayer">prénom:</label>';
    inputplayername += '<input type="input" id="inputplayername"></input>';
    inputplayername += '<button>créer joueur !</button><br>';

    $('#h5').html(inputplayername);
  
}

function myFunction() {
    var elmnt = document.getElementsByTagName("form")[0];
    var cln = elmnt.cloneNode(true);
    document.body.appendChild(cln);
}