document.getElementById("inputPass").focus();

function calendarPassword(){
    var pass = document.getElementById('inputPass').value;
    console.log(pass);

    if (pass=="reims" || pass=="Reims" ){
        console.log("gagné");
        document.getElementById("link").setAttribute(
            "style", "display: flex;");
    }

}

