function Jeu_au_hasard(){
    $('#games').css("display","none");
    $('.test').css("display","none");
    $('#back').css("display","none");
    $('.rules').css("display","none");
    $('.roue').css("display","flex");
    $('#inputname').css("display","none");
}
 
 
 // Create new wheel object specifying the parameters at creation time.
            let theWheel = new Winwheel({
                'numSegments'  : 11,     // Specify number of segments.
                'outerRadius'  : 163,   // Set outer radius so wheel fits inside the background.
                'centerX'     : 165,    
                'centerY'     : 165,
                'lineWidth'   : 1,    
                'textFontSize' : 20,    // Set font size as desired.
                'responsive'   : true,  // This wheel is responsive!
                'segments'     :        // Define segments including colour and text.
                [
                   {'fillStyle' : '#eae56f', 'text' : '301'},
                   {'fillStyle' : '#89f26e', 'text' : '501'},
                   {'fillStyle' : '#7de6ef', 'text' : '701'},
                   {'fillStyle' : '#e7706f', 'text' : '901'},
                   {'fillStyle' : '#eae56f', 'text' : '+100'},
                   {'fillStyle' : '#89f26e', 'text' : 'Best combo'},
                   {'fillStyle' : '#7de6ef', 'text' : 'Pire Combo'},
                   {'fillStyle' : '#e7706f', 'text' : 'Random'},
                   {'fillStyle' : '#7de6ef', 'text' : 'Criquet'},
                   {'fillStyle' : '#89f26e', 'text' : 'Billard'},
                   {'fillStyle' : '#e7706f', 'text' : 'BillardColor'}
                ],
                'animation' :           // Specify the animation to use.
                {
                    'type'     : 'spinToStop',
                    'duration' : 5,     // Duration in seconds.
                    'spins'    : 8,     // Number of complete spins.
                    'callbackFinished' : alertPrize
                }
            });

            // Vars used by the code in this page to do power controls.
            let wheelPower    = 0;
            let wheelSpinning = false;
           
            // -------------------------------------------------------
            // Click handler for spin button.
            // -------------------------------------------------------
            function startSpin()
            {
                    theWheel.startAnimation();
                    // Set to true so that power can't be changed and spin button re-enabled during
                    // the current animation. The user will have to reset before spinning again.
                    wheelSpinning = true;
            }

           
            // -------------------------------------------------------
            // Called when the spin animation has finished by the callback feature of the wheel because I specified callback in the parameters
            // note the indicated segment is passed in as a parmeter as 99% of the time you will want to know this to inform the user of their prize.
            // -------------------------------------------------------
            function alertPrize(indicatedSegment)
            {
               

                if(indicatedSegment.text=="301"){
                    var game_selected = "301";
                    console.log(game_selected);
                    animHasard();
                    setTimeout(enchaine,2200);
                }else if(indicatedSegment.text=="501"){
                    var game_selected = "501";
                    console.log(game_selected);
                    animHasard();
                    setTimeout(enchaine501,2200);
                }else if(indicatedSegment.text=="701"){
                    var game_selected = "701";
                    console.log(game_selected);
                    animHasard();
                    setTimeout(enchaine701,2200);
                }else if(indicatedSegment.text=="901"){
                    var game_selected = "901";
                    console.log(game_selected);
                    animHasard();
                    setTimeout(enchaine901,2200);
                }else if(indicatedSegment.text=="+100"){
                    var game_selected = "+100";
                    console.log(game_selected);
                    animHasard();
                    setTimeout(displayContainer200TEST,2200);
                }else if(indicatedSegment.text=="Best combo"){
                    var game_selected = "Best combo";
                    console.log(game_selected);
                    animHasard();
                    setTimeout(chooseNumber,2200);
                }else if(indicatedSegment.text=="Pire Combo"){
                    var game_selected = "Pire Combo";
                    console.log(game_selected);
                    animHasard();
                    setTimeout(chooseNumberPire,2200);
                }else if(indicatedSegment.text=="Criquet"){
                    var game_selected = "Criquet";
                    console.log(game_selected);
                    animHasard();
                    setTimeout(criquet,2200);
                }else if(indicatedSegment.text=="Billard"){
                    var game_selected = "Billard";
                    console.log(game_selected);
                    animHasard();
                    setTimeout(billard,2200);
                }else if(indicatedSegment.text=="BillardColor"){
                    var game_selected = "BillardColor";
                    console.log(game_selected);
                    animHasard();
                    setTimeout(billardColor,2200);
                }else if(indicatedSegment.text=="Random"){
                    var game_selected = "Random";
                    console.log(game_selected);
                    animHasard();
                    setTimeout(random, 2200);
                }                  
                else{
                    console.log("aps 301 !");
                }


                function animHasard(){
                    console.log("animhasard()");
                    document.getElementById("titre").innerText=game_selected;
                    $("#titre").animate({height: "300px",fontSize: "70px",paddingTop: "13%"});           
                    $("#titre").delay(1500).animate({height: "10%",fontSize: "1em", paddingTop: "0"});
                    $('.roue').css("display","none");
                }
              
              
                // Do basic alert of the segment text. You would probably want to do something more interesting with this information.
               // alert("You have won " + indicatedSegment.text);
            }
