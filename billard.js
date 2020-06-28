
// tester avec this, ajouter attr?




$('.boule1').click(b1);
$('.boule2').click(b2);
$('.boule3').click(b3);
$('.boule4').click(b4);
$('.boule5').click(b5);
$('.boule6').click(b6);
$('.boule7').click(b7);
$('.boule8').click(b8);
$('.boule9').click(b9);
$('.boule10').click(b10);
$('.boule11').click(b11);
$('.boule12').click(b12);
$('.boule13').click(b13);
$('.boule14').click(b14);
$('.boule15').click(b15);
$('.boule16').click(b16);
$('.boule17').click(b17);
$('.boule18').click(b18);
$('.boule19').click(b19);
$('.boule20').click(b20);
$('#nul').click(b0);

function b0(){
    $("#ligne_"+result).css("font-weight","initial");
    nextPlayerbillard();
}

var b1=0;

function b1(){
    if (b1==0)
    {
        console.log(arraybillard.array);
        var del = arraybillard.array;
        var index=del.indexOf(1);
        console.log(index);
        if (index> -1){
            del.splice(index,1);
        }
      
        console.log(del);
      
        $("#boule1").removeClass("boulevert");
        $("#boule1").removeClass("boule");
        $("#boule1").removeClass("boule1");
        $("#boule1").addClass("boulemorte");
        array[result].tableaubillard.push(1);
        array[result].fleche1=1;
        array[result].resultatTotal=array[result].resultatTotal+  array[result].fleche1;
        displayContainerBillard();
        $("#ligne_"+result).css("font-weight","initial");
        billardWin();
        nextPlayerbillard();
       
        b1=1;
    }//fin if
      
  
}//fin b1


var b2=0;

function b2(){
    if (b2==0)
    {
        console.log(arraybillard.array);
        var del = arraybillard.array;
        var index=del.indexOf(2);
        console.log(index);
        if (index> -1){
            del.splice(index,1);
        }
      
        console.log(del);
       
        $("#boule2").removeClass("boulerouge");
        $("#boule2").removeClass("boule");
        $("#boule2").removeClass("boule2");
        $("#boule2").addClass("boulemorte");
        array[result].tableaubillard.push(2);
        array[result].fleche1=2;
        array[result].resultatTotal=array[result].resultatTotal+  array[result].fleche1;
        displayContainerBillard();
        $("#ligne_"+result).css("font-weight","initial");
        billardWin();
        nextPlayerbillard();
       
        b2=1;
    }//fin if
      
  
}//fin b2


var b3=0;

function b3(){
    if (b3==0)
    {
        console.log(arraybillard.array);
        var del = arraybillard.array;
        var index=del.indexOf(3);
        console.log(index);
        if (index> -1){
            del.splice(index,1);
        }
       
        console.log(del);
      
        $("#boule3").removeClass("boulerouge");
        $("#boule3").removeClass("boule");
        $("#boule3").removeClass("boule3");
        $("#boule3").addClass("boulemorte");
        array[result].tableaubillard.push(3);
        array[result].fleche1=3;
        array[result].resultatTotal=array[result].resultatTotal+  array[result].fleche1;
        displayContainerBillard();
        $("#ligne_"+result).css("font-weight","initial");
        billardWin();
        nextPlayerbillard();
       
        b3=1;
    }//fin if
      
  
}//fin b3


var b4=0;

function b4(){
    if (b4==0)
    {
        console.log(arraybillard.array);
        var del = arraybillard.array;
        var index=del.indexOf(4);
        console.log(index);
        if (index> -1){
            del.splice(index,1);
        }
     
        console.log(del);
       
        $("#boule4").removeClass("boulevert");
        $("#boule4").removeClass("boule");
        $("#boule4").removeClass("boule4");
        $("#boule4").addClass("boulemorte");
        array[result].tableaubillard.push(4);
        array[result].fleche1=4;
        array[result].resultatTotal=array[result].resultatTotal+  array[result].fleche1;
        displayContainerBillard();
        $("#ligne_"+result).css("font-weight","initial");
        billardWin();
        nextPlayerbillard();
       
        b4=1;
    }//fin if
      
  
}//fin b4


