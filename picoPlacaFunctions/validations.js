//ARCHIVO DE VALIDACIONES DE INPUTS

hour=":";
date="/";

function dateControl(){
    
    if(document.getElementById("dateInp").value.length==2){
        document.getElementById("dateInp").value=document.getElementById("dateInp").value + date;
    }
    if(document.getElementById("dateInp").value.length==5){
        document.getElementById("dateInp").value=document.getElementById("dateInp").value + date;
    }
}


function hourControl(){
    if(document.getElementById("hourInp").value.length==2){
        document.getElementById("hourInp").value=document.getElementById("hourInp").value + hour;
    }

    if(document.getElementById("hourInp").value.charAt(0)>2){
        document.getElementById("hourInp").value="";
    }

    if(document.getElementById("hourInp").value.charAt(0)==2){
        if(document.getElementById("hourInp").value.charAt(1)>3){
            document.getElementById("hourInp").value="2";
        }
        
    }

    

}

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}


function isPlate(evt) {
    console.log("Validacion letras");
    var plate=document.getElementById("plateInp").value;
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if(plate.length<3){
        if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 123) && charCode != 32) {
            return false;
        }
        return true;
    }else{
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
   
}