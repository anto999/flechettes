// tester avec this, ajouter attr?
$('#boule1').click(b1);
$('#boule2').click(b2);
$('#boule3').click(b3);
$('#boule4').click(b4);
$('#boule5').click(b5);
$('#boule6').click(b6);
$('#boule7').click(b7);
$('#boule8').click(b8);
$('#boule9').click(b9);
$('#boule10').click(b10);
$('#boule11').click(b11);
$('#boule12').click(b12);
$('#boule13').click(b13);
$('#boule14').click(b14);
$('#boule15').click(b15);
$('#boule16').click(b16);
$('#boule17').click(b17);
$('#boule18').click(b18);
$('#boule19').click(b19);
$('#boule20').click(b20);
$('#nul').click(b0);
$('#billard').click(billard);


function b1(){
    var del = arraybillard.array;
    var index=del.indexOf(1);
    console.log(index);
    if (index> -1){
        del.splice(index,1);
    }
    console.log(del);
}

function b2(){
    var del = arraybillard.array;
    var index=del.indexOf(2);
    console.log(index);
    if (index> -1){
        del.splice(index,1);
    }
    console.log(del);
}

function b3(){
    var del = arraybillard.array;
    var index=del.indexOf(3);
    console.log(index);
    if (index> -1){
        del.splice(index,1);
    }
    console.log(del);
}

function b4(){
    var del = arraybillard.array;
        var index=del.indexOf(4);
        console.log(index);
        if (index> -1){
            del.splice(index,1);
        }
        console.log(del);
}

function b5(){
    var del = arraybillard.array;
    var index=del.indexOf(5);
    console.log(index);
    if (index> -1){
        del.splice(index,1);
    }
    console.log(del);
}

function b6(){
    var del = arraybillard.array;
    var index=del.indexOf(6);
    console.log(index);
    if (index> -1){
        del.splice(index,1);
    }
    console.log(del);
}

function b7(){
    var del = arraybillard.array;
    var index=del.indexOf(7);
    console.log(index);
    if (index> -1){
        del.splice(index,1);
    }
    console.log(del);
}

function b8(){
    var del = arraybillard.array;
    var index=del.indexOf(8);
    console.log(index);
    if (index> -1){
        del.splice(index,1);
    }
    console.log(del);
}

function b9(){
    var del = arraybillard.array;
    var index=del.indexOf(9);
    console.log(index);
    if (index> -1){
        del.splice(index,1);
    }
    console.log(del);
}

function b10(){
    var del = arraybillard.array;
    var index=del.indexOf(10);
    console.log(index);
    if (index> -1){
        del.splice(index,1);
    }
    console.log(del);
}

function b11(){
    var del = arraybillard.array;
        var index=del.indexOf(11);
        console.log(index);
        if (index> -1){
            del.splice(index,1);
        }
        console.log(del);
}

function b12(){
    var del = arraybillard.array;
    var index=del.indexOf(12);
    console.log(index);
    if (index> -1){
        del.splice(index,1);
    }
    console.log(del);
}

function b13(){
    
        var del = arraybillard.array;
        var index=del.indexOf(13);
        console.log(index);
        if (index> -1){
            del.splice(index,1);
        }
        console.log(del);
    
}

function b14(){
    
        var del = arraybillard.array;
        var index=del.indexOf(14);
        console.log(index);
        if (index> -1){
            del.splice(index,1);
        }
        console.log(del);
    
}

function b15(){
   
        var del = arraybillard.array;
        var index=del.indexOf(15);
        console.log(index);
        if (index> -1){
            del.splice(index,1);
        }
        console.log(del);
    
}

function b16(){
    
        var del = arraybillard.array;
        var index=del.indexOf(16);
        console.log(index);
        if (index> -1){
            del.splice(index,1);
        }
        console.log(del);
    
}

function b17(){
    var del = arraybillard.array;
    var index=del.indexOf(17);
    console.log(index);
    if (index> -1){
        del.splice(index,1);
    }
    console.log(del);
}

function b18(){
    var del = arraybillard.array;
    var index=del.indexOf(18);
    console.log(index);
    if (index> -1){
        del.splice(index,1);
    }
    console.log(del);
}

function b19(){
    console.log(arraybillard.array);
    var del = arraybillard.array;
    var index=del.indexOf(19);
    console.log(index);
    if (index> -1){
        del.splice(index,1);
    }
    console.log(del);
    //del.remove(19);
    
}


function b20(){
    console.log(arraybillard.array);
    var del = arraybillard.array;
    var index=del.indexOf(20);
    console.log(index);
    if (index> -1){
        del.splice(index,1);
    }
    console.log(del);
    //del.remove(19);
   
}



function b0(){
    console.log('la');
   // billard();
}


class Billard
{
    constructor(){
        this.array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
        this.ptsRestantsEnJeu=[210];

    }
}
var arraybillard="";

function billard(){
    var bil =new Billard;
    console.log(bil);
    arraybillard=bil;
    return bil;
}

function toto(){
    var toto=billard();
    console.log(toto);
    return toto;
}