var b5=0;

function b5(){
    if (b5==0)
    {
        console.log(arraybillard.array);
        var del = arraybillard.array;
        var index=del.indexOf(5);
        console.log(index);
        if (index> -1){
            del.splice(index,1);
        }
     
        console.log(del);
       
        $("#boule5").removeClass("boulevert");
        $("#boule5").removeClass("boule");
        $("#boule5").removeClass("boule5");
        $("#boule5").addClass("boulemorte");
        array[result].tableaubillard.push(5);
        array[result].fleche1=5;
        array[result].resultatTotal=array[result].resultatTotal+  array[result].fleche1;
        displayContainerBillard();
        $("#ligne_"+result).css("font-weight","initial");
        billardWin();
        nextPlayerbillard();
       
        b5=1;
    }//fin if
      
  
}//fin b5


var b6=0;

function b6(){
    if (b6==0)
    {
        console.log(arraybillard.array);
        var del = arraybillard.array;
        var index=del.indexOf(6);
        console.log(index);
        if (index> -1){
            del.splice(index,1);
        }
        
        console.log(del);
        
        $("#boule6").removeClass("boulevert");
        $("#boule6").removeClass("boule");
        $("#boule6").removeClass("boule6");
        $("#boule6").addClass("boulemorte");
        array[result].tableaubillard.push(6);
        array[result].fleche1=6;
        array[result].resultatTotal=array[result].resultatTotal+  array[result].fleche1;
        displayContainerBillard();
        $("#ligne_"+result).css("font-weight","initial");
        billardWin();
        nextPlayerbillard();
       
        b6=1;
    }//fin if
      
  
}//fin b6



var b7=0;

function b7(){
    if (b7==0)
    {
        console.log(arraybillard.array);
        var del = arraybillard.array;
        var index=del.indexOf(7);
        console.log(index);
        if (index> -1){
            del.splice(index,1);
        }
   
        console.log(del);
       
        $("#boule7").removeClass("boulerouge");
        $("#boule7").removeClass("boule");
        $("#boule7").removeClass("boule7");
        $("#boule7").addClass("boulemorte");
        array[result].tableaubillard.push(7);
        array[result].fleche1=7;
        array[result].resultatTotal=array[result].resultatTotal+  array[result].fleche1;
        displayContainerBillard();
        $("#ligne_"+result).css("font-weight","initial");
        billardWin();
        nextPlayerbillard();
       
        b7=1;
    }//fin if
      
  
}//fin b7



var b8=0;

function b8(){
    if (b8==0)
    {
        console.log(arraybillard.array);
        var del = arraybillard.array;
        var index=del.indexOf(8);
        console.log(index);
        if (index> -1){
            del.splice(index,1);
        }
     
        console.log(del);
       
        $("#boule8").removeClass("boulerouge");
        $("#boule8").removeClass("boule");
        $("#boule8").removeClass("boule8");
        $("#boule8").addClass("boulemorte");
        array[result].tableaubillard.push(8);
        array[result].fleche1=8;
        array[result].resultatTotal=array[result].resultatTotal+  array[result].fleche1;
        displayContainerBillard();
        $("#ligne_"+result).css("font-weight","initial");
        billardWin();
        nextPlayerbillard();
       
        b8=1;
    }//fin if
      
  
}//fin b8


var b9=0;

function b9(){
    if (b9==0)
    {
        console.log(arraybillard.array);
        var del = arraybillard.array;
        var index=del.indexOf(9);
        console.log(index);
        if (index> -1){
            del.splice(index,1);
        }
     
        console.log(del);
       
        $("#boule9").removeClass("boulevert");
        $("#boule9").removeClass("boule");
        $("#boule9").removeClass("boule9");
        $("#boule9").addClass("boulemorte");
        array[result].tableaubillard.push(9);
        array[result].fleche1=9;
        array[result].resultatTotal=array[result].resultatTotal+  array[result].fleche1;
        displayContainerBillard();
        $("#ligne_"+result).css("font-weight","initial");
        billardWin();
        nextPlayerbillard();
       
        b9=1;
    }//fin if
      
  
}//fin b9


