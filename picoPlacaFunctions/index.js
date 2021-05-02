function getInformation(){
    //Creacio objetos y recuperacion de informacion
   // console.log = function() {}
    if(formValidation()){
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
    
        dateValidation(newMovDate.date,newVehicle.plate,newMovDate.hour);
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