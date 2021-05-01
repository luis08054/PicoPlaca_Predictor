//ARCHIVO DE FUNCIONES
function dateValidation(date,plate,hour){
    //Validacion fines de semana
    var days=[7,1,2,3,4,5,6];
    var d= new Date(date);
    var day= days[d.getDay()];
    console.log(day)
    if(day>5 && day <=7){
        window.alert("FIN DE SEMANA PUEDES CIRCULAR LIBREMENTE")
        //return day;       //PRUEBAS JEST
    }else{
        plateValidation(plate,day,hour);
        //return day;       //PRUEBAS JEST
    }
}

function plateValidation(plate,day,hour){
    //Validacion por placa
    var finalPNum= plate.charAt(plate.length-1);
    var mov;
    console.log(finalPNum);
    for (var i=0; i<plateRestriction.length;i++){
        plateRestriction[i].includes(finalPNum)?mov=i+1:console.log("Dia no corresponde");
    }
    if(mov==day){
        hourValidation(hour);
        //return false;     // PRUEBAS JEST
    }else{
        window.alert("PUEDES CIRCULAR LIBREMENTE");
        //return true;     // PRUEBAS JEST
    }

}

function hourValidation(hour){
    //Validacion por hora
    var hou= hour.split(":")[0];
    var min= hour.split(":")[1];
    if(hou>=hourAMRestriction1 ){
        
        hou-hourAMRestriction2;
    }else{

    }

}



//module.exports=dateValidation;
//module.exports=plateValidation;
//module.exports=hourValidation;