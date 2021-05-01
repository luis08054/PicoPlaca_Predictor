//ARCHIVO DE FUNCIONES
function getInformation(){
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
    console.log(plateInput + " " + dateInput +" " + hourInput)

    var newVehicle= Vehicle(plateInput);
    var newMovDate = PicoYPlaca(dateInput,hourInput);



}

