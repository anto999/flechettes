function criquet(){
    addPlayer();
    displayTableCriquet();
    $("#titre").css("display","none");
    $("#ligne_"+result).css("font-weight","bold");
    //document.getElementById("case_vide").innerHTML="x "+array[result].coupsRestants ;
    document.getElementById("titre-criquet").innerHTML=array[result].name;
    $("#containertitrecriquet").css("visibility","initial");
    displayCoupsRestants();
    createHistoriqueClassCriquet();
}
var HistoriqueCriquetVar;
function createHistoriqueClassCriquet(){
    const H = new HistoriqueCriquet ();
    H.historique=[];
    console.log("histoqieCriquet");
    HistoriqueCriquetVar=H;
    HistoriqueCriquetVar.historique.push(JSON.stringify(array));
    
}

function displayTableCriquet(){ //créer le tableau criquet, met aussi le tableau à jour quand elle est executée

var a = document.getElementById('input_nbplayer0').value;// a= nbre de joueurs
//console.log("nbre de joueurs: "+a);
var card ='<table width="100%" class="containerCriquet">'+
'<tr>'+
    '<td width="25%">'+
        '<div class="case_vide" id="retourCriquet" onclick="returnCriquet()">'+
            '<img class="back" src=images/icons/back.png>'+
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
    //2em bout de test :
  

    //console.log(array[b]);
    
    card += ' <tr  id="ligne_'+b+'">';
    card +='<td style="height:45px">'; 
    card += '<div class="joueur_'+array[b].name+' joueur joueur_name" id="'+array[b].name+'name">';
    card +=array[b].name; 
    card += '</div>';
    card += ' </td>';
    

    
    card +='<td>'; 
    card += '<div class="score_'+array[b].name+' joueur score_joueur_criquet" id="score_'+array[b].name+'">';
    card +=array[b].closed["score"]; 
    card += '</div>';
    card += ' </td>';

    card +='<td>'; 
    card += '<div class="'+array[b].name+' joueur" id="'+array[b].name+'_15">';
    card +='<img class="cible" id="'+array[b].name+'_15_img" src="">'; 
    card += '</div>';
    card += ' </td>';

    card +='<td>'; 
    card += '<div class="'+array[b].name+' joueur" id="'+array[b].name+'_16">';
    card +='<img class="cible" id="'+array[b].name+'_16_img" src="">'; 
    card += '</div>';
    card += ' </td>';

    card +='<td>'; 
    card += '<div class="'+array[b].name+' joueur" id="'+array[b].name+'_17">';
    card +='<img class="cible" id="'+array[b].name+'_17_img" src="">'; 
    card += '</div>';
    card += ' </td>';

    card +='<td>'; 
    card += '<div class="'+array[b].name+' joueur" id="'+array[b].name+'_18">';
    card +='<img class="cible" id="'+array[b].name+'_18_img" src="">';  
    card += '</div>';
    card += ' </td>';

    card +='<td>'; 
    card += '<div class="'+array[b].name+' joueur" id="'+array[b].name+'_19">';
    card +='<img class="cible" id="'+array[b].name+'_19_img" src="">'; 
    card += '</div>';
    card += ' </td>';

    card +='<td>'; 
    card += '<div class="'+array[b].name+' joueur" id="'+array[b].name+'_20">';
    card +='<img class="cible" id="'+array[b].name+'_20_img" src="">'; 
    card += '</div>';
    card += ' </td>';

    card +='<td>'; 
    card += '<div class="'+array[b].name+' joueur" id="'+array[b].name+'_bul">';
    card +='<img class="cible" id="'+array[b].name+'_25_img" src="">';  
    card += '</div>';
    card += ' </td>';
    
    card += ' </tr>';
        
    b=b+1;
        } //fin boucle
   
    card += ' </table>';

    $("#criquetDiv").html(card);
   
   // document.getElementById("titre-criquet").innerHTML="A  "+array[result].name+" de jouer "+array[result].coupsRestants+" fois !" ;
    $("#h6").css("display","none");
 
    $("#container-wall").css("display","none"); 
    $(".boutonscriquet").css("display","table"); 
   
    //test de la boucle:

    for(b=15;b<26;b++){//de 15 à 25 car bull=closed[25]
        for (i=0;i<array.length;i++){//on fait le calcul pour i c'est a dire tous les joueurs
            if (array[i].closed[b]==1){
                document.getElementById(array[i].name+"_"+b+"_img").src = "images/icons/dart.png";
            }else if (array[i].closed[b]==2){
                document.getElementById(array[i].name+"_"+b+"_img").src = "images/icons/dart2.png";
            }
            else if (array[i].closed[b]==3){
                document.getElementById(array[i].name+"_"+b+"_img").src = "images/icons/cible.png";
            }
        }
    }
    return parseInt(a);
    }//fin displayTableCriquet()

    function displayCoupsRestants(){
        if (array[result].coupsRestants==3){
            document.getElementById("img_titre_criquet_3").src = "images/icons/dart_black.png";
            document.getElementById("img_titre_criquet_2").src = "images/icons/dart_black.png";
            document.getElementById("img_titre_criquet_1").src = "images/icons/dart_black.png";
        }else if(array[result].coupsRestants==2){
            document.getElementById("img_titre_criquet_3").src = "";
            document.getElementById("img_titre_criquet_2").src = "images/icons/dart_black.png";
            document.getElementById("img_titre_criquet_1").src = "images/icons/dart_black.png";
        }
        else if(array[result].coupsRestants==1){
            document.getElementById("img_titre_criquet_3").src = "";
            document.getElementById("img_titre_criquet_2").src = "";
            document.getElementById("img_titre_criquet_1").src = "images/icons/dart_black.png";
        }else {
            console.log("bug coups restants "+array[result].name+" : " +array[result].coupsRestants+" coups restants");
            document.getElementById("img_titre_criquet_3").src = "images/icons/back.png";
            document.getElementById("img_titre_criquet_2").src = "images/icons/back.png";
            document.getElementById("img_titre_criquet_1").src = "images/icons/back.png";
        }
        document.getElementById("titre-criquet").innerHTML=array[result].name;
        $("#ligne_"+result).css("font-weight","bold");
    }
 

    function verifsiwincriquet(){
        for(a=0;a<array.length;a++){
            if  (array[a].closed[15]  ==3  && array[a].closed[16]  ==3  && array[a].closed[17]  ==3  && array[a].closed[18] ==3  && array[a].closed[19] ==3 
                && array[a].closed[20]  ==3  && array[a].closed[25] ==3 ) // si toutes les portes sont fermées
           {
               console.log("portes fermées!")
               var arayscoredetoutlemondecriquet=[];//on créé un tableau avec le score de chacun
               for (i=0;i<array.length;i++)
               {   
                   arayscoredetoutlemondecriquet.push(array[i].closed["score"]);
               }
               var m= Math.min(...arayscoredetoutlemondecriquet);
               if(array[a].closed["score"]==m)
               {
                   console.log("winner !!!");
                   modalwin();
                   document.getElementById("titre").innerHTML="Victoire de  "+array[a].name;
                 //ici modalwin ne suffit pas car elle fait appler a array[name] alors que nous voulons array[i] 
                   $("#containertitrecriquet").css("visibility","hidden");//pour le criquet
                 
                   array[result].closed["win"]== true;
                   $("#titre").css("display","list-item");
                   $(".boutonscriquet").css("visibility","hidden");
                   displayrestart();
                  
                   throw new Error('This is not an error. This is just to abort javascript');//juste pour stopper le script et ne pas passer à l'instruction suivante
                   return 0;
                   console.log("return 0 ne marche pas!")
               }
           }
        }
       
    }//fin verifsiwincriquet

       
    var MAJtableau = function(){
        var thisnumber = parseInt(this.getAttribute("attr"));
    
        if ( array[result].closed[thisnumber]==1){
            this.src='images/icons/dart.png';
            document.getElementById(array[result].name+'_'+thisnumber+'_img').src=this.src; //on met l'image dart sur la case correspondante
        }else if (array[result].closed[thisnumber]==2){
            this.src='images/icons/dart2.png';
            document.getElementById(array[result].name+'_'+thisnumber+'_img').src=this.src; //on met l'image dart sur la case correspondante
        }else if (array[result].closed[thisnumber]==3){


            
            this.src='images/icons/cible.png';
            document.getElementById(array[result].name+'_'+thisnumber+'_img').src=this.src; //on met l'image dart sur la case correspondante
        }
        for(i=0;i<array.length;i++){
            document.getElementById('score_'+array[i].name).innerHTML=array[i].closed["score"];
        }

      
       //test pour griser le criquet quand tout le monde a fermé le meme chiffre
     var nbdejoueurfermés = 0
     for (a=0; a<array.length;a++){
         if (array[a].closed[thisnumber]==3){
             nbdejoueurfermés++;
         }
     }
     if (nbdejoueurfermés==array.length){
         console.log("grisé");
         for (a=0; a<array.length;a++){
            this.src='images/icons/full.png';
            document.getElementById(array[a].name+'_'+thisnumber+'_img').src=this.src;
         }
     }
    
       }//fin  MAJtableau()

    $('.btncriquetsimple').click({id:this}, simple);

