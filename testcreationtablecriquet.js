function criquet(){
    myFunction();
    displayTableCriquet();
    $("#titre").css("display","none");
    $("#ligne_"+result).css("font-weight","bold");
    document.getElementById("case_vide").innerHTML="x "+array[result].coupsRestants ;
}



function displayTableCriquet(){ //créer le tableau criquet, met aussi le tableau à jour quand elle est executée

var a = document.getElementById('input_nbplayer0').value;// a= nbre de joueurs
//console.log("nbre de joueurs: "+a);
var card ='<table width="100%" class="containerCriquet">'+
'<tr>'+
    '<td width="20%">'+
        '<div class="case_vide" id="case_vide">'+
            
        '</div>'+
    '</td>'+
    '<td>'+
        '<div class="score_ligne ligne" id="score_ligne">'+
            'pts'+
        '</div>'+
    '</td>'+
    '<td>'+
        '<div class="15_ligne ligne" id="15_ligne">'+
            '15'+
        '</div>'+
    '</td>'+
    '<td>'+
        '<div class="16_ligne ligne" id="16_ligne">'+
            '16'+
        '</div>'+
    '</td>'+
    '<td>'+
        '<div class="17_ligne ligne" id="17_ligne">'+
            '17'+
        '</div>'+
    '</td>'+
    '<td>'+
        '<div class="18_ligne ligne" id="18_ligne">'+
            '18'+
        '</div>'+
    '</td>'+
    '<td>'+
        '<div class="19_ligne ligne" id="19_ligne">'+
            '19'+
        '</div>'+
    '</td>'+
    '<td>'+
        '<div class="20_ligne ligne" id="20_ligne">'+
            '20'+
        '</div>'+
    '</td>'+
    '<td>'+
        '<div class="bulle_ligne ligne" id="bulle_ligne">'+
            'B'+
        '</div>'+
    '</td>'+
'</tr>';
       var b=0;
    for(i=0;i<a;i++)
    {
    
    //console.log(array[b]);
    
    card += ' <tr  id="ligne_'+b+'">';
    card +='<td>'; 
    card += '<div class="joueur_'+array[b].name+' joueur" id="'+array[b].name+'">';
    card +=array[b].name; 
    card += '</div>';
    card += ' </td>';
    

    
    card +='<td>'; 
    card += '<div class="score_'+array[b].name+' joueur score_joueur_criquet" id="score_'+array[b].name+'">';
    card +=array[b].closed["score"]; 
    card += '</div>';
    card += ' </td>';

    card +='<td>'; 
    card += '<div class="'+array[b].name+' joueur" id="'+array[b].name+'">';
    card +=array[b].closed[15]; 
    card += '</div>';
    card += ' </td>';

    card +='<td>'; 
    card += '<div class="'+array[b].name+' joueur" id="'+array[b].name+'">';
    card +=array[b].closed[16]; 
    card += '</div>';
    card += ' </td>';

    card +='<td>'; 
    card += '<div class="'+array[b].name+' joueur" id="'+array[b].name+'">';
    card +=array[b].closed[17]; 
    card += '</div>';
    card += ' </td>';

    card +='<td>'; 
    card += '<div class="'+array[b].name+' joueur" id="'+array[b].name+'">';
    card +=array[b].closed[18]; 
    card += '</div>';
    card += ' </td>';

    card +='<td>'; 
    card += '<div class="'+array[b].name+' joueur" id="'+array[b].name+'">';
    card +=array[b].closed[19]; 
    card += '</div>';
    card += ' </td>';

    card +='<td>'; 
    card += '<div class="'+array[b].name+' joueur" id="'+array[b].name+'">';
    card +=array[b].closed[20]; 
    card += '</div>';
    card += ' </td>';

    card +='<td>'; 
    card += '<div class="'+array[b].name+' joueur" id="'+array[b].name+'">';
    card +=array[b].closed[25]; 
    card += '</div>';
    card += ' </td>';
    
    card += ' </tr>';
        
    b=b+1;
        } //fin boucle
    
   
    card += ' </table>';
    $("#criquetDiv").html(card);
   
    document.getElementById("titre").innerHTML="A  "+array[result].name+" de jouer "+array[result].coupsRestants+" fois !" ;
    $("#h6").css("display","none");
 
    $("#container-wall").css("display","none"); 
    $(".boutonscriquet").css("display","table"); 
    
    return parseInt(a);
        
    }//fin displayTableCriquet()

  

    function verifsiwincriquet(){
        if  (array[result].closed[15]  ==3  && array[result].closed[16]  ==3  && array[result].closed[17]  ==3  && array[result].closed[18] ==3  && array[result].closed[19] ==3 
             && array[result].closed[20]  ==3  && array[result].closed[25] ==3 ) // si toutes les portes sont fermées
        {
            console.log("portes fermées!")
            var arayscoredetoutlemondecriquet=[];//on créé un tableau avec le score de chacun
            for (i=0;i<array.length;i++)
            {   
                arayscoredetoutlemondecriquet.push(array[i].closed["score"]);
            }
            var m= Math.min(...arayscoredetoutlemondecriquet);
            if(array[result].closed["score"]==m)
            {
                console.log("winner !!!");

                document.getElementById("titre").innerHTML="Victoire de  "+array[result].name;
                $("#titre").animate({    
                    width : 'auto',
                    height: '200px',
                   padding:'10% 0 0',
                    fontSize:'2em',
                })
                array[result].closed["win"]== true;
                $("#titre").css("display","list-item");
               
                throw new Error('This is not an error. This is just to abort javascript');//juste pour stopper le script et ne pas passer à l'instruction suivante
                return 0;
                console.log("return 0 ne marche pas!")
            }
        }
    }//fin verifsiwincriquet

       
   

    $('.btncriquetsimple').click({id:this}, simple);