var b10=0;

function b10(){
    if (b10==0)
    {
        console.log(arraybillard.array);
        var del = arraybillard.array;
        var index=del.indexOf(10);
        console.log(index);
        if (index> -1){
            del.splice(index,1);
        }
     
        console.log(del);
       
        $("#boule10").removeClass("boulerouge");
        $("#boule10").removeClass("boule");
        $("#boule10").removeClass("boule10");
        $("#boule10").addClass("boulemorte");
        array[result].tableaubillard.push(10);
        array[result].fleche1=10;
        array[result].resultatTotal=array[result].resultatTotal+  array[result].fleche1;
        displayContainerBillard();
        $("#ligne_"+result).css("font-weight","initial");
        billardWin();
        nextPlayerbillard();
       
        b10=1;
    }//fin if
      
  
}//fin b10


var b11=0;

function b11(){
    if (b11==0)
    {
        console.log(arraybillard.array);
        var del = arraybillard.array;
        var index=del.indexOf(11);
        console.log(index);
        if (index> -1){
            del.splice(index,1);
        }
        console.log(del);
       
       
        $("#boule11").removeClass("boulevert");
        $("#boule11").removeClass("boule");
        $("#boule11").removeClass("boule11");
        $("#boule11").addClass("boulemorte");
        array[result].tableaubillard.push(11);
        array[result].fleche1=11;
        array[result].resultatTotal=array[result].resultatTotal+  array[result].fleche1;
        displayContainerBillard();
        $("#ligne_"+result).css("font-weight","initial");
        billardWin();
        nextPlayerbillard();
       
        b11=1;
    }//fin if
      
  
}//fin b11

var b12=0;

function b12(){
    if (b12==0)
    {
        console.log(arraybillard.array);
        var del = arraybillard.array;
        var index=del.indexOf(12);
        console.log(index);
        if (index> -1){
            del.splice(index,1);
        }
        console.log(del);
      
       
        $("#boule12").removeClass("boulerouge");
        $("#boule12").removeClass("boule");
        $("#boule12").removeClass("boule12");
        $("#boule12").addClass("boulemorte");
        array[result].tableaubillard.push(12);
        array[result].fleche1=12;
        array[result].resultatTotal=array[result].resultatTotal+  array[result].fleche1;
        displayContainerBillard();
        $("#ligne_"+result).css("font-weight","initial");
        billardWin();
        nextPlayerbillard();
       
        b12=1;
    }//fin if
      
  
}//fin b12





var b13=0;

function b13(){
    if (b13==0)
    {
        console.log(arraybillard.array);
        var del = arraybillard.array;
        var index=del.indexOf(13);
        console.log(index);
        if (index> -1){
            del.splice(index,1);
        }
     
        console.log(del);
       
        $("#boule13").removeClass("boulerouge");
        $("#boule13").removeClass("boule");
        $("#boule13").removeClass("boule13");
        $("#boule13").addClass("boulemorte");
        array[result].tableaubillard.push(13);
        array[result].fleche1=13;
        array[result].resultatTotal=array[result].resultatTotal+  array[result].fleche1;
        displayContainerBillard();
        $("#ligne_"+result).css("font-weight","initial");
        billardWin();
        nextPlayerbillard();
       
        b13=1;
    }//fin if
      
  
}//fin b13


var b14=0;

function b14(){
    if (b14==0)
    {
        console.log(arraybillard.array);
        var del = arraybillard.array;
        var index=del.indexOf(14);
        console.log(index);
        if (index> -1){
            del.splice(index,1);
        }
        console.log(del);
      
        $("#boule14").removeClass("boulerouge");
        $("#boule14").removeClass("boule");
        $("#boule14").removeClass("boule14");
        $("#boule14").addClass("boulemorte");
        array[result].tableaubillard.push(14);
        array[result].fleche1=14;
        array[result].resultatTotal=array[result].resultatTotal+  array[result].fleche1;
        displayContainerBillard();
        $("#ligne_"+result).css("font-weight","initial");
        billardWin();
        nextPlayerbillard();
       
        b14=1;
    }//fin if
      
  
}//fin b14