function simple() {
    window.navigator.vibrate(200);

        $(this).addClass("white").delay(200).queue(function(next){
            $(this).removeClass("white");
            next();
        });
  
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

    //ici on met en dur ce qui equivaut a la fonction MAJtableau() en attendant de trouver comment faire pour seulement appeller cette dite fonction (cela ne marche pas quand je met MAJtableau(), cette fonction met a jour le tableu en rechargeant uniquement ce qui doit l'etre et pas le tableau entier comme dans displayTableCriquet())
    if ( array[result].closed[thisnumber]==1){
        this.src='images/icons/dart.png';
        document.getElementById(array[result].name+'_'+thisnumber+'_img').src=this.src; //on met l'image dart sur la case correspondante
    }else if (array[result].closed[thisnumber]==2){
        this.src='images/icons/dart2.png';
        document.getElementById(array[result].name+'_'+thisnumber+'_img').src=this.src; //on met l'image dart sur la case correspondante
    }else if (array[result].closed[thisnumber]==3){
        this.src='images/icons/cible.png';
        document.getElementById(array[result].name+'_'+thisnumber+'_img').src=this.src; //on met l'image dart sur la case correspondante
    }
    for(i=0;i<array.length;i++){
        document.getElementById('score_'+array[i].name).innerHTML=array[i].closed["score"];
    }
     //test pour griser le criquet quand tout le monde a fermé le meme chiffre
     var nbdejoueurfermés = 0
     for (a=0; a<array.length;a++){
         if (array[a].closed[thisnumber]==3){
             nbdejoueurfermés++;
         }
     }
     if (nbdejoueurfermés==array.length){
         console.log("grisé");
         for (a=0; a<array.length;a++){
            this.src='images/icons/full.png';
            document.getElementById(array[a].name+'_'+thisnumber+'_img').src=this.src;
         }
     }

    
    //MAJtableau();//pour mettre à jour le tableau des scores avec uniquement ce qui doit etre rechargé, probleme : ca marche pas !!: this.getAttribute is not a function  !! grrrrr 
    //displayTableCriquet();//pour mettre à jour le tableau des scores, probleme : absolument toutes les images se rechargent
    verifsiwincriquet();
    if (array[result].coupsRestants == 0)//si plus de coup alors on change de joueur
    {
        $("#ligne_"+result).css("font-weight","initial");//on passea la ligne en initial avant de changer de joueur, puis la suivante sera en bold quand on appellera displayCoupsRestants()
        console.log("nextplayer");
        nextPlayer();
        array[result].coupsRestants = 3;
        
    }
     displayCoupsRestants();
     HistoriqueCriquetVar.historique.push(JSON.stringify(array));
}//fin function simple



    $('.btncriquetdouble').click({id:this}, double);

    function double() {
        window.navigator.vibrate(200);
       
            $(this).addClass("white").delay(200).queue(function(next){
                $(this).removeClass("white");
                next();
            });
        
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
     //ici on met en dur ce qui equivaut a la fonction MAJtableau() en attendant de trouver comment faire pour seulement appeller cette dite fonction (cela ne marche pas quand je met MAJtableau(), cette fonction met a jour le tableu en rechargeant uniquement ce qui doit l'etre et pas le tableau entier comme dans displayTableCriquet())
     if ( array[result].closed[thisnumber]==1){
        this.src='images/icons/dart.png';
        document.getElementById(array[result].name+'_'+thisnumber+'_img').src=this.src; //on met l'image dart sur la case correspondante
    }else if (array[result].closed[thisnumber]==2){
        this.src='images/icons/dart2.png';
        document.getElementById(array[result].name+'_'+thisnumber+'_img').src=this.src; //on met l'image dart sur la case correspondante
    }else if (array[result].closed[thisnumber]==3){
        this.src='images/icons/cible.png';
        document.getElementById(array[result].name+'_'+thisnumber+'_img').src=this.src; //on met l'image dart sur la case correspondante
    }
    for(i=0;i<array.length;i++){
        document.getElementById('score_'+array[i].name).innerHTML=array[i].closed["score"];
    }

     //test pour griser le criquet quand tout le monde a fermé le meme chiffre
     var nbdejoueurfermés = 0
     for (a=0; a<array.length;a++){
         if (array[a].closed[thisnumber]==3){
             nbdejoueurfermés++;
         }
     }
     if (nbdejoueurfermés==array.length){
         console.log("grisé");
         for (a=0; a<array.length;a++){
            this.src='images/icons/full.png';
            document.getElementById(array[a].name+'_'+thisnumber+'_img').src=this.src;
         }
     }

    
    //MAJtableau();//pour mettre à jour le tableau des scores avec uniquement ce qui doit etre rechargé, probleme : ca marche pas !!: this.getAttribute is not a function  !! grrrrr 
    //displayTableCriquet();//pour mettre à jour le tableau des scores, probleme : absolument toutes les images se rechargent
        verifsiwincriquet(); 
        if (array[result].coupsRestants == 0)//si plus de coup alors on change de joueur
        {
            console.log("nextplayer");
            $("#ligne_"+result).css("font-weight","initial");//on passea la ligne en initial avant de changer de joueur, puis la suivante sera en bold quand on appellera displayCoupsRestants()
            nextPlayer();
            array[result].coupsRestants = 3;
            
        }
         
         displayCoupsRestants();
         HistoriqueCriquetVar.historique.push(JSON.stringify(array));
       
    }//fin function double

    $('.btncriquettriple').click({id:this}, triple);

    function triple() {
        window.navigator.vibrate(200);
        
            $(this).addClass("white").delay(200).queue(function(next){
                $(this).removeClass("white");
                next();
            });
        
    
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
            //ici on met en dur ce qui equivaut a la fonction MAJtableau() en attendant de trouver comment faire pour seulement appeller cette dite fonction (cela ne marche pas quand je met MAJtableau(), cette fonction met a jour le tableu en rechargeant uniquement ce qui doit l'etre et pas le tableau entier comme dans displayTableCriquet())
        if ( array[result].closed[thisnumber]==1){
            this.src='images/icons/dart.png';
            document.getElementById(array[result].name+'_'+thisnumber+'_img').src=this.src; //on met l'image dart sur la case correspondante
        }else if (array[result].closed[thisnumber]==2){
            this.src='images/icons/dart2.png';
            document.getElementById(array[result].name+'_'+thisnumber+'_img').src=this.src; //on met l'image dart sur la case correspondante
        }else if (array[result].closed[thisnumber]==3){
            this.src='images/icons/cible.png';
            document.getElementById(array[result].name+'_'+thisnumber+'_img').src=this.src; //on met l'image dart sur la case correspondante
        }
        for(i=0;i<array.length;i++){
            document.getElementById('score_'+array[i].name).innerHTML=array[i].closed["score"];
        }

         //test pour griser le criquet quand tout le monde a fermé le meme chiffre
     var nbdejoueurfermés = 0
     for (a=0; a<array.length;a++){
         if (array[a].closed[thisnumber]==3){
             nbdejoueurfermés++;
         }
     }
     if (nbdejoueurfermés==array.length){
         console.log("grisé");
         for (a=0; a<array.length;a++){
            this.src='images/icons/full.png';
            document.getElementById(array[a].name+'_'+thisnumber+'_img').src=this.src;
         }
     }

        
        //MAJtableau();//pour mettre à jour le tableau des scores avec uniquement ce qui doit etre rechargé, probleme : ca marche pas !!: this.getAttribute is not a function  !! grrrrr 
        //displayTableCriquet();//pour mettre à jour le tableau des scores, probleme : absolument toutes les images se rechargent
        verifsiwincriquet();
        if (array[result].coupsRestants == 0)//si plus de coup alors on change de joueur
        {
            console.log("nextplayer");
            $("#ligne_"+result).css("font-weight","initial");//on passea la ligne en initial avant de changer de joueur, puis la suivante sera en bold quand on appellera displayCoupsRestants()
            nextPlayer();
            array[result].coupsRestants = 3;
           
        }
         
         displayCoupsRestants();
         HistoriqueCriquetVar.historique.push(JSON.stringify(array));
        
    }//fin function triple

    $('.btnzero').click(zero);
    
    function zero(){
        window.navigator.vibrate(200);
        
            $(this).addClass("white").delay(200).queue(function(next){
                $(this).removeClass("white");
                next();
            });
        
        array[result].coupsRestants--;
            //ici on met en dur ce qui equivaut a la fonction MAJtableau() en attendant de trouver comment faire pour seulement appeller cette dite fonction (cela ne marche pas quand je met MAJtableau(), cette fonction met a jour le tableu en rechargeant uniquement ce qui doit l'etre et pas le tableau entier comme dans displayTableCriquet())
      
        //MAJtableau();//pour mettre à jour le tableau des scores avec uniquement ce qui doit etre rechargé, probleme : ca marche pas !!: this.getAttribute is not a function  !! grrrrr 
        //displayTableCriquet();//pour mettre à jour le tableau des scores, probleme : absolument toutes les images se rechargent
        if (array[result].coupsRestants < 1)//si plus de coup alors on change de joueur
        {
            console.log("nextplayer");
            $("#ligne_"+result).css("font-weight","initial");//on passea la ligne en initial avant de changer de joueur, puis la suivante sera en bold quand on appellera displayCoupsRestants()
            nextPlayer();
            array[result].coupsRestants = 3;
            
        }
         displayCoupsRestants();
         HistoriqueCriquetVar.historique.push(JSON.stringify(array));
       
    }//fin zero

    function rienCriquet(){
        $("#ligne_"+result).css("font-weight","initial");//on passea la ligne en initial avant de changer de joueur, puis la suivante sera en bold quand on appellera displayCoupsRestants()
        if (array[result].coupsRestants==3){
            zero();
            zero();
            zero();
        }
        else if (array[result].coupsRestants==2){
            zero();
            zero();
        }
        else if (array[result].coupsRestants==1){   
            zero();
        }else{
            console.log("bug rienCriquet");
        }
        $("#containertitrecriquet").addClass("btnzero").delay(200).queue(function(next){
            $("#containertitrecriquet").removeClass("btnzero"); //on ajoute et on retire la class de btnzero c'est a dire o najoute un backgroud color red
            next();
        });
    }// fin rienCriquet


    function returnCriquet(){
        window.navigator.vibrate(200);
        $("#containertitrecriquet").addClass("btnzero").delay(200).queue(function(next){
            $("#containertitrecriquet").removeClass("btnzero"); //on ajoute et on retire la class de btnzero c'est a dire o najoute un backgroud color red
            next();
        });
        var histocoupPrecedent=HistoriqueCriquetVar.historique.length-2;
        var newstate=JSON.parse(HistoriqueCriquetVar.historique[histocoupPrecedent]);
        //nextplayer inversé:
        if (array[result].coupsRestants ==3){//si =3 alors il faut revenir au joueur précédent
             if (result==0 ){
                result=array.length-1;
                tour--;

                  eles = document.getElementsByClassName("nbtour");
                for(var i in eles) {
                    document.getElementsByClassName("nbtour")[i].innerText = tour;
                }
            }
            else{
                result=result-1;
            }
            var x =JSON.parse(HistoriqueCriquetVar.historique[histocoupPrecedent]);
            x[result].coupsRestants=1;
            newstate=x;
            array=newstate;
        }//fin if coups restant s 3
        array=newstate;
        HistoriqueCriquetVar.historique.pop();//on supprime le dernier coup de l'historique
         //test pour griser le criquet quand tout le monde a fermé le meme chiffre
      
        displayTableCriquet();
        displayCoupsRestants();
    }