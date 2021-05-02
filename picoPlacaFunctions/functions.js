//ARCHIVO DE FUNCIONES

//Mensajes para consulta
mov="PUEDES CIRCULAR EN ESTE HORARIO, A EXCEPCIÓN DE LAS 7:00-9:30 Y DE 16:00-19:30";
freeMov="PUEDES CIRCULAR LIBREMENTE";
noMov="NO PUEDES CIRCULAR EN ESTE HORARIO";
weeMov="FIN DE SEMANA PUEDES CIRCULAR LIBREMENTE";


//Variables globales inicializadas
plateRestriction =["12","34","56","78","90"];
hourAMRestriction =7;
hourPMRestriction = 16;
minRestriction = 30;


function dateValidation(date,plate,hour){
    //Validacion fines de semana
   
    var days=[7,1,2,3,4,5,6];
    var d= new Date(date);
    var day= days[d.getDay()];
    console.log(day)
    if(day>5 && day <=7){
        window.alert(weeMov)
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
        window.alert(freeMov);
        //return true;     // PRUEBAS JEST
    }

}

function hourValidation(hour){
    //Validacion por hora
    var hou= hour.split(":")[0];
    var min= hour.split(":")[1];
    hou=parseInt(hou);
    min=parseInt(min);
    console.log("HORA " + hou+":"+ min);
    var houAm=hou -hourAMRestriction;
    var houPm= hou-hourPMRestriction;
    var minT= minRestriction- min;
    if((houAm>=0 && houAm<=2)||(houPm>=0 && houPm<=3) ){
        if(houAm==2 || houPm==3){
            if(minT>=0){
                window.alert(noMov);
            }else{
                window.alert(mov);
            }  
        }else{
            window.alert(mov);
        }    
    }else{
        window.alert(mov);
    }

}



//module.exports=dateValidation;
//module.exports=plateValidation;
//module.exports=hourValidation;