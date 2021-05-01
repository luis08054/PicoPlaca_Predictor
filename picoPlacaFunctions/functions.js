//ARCHIVO DE FUNCIONES
function getInformation(){
    //Creacio objetos y recuperacion de informacion
    console.log = function() {}
    if(formValidation()){
        plateRestriction =["12","34","56","78","90"];
        hourAMRestriction1 =7;
        hourAMRestriction2 =9;
        hourPMRestriction1 = 16;
        hourPMRestriction2 = 19;
        function Vehicle(plate){
            this.plate=plate;
        }
    
        function PicoYPlaca(date,hour){
            this.date=date;
            this.hour=hour;
        }
    
        var plateInput= document.getElementById("plateInp").value;
        var dateInput= document.getElementById("dateInp").value;
        var hourInput= document.getElementById("hourInp").value;
        console.log(plateInput + " | " + dateInput +" | " + hourInput)
    
        newVehicle= new Vehicle(plateInput);
        newMovDate = new PicoYPlaca(dateInput,hourInput);
    
        dateValidation(newMovDate.date);
    }else{
        window.alert("INGRESE TODOS LOS DATOS");
    }
    
}

function formValidation(){
    var flag;
    document.getElementById("plateInp").value==""||
    document.getElementById("dateInp").value==""||
    document.getElementById("hourInp").value==""||
    document.getElementById("plateInp").value.length<7||
    document.getElementById("dateInp").value.length<10||
    document.getElementById("hourInp").value.length<5
    ?flag= false:flag= true;
    return flag;
}

function dateValidation(date){
    //Validacion fines de semana
    var days=[7,1,2,3,4,5,6];
    var d= new Date(date);
    var day= days[d.getDay()];
    console.log(day)
    if(day>5 && day <=7){
        window.alert("FIN DE SEMANA PUEDES CIRCULAR LIBREMENTE")
    }else{
        plateValidation(newVehicle.plate,day);
    }
}

function plateValidation(plate,day){
    //Validacion por placa
    var finalPNum= plate.charAt(plate.length-1);
    var mov;
    console.log(finalPNum);
    for (var i=0; i<plateRestriction.length;i++){
        plateRestriction[i].includes(finalPNum)?mov=i+1:console.log("Dia no corresponde");
    }
    if(mov==day){
        hourValidation(newMovDate.hour);
    }else{
        window.alert("PUEDES CIRCULAR LIBREMENTE");
    }

}

function hourValidation(hour){
    //Validacion por hora
    var hou= hour.split(":")[0];
    var min= hour.split(":")[1];
    if(hou<=12){
        hou-hourAMRestriction1;
        hou-hourAMRestriction2;
    }else{

    }

}