var b15=0;

function b15(){
    if (b15==0)
    {
        console.log(arraybillard.array);
        var del = arraybillard.array;
        var index=del.indexOf(15);
        console.log(index);
        if (index> -1){
            del.splice(index,1);
        }
      
        console.log(del);
       
        $("#boule15").removeClass("boulevert");
        $("#boule15").removeClass("boule");
        $("#boule15").removeClass("boule15");
        $("#boule15").addClass("boulemorte");
        array[result].tableaubillard.push(15);
        array[result].fleche1=15;
        array[result].resultatTotal=array[result].resultatTotal+  array[result].fleche1;
        displayContainerBillard();
        $("#ligne_"+result).css("font-weight","initial");
        billardWin();
        nextPlayerbillard();
       
        b15=1;
    }//fin if
      
  
}//fin b15


var b16=0;

function b16(){
    if (b16==0)
    {
        console.log(arraybillard.array);
        var del = arraybillard.array;
        var index=del.indexOf(16);
        console.log(index);
        if (index> -1){
            del.splice(index,1);
        }
        console.log(del);
       
        $("#boule16").removeClass("boulevert");
        $("#boule16").removeClass("boule");
        $("#boule16").removeClass("boule16");
        $("#boule16").addClass("boulemorte");
        array[result].tableaubillard.push(16);
        array[result].fleche1=16;
        array[result].resultatTotal=array[result].resultatTotal+  array[result].fleche1;
        displayContainerBillard();
        $("#ligne_"+result).css("font-weight","initial");
        billardWin();
        nextPlayerbillard();
       
        b16=1;
    }//fin if
      
  
}//fin b16


var b17=0;

function b17(){
    if (b17==0)
    {
        console.log(arraybillard.array);
        var del = arraybillard.array;
        var index=del.indexOf(17);
        console.log(index);
        if (index> -1){
            del.splice(index,1);
        }
        console.log(del);
       
        $("#boule17").removeClass("boulevert");
        $("#boule17").removeClass("boule");
        $("#boule17").removeClass("boule17");
        $("#boule17").addClass("boulemorte");
        array[result].tableaubillard.push(17);
        array[result].fleche1=17;
        array[result].resultatTotal=array[result].resultatTotal+  array[result].fleche1;
        displayContainerBillard();
        $("#ligne_"+result).css("font-weight","initial");
        billardWin();
        nextPlayerbillard();
       
        b17=1;
    }//fin if
      
  
}//fin b17


var b18=0;

function b18(){
    if (b18==0)
    {
        console.log(arraybillard.array);
        var del = arraybillard.array;
        var index=del.indexOf(18);
        console.log(index);
        if (index> -1){
            del.splice(index,1);
        }
        console.log(del);
       
       
        $("#boule18").removeClass("boulerouge");
        $("#boule18").removeClass("boule");
        $("#boule18").removeClass("boule18");
        $("#boule18").addClass("boulemorte");
        array[result].tableaubillard.push(18);
        array[result].fleche1=18;
        array[result].resultatTotal=array[result].resultatTotal+  array[result].fleche1;
        displayContainerBillard();
        $("#ligne_"+result).css("font-weight","initial");
        billardWin();
        nextPlayerbillard();
       
        b18=1;
    }//fin if
      
  
}//fin b18
var b19=0;
function b19(){
    if(b19==0){
        console.log(arraybillard.array);
        var del = arraybillard.array;
        var index=del.indexOf(19);
        console.log(index);
        if (index> -1){
            del.splice(index,1);
        }
        
        console.log(del);
        
        $("#boule19").removeClass("boulevert");
        $("#boule19").removeClass("boule");
        $("#boule19").removeClass("boule19");
        $("#boule19").addClass("boulemorte");
        array[result].tableaubillard.push(19);
        array[result].fleche1=19;
        array[result].resultatTotal=array[result].resultatTotal+  array[result].fleche1;


        displayContainerBillard();
        $("#ligne_"+result).css("font-weight","initial");
                billardWin();     //del.remove(19);
        nextPlayerbillard();
       
        b19=1;

    }
   
    
    
}

