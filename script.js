$(document).ready(function(){

   

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
    document.getElementById("titre").innerHTML="Victoire de  " +array[result].name+" !"
    array[result].pointsRestantsActuels=0;
    document.getElementById("points-restants"+result).innerHTML="points restant : " +array[result].pointsRestantsActuels;
    modalwin();
   // $("#exampleModal").modal("show");
    //openmodal();
}
 function modalwin(){
   // $("#exampleModalCenter").modal("show");
   document.getElementById("open").click()

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


$('#create_myfunctionGhost').click(compteur);

function enchaine(){
    myFunction();
    displayContainer();
}

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
   document.getElementById("titre").innerHTML="A  " +array[result].name+" de jouer !" ;
   $(".f1").css("display","flex");
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



function nextPlayer(){
    if (i> nbjoueurs.length){
        i=0;
    }else{
        i=i+1
    }
    
}

function perdu1(){
    document.getElementById("titre").innerHTML="Domage " +array[result].name+", trop de points !"
    
    array[result].pointsRestantsActuels=array[result].pointsrestantsDebutTour;
    document.getElementById("points-restants"+result).innerHTML="points restant : " +array[result].pointsRestantsActuels;
    array[result].coupsRestants=3;
    document.getElementById("coupsrestants"+[result]).innerHTML="coups restants : "+ array[result].coupsRestants;
   
    document.getElementById("form").reset();
    form.reset();
    nextPlayer();
    array[result].coupsRestants=3;
    document.getElementById("coupsrestants"+[result]).innerHTML="coups restants : "+ array[result].coupsRestants;

    $(".f1").css("display","flex");
    $(".f2").css("display","none");
    $(".f3").css("display","none");

}

function nextPlayer(){
    if (result>= array.length-1){
        result=0;
    }else{
        result=result+1;
    }
    
}

    function compteur(){
        var resultCompteur=0;
        return resultCompteur;
    }

    var result =compteur();
    console.log(result);

    function lancerFleche()
    {   

        var fin = false;
        console.log(result);
      
            array[result].resultatTour=0;
            document.getElementById("score-tour"+result).innerHTML= "score tour : "+array[0].resultatTour;
            if (array[result])
            var nbpts = document.getElementById('lancer1').value;

            if (isNaN(parseInt(nbpts)) == true){ //verif si l'input est bien un int
                    nbpts=0;
                    array[i].coupsRestants ++;
                    console.log(nbpts);
                }
            
            array[result].fleche1=parseInt(nbpts);
            console.log(array[result].fleche1);
            array[result].coupsRestants --;
            array[result].resultatTotal =(array[result].resultatTotal+ array[result].fleche1) ;
            array[result].resultatTour=(array[result].resultatTour+array[result].fleche1);
            //document.getElementById("points-restants0").innerHTML="points restant : " +array[0].pointsRestantsActuels;
            //var h=0;
        
            document.getElementById("score-cumulé"+result).innerHTML= "score total : "+array[result].resultatTotal;
            document.getElementById("coupsrestants"+result).innerHTML= "coups restants : "+array[result].coupsRestants;
            document.getElementById("score"+result).innerHTML= "score fleche  : "+array[result].fleche1;
            document.getElementById("score-tour"+result).innerHTML= "score tour  : "+array[result].resultatTour;
            //on retourne
            //console.log(array[result]);
            console.log(array[result].pointsrestantsDebutTour);
            
            // console.log (JSON.stringify (nbpts));
            if (array[result].fleche1== array[result].pointsRestantsActuels){
            console.log('gagné!')
                gagné1();
                return parseInt(nbpts);
            }else if(array[result].fleche1>array[result].pointsRestantsActuels){
                perdu1();
                array[result].pointsRestantsActuels=array[result].pointsrestantsDebutTour;
                document.getElementById("points-restants"+array[result]).innerHTML="points restant : " +array[i].pointsRestantsActuels;
                console.log('perdu!');
                return parseInt(nbpts);
            }else if (array[result].fleche1<array[result].pointsRestantsActuels){
            array[result].pointsRestantsActuels=(array[result].pointsRestantsActuels-array[result].fleche1);
            document.getElementById("points-restants"+result).innerHTML="points restant : " +array[result].pointsRestantsActuels;
        
            document.getElementById("score"+result).innerHTML= "score fleche  : "+array[result].fleche1;
            console.log(array[result].pointsrestantsDebutTour);
            // document.getElementById("points-restants").innerHTML="points restant : " +array[0].pointsRestantsActuels;
            console.log(parseInt(nbpts));
            $(".f1").css("display","none");
            $(".f2").css("display","flex");

            
            return parseInt(nbpts);

            }//fin else if
     }//fin function lancerfleche



 function lancerFleche2()//retourne la valeur de fleche 1
    {   
      
            document.getElementById("score-tour"+result).innerHTML= "score tour : "+array[result].resultatTour;
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
         //   document.getElementById("points-restants"+result).innerHTML="points restant : " +array[0].pointsRestantsActuels;
            //var h=0;
            console.log(array[result].pointsrestantsDebutTour);
            document.getElementById("score-cumulé"+result).innerHTML= "score total : "+array[result].resultatTotal;
            document.getElementById("coupsrestants"+result).innerHTML= "coups restants : "+array[result].coupsRestants;
            document.getElementById("score"+result).innerHTML= "score fleche  : "+array[result].fleche2;
            document.getElementById("score-tour"+result).innerHTML= "score tour  : "+array[result].resultatTour;
            //on retourne
            console.log(array[result]);
            
            // console.log (JSON.stringify (nbpts));
            if (array[result].fleche2== array[result].pointsRestantsActuels){
            console.log('gagné!')
                gagné1();
                return parseInt(nbpts2);
            }else if(array[result].fleche2>array[result].pointsRestantsActuels){
                perdu1();
                array[result].pointsRestantsActuels=array[result].pointsrestantsDebutTour;
                document.getElementById("points-restants"+result).innerHTML="points restant : " +array[result].pointsRestantsActuels;
                console.log('perdu!');
                return parseInt(nbpts2);
            }else if (array[result].fleche2<array[result].pointsRestantsActuels){
            array[result].pointsRestantsActuels=(array[result].pointsRestantsActuels- array[result].fleche2);
            document.getElementById("points-restants"+result).innerHTML="points restant : " +array[result].pointsRestantsActuels;
            
            // document.getElementById("points-restants").innerHTML="points restant : " +array[0].pointsRestantsActuels;
            console.log(parseInt(nbpts2));
            $(".f2").css("display","none");
            $(".f3").css("display","flex");
            console.log(array[result].pointsrestantsDebutTour);
            return parseInt(nbpts2);

            }//fin else if
     }//fin function lancerfleche

     function lancerFleche3()//retourne la valeur de fleche 1
    {   //document.getElementById("titre").innerHTML="A  " +player1.name+" de jouer !";
        
      //  var fin = false;
        
      $(".f3").css("display","none");
      $(".f1").css("display","flex");
            
            
            document.getElementById("score-tour"+result).innerHTML= "score tour : "+array[result].resultatTour;
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
            console.log(array[result].pointsrestantsDebutTour);
            document.getElementById("score-cumulé"+result).innerHTML= "score total : "+array[result].resultatTotal;
            document.getElementById("coupsrestants"+result).innerHTML= "coups restants : "+array[result].coupsRestants;
            document.getElementById("score"+result).innerHTML= "score fleche  : "+array[result].fleche3;
            document.getElementById("score-tour"+result).innerHTML= "score tour  : "+array[result].resultatTour;
            //on retourne
            console.log(array[result]);
            
            // console.log (JSON.stringify (nbpts));
            if (array[result].fleche3== array[result].pointsRestantsActuels){
            console.log('gagné!')
                gagné1();
                array[result].pointsRestantsActuels=(array[result].pointsRestantsActuels- array[result].fleche3);
                document.getElementById("points-restants"+result).innerHTML="points restant : " +array[result].pointsRestantsActuels;

                return parseInt(nbpts3);
            }else if(array[result].fleche3>array[result].pointsRestantsActuels){
                perdu1();
                array[result].pointsRestantsActuels=array[result].pointsrestantsDebutTour;
                document.getElementById("points-restants"+result).innerHTML="points restant : " +array[result].pointsRestantsActuels;
                console.log('perdu!');
                return parseInt(nbpts3);
            }else if (array[result].fleche3<array[result].pointsRestantsActuels){
            array[result].pointsRestantsActuels=(array[result].pointsRestantsActuels- array[result].fleche3);
            document.getElementById("points-restants"+result).innerHTML="points restant : " +array[result].pointsRestantsActuels;
            
            // document.getElementById("points-restants").innerHTML="points restant : " +array[0].pointsRestantsActuels;
            console.log(parseInt(nbpts3));
            console.log(array[result].pointsrestantsDebutTour);
            array[result].pointsrestantsDebutTour=array[result].pointsrestantsDebutTour-array[result].resultatTour
            nextPlayer();
            document.getElementById("titre").innerHTML="A  " +array[result].name+" de jouer !" ;
            array[result].coupsRestants=3;
            document.getElementById("coupsrestants"+result).innerHTML= "coups restants : "+array[result].coupsRestants;
            form.reset();
            return parseInt(nbpts3);
           
            lancerFleche();

            }//fin else if
     }//fin function lancerfleche


    
  