function simple() {
    $(this).animate({    
        fontSize:'2em',
    })
    $(this).animate({    
        fontSize:'1em',
    })
    var thisnumber = parseInt(this.getAttribute("attr"));
    console.log("thisnumber :" + thisnumber);

    if (array[result].closed[thisnumber] < 3)//si le nombre a été touché moins de 3 fois 
    {
        array[result].closed[thisnumber] = array[result].closed[thisnumber] + 1;//alors on ajoute 1
    }
    else //sinon on ajoute les points à qui n'a pas fermé :
    {
        for (i = 0; i < array.length; i++) {
            if (array[i].closed[thisnumber] < 3) {
                array[i].closed["score"] = array[i].closed["score"] + thisnumber;
            }
        }
    }
    
    array[result].coupsRestants--;
    displayTableCriquet();//pour mettre à jour le tableau des scores
    verifsiwincriquet();
    if (array[result].coupsRestants == 0)//si plus de coup alors on change de joueur
    {
        console.log("nextplayer");
        nextPlayer();
        array[result].coupsRestants = 3;
        
    }
    document.getElementById("case_vide").innerHTML="x "+array[result].coupsRestants ;
    $("#ligne_"+result).css("font-weight","bold");
}//fin function simple



    $('.btncriquetdouble').click({id:this}, double);

    function double() {
        $(this).animate({    
            fontSize:'2em',
        })
        $(this).animate({    
            fontSize:'1em',
        })
        var thisnumber = parseInt(this.getAttribute("attr"));
        console.log("thisnumber :" + thisnumber);
    
        if (array[result].closed[thisnumber] < 2)//si le nombre a été touché moins de 2 fois 
        {
            array[result].closed[thisnumber] = array[result].closed[thisnumber] + 2;//alors on ajoute 2
        }
        else if (array[result].closed[thisnumber] == 2) //si le nombre = 2:
        {
            array[result].closed[thisnumber] = 3;

            for (i = 0; i < array.length; i++) 
            {
                if (array[i].closed[thisnumber] < 3) 
                {
                    array[i].closed["score"] = array[i].closed["score"] + thisnumber; 
                }
            }
        }
        else if (array[result].closed[thisnumber] == 3) //si le nombre = 3:
        { 
            for (i = 0; i < array.length; i++) 
                {
                if (array[i].closed[thisnumber] < 3) 
                {
                    array[i].closed["score"] = array[i].closed["score"] + thisnumber*2; 
                }    
            }
        }
        
        array[result].coupsRestants--;
        displayTableCriquet();//pour mettre à jour le tableau des scores
        verifsiwincriquet(); 
        if (array[result].coupsRestants == 0)//si plus de coup alors on change de joueur
        {
            console.log("nextplayer");
            nextPlayer();
            array[result].coupsRestants = 3;
            
        }
        document.getElementById("case_vide").innerHTML="x "+array[result].coupsRestants ;
        $("#ligne_"+result).css("font-weight","bold");
    }//fin function double

    $('.btncriquettriple').click({id:this}, triple);

    function triple() {
        $(this).animate({    
            fontSize:'2em',
        })
        $(this).animate({    
            fontSize:'1em',
        })
        var thisnumber = parseInt(this.getAttribute("attr"));
        console.log("thisnumber :" + thisnumber);
    
        if (array[result].closed[thisnumber] == 0)//si le nombre n'a pas été touché
        {
            array[result].closed[thisnumber] = 3;//alors on ajoute 3
        }
        else if (array[result].closed[thisnumber] == 1) //si le nombre = 1:
        {
            array[result].closed[thisnumber] = 3;

            for (i = 0; i < array.length; i++) 
            {
                if (array[i].closed[thisnumber] < 3) 
                {
                    array[i].closed["score"] = array[i].closed["score"] + thisnumber; 
                }
            }
        }
        else if (array[result].closed[thisnumber] == 2) //si le nombre = 2:
        {
            array[result].closed[thisnumber] = 3;

            for (i = 0; i < array.length; i++) 
            {
                if (array[i].closed[thisnumber] < 3) 
                {
                    array[i].closed["score"] = array[i].closed["score"] + thisnumber*2; 
                }
            }
        }
        else if (array[result].closed[thisnumber] == 3) //si le nombre = 3:
        { 
            for (i = 0; i < array.length; i++) 
                {
                if (array[i].closed[thisnumber] < 3) 
                {
                    array[i].closed["score"] = array[i].closed["score"] + thisnumber*3; 
                }    
            }
        }
        
        array[result].coupsRestants--;
        displayTableCriquet();//pour mettre à jour le tableau des scores
        verifsiwincriquet();
        if (array[result].coupsRestants == 0)//si plus de coup alors on change de joueur
        {
            console.log("nextplayer");
            nextPlayer();
            array[result].coupsRestants = 3;
           
        }
        document.getElementById("case_vide").innerHTML="x "+array[result].coupsRestants ;
        $("#ligne_"+result).css("font-weight","bold");
    }//fin function triple

    $('.btnzero').click(zero);
    
    function zero(){
        $(this).animate({    
            fontSize:'2em',
        })
        $(this).animate({    
            fontSize:'1em',
        })
        array[result].coupsRestants--;
        displayTableCriquet();//pour mettre à jour le tableau des scores
        if (array[result].coupsRestants < 1)//si plus de coup alors on change de joueur
        {
            console.log("nextplayer");
            nextPlayer();
            array[result].coupsRestants = 3;
            
        }
        document.getElementById("case_vide").innerHTML="x "+array[result].coupsRestants ;
        $("#ligne_"+result).css("font-weight","bold");
    }//fin zero