var b20=0;

function b20(){
    if (b20==0)
    {
        console.log(arraybillard.array);
        var del = arraybillard.array;
        var index=del.indexOf(20);
        console.log(index);
        if (index> -1){
            del.splice(index,1);
        }
        console.log(del);
        
        
       
        $("#boule20").removeClass("boulerouge");
        $("#boule20").removeClass("boule");
        $("#boule20").removeClass("boule20");
        $("#boule20").addClass("boulemorte");
        array[result].tableaubillard.push(20);

        
        array[result].fleche1=20;
        array[result].resultatTotal=array[result].resultatTotal+  array[result].fleche1;


        displayContainerBillard();
        $("#ligne_"+result).css("font-weight","initial");
        billardWin();
        nextPlayerbillard();
       
        b20=1;
    }//fin if
      
  
}//fin b20


function displayContainerBillard(){

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
        for(i=0;i<a;i++)
        {
       
        console.log(array[b]);
        card += ' <tr  id="ligne_'+b+'">';
            card += '      <td>';
            card += '         <div id="nomjoueur'+i+'">'+array[b].name+'</div>';
            card += '       </td>';
            card += '      <td>';
            card += '        <div class ="" id="score'+i+'"> '+array[b].resultatTotal+'</div>';
            card += '      </td>';
            card += ' </tr>';
        
              b=b+1;
         }    

         $("#h6").html(card);
       
         $("#h6").css("display","flex");
         return parseInt(a);
         
      }//fin displayContainer()


function nextPlayerbillard(){
    if (result>= array.length-1){
        result=0;
        document.getElementById("titre").innerHTML="A  "+array[result].name+" de jouer !" ;
    }else{
        result=result+1;
        document.getElementById("titre").innerHTML="A  "+array[result].name+" de jouer !" ;
    }
    $("#ligne_"+result).css("font-weight","bold");
}

function billardWin()
{
    if (arraybillard.array.length==0)
    { 

        var nbjoueurs=array.length;
        var scoretotal
        for(i=0;i<nbjoueurs;i++)
        {
            scoretotal =array[i].resultatTotal;
            arraybillard.array.push(scoretotal)
        }
        console.log(arraybillard.array);


        var verifSiégalité=arraybillard.array;//on créé un tableau dans lequel on supprime le score max
        
        var indexmax = arraybillard.array.indexOf(Math.max(... arraybillard.array));
        console.log(indexmax);

        verifSiégalité.splice(indexmax, 1);
        console.log(arraybillard.array);
        
        modalwin();
        document.getElementById("titre").innerHTML="Victoire de  " +array[indexmax].name+" !"//ici modalwin ne suffit pas car elle fait appler a array[name] alors que nous voulons array[indexmax] 
        displayrestart();
        $('.containerboule').css("display","none");//on efface les boules

        throw new Error('This is not an error. This is just to abort javascript');//juste pour stopper le script et ne pas passer à l'instruction suivante

    }
}


class Billard
{
    constructor(){
        this.array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
        this.ptsRestantsEnJeu=[210];

    }
}
/* a tester plus tard pour optimiser la lourdeur
function execute(){
    for (i=1;i<20;i++){
        $(".boule"+i).click("b"+i);
    }
}

*/
var arraybillard="";


function billard(){
    myFunction();//créer les joueurs
   
    $('#criquetDiv').css('display', 'none');
    
    var bil =new Billard;
    console.log(bil);
    arraybillard=bil;
    $('.containerboule').css("display","flex");
    $('#h6').css("display","none");
    document.getElementById("titre").innerHTML="A  "+array[result].name+" de jouer !" ;
    displayContainerBillard();
    $("#ligne_"+result).css("font-weight","bold");
    return bil;
    
}

function toto(){
    var toto=billard();
    console.log(toto);
    return toto;
}



