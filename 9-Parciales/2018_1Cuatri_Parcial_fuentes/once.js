/*
Bienvenidos.
Para la gestión de un hotel, ingresar los siguientes datos validados de una reserva;
-nombre del huésped
-cantidad de personas
-cantidad de dia de estadia
-forma de pago(efectivo , tarjeta o QR)
a)informar el huésped que trajo más personas en una sola reserva.
b) la cantidad de personas que se quedaron más días
c) la forma de pago más utilizada.
d) el promedio de cantidad de días por reserva
f) Mostrar todo con document.write
*/
function mostrar()
{
//variables--------------------------------------------------------------------------------
var huesped;
var huespedAcum;
var cantPersonas;
var cantPersonas2;
var contadorPersonas = 0;
var cantPersonasAcum = 0;
var flag = 0;
var seguir;
var dias;
var diasAcum = 0;
var diasCont = 0;
var flag1;
var pago;
var pagoAcum = 0;
var flag3;
var contador1 = 0;
var contador2 = 0;
var contador3 = 0;
var contador4 = 0;
var diasAcum2 = 0;











do {

//----------------------------------------------------------------------------------------
//Entrada de datos========================================================================

huesped=prompt("Por favor ingrese nombre de huesped");
while (huesped==isNaN(huesped)) {
    huesped=prompt("Por favor ingrese nombre de huesped");
}



cantPersonas=prompt("Por favor ingrese cantidad de personas");
while (cantPersonas==isNaN(cantPersonas) || cantPersonas >= 'a' && cantPersonas <= 'z'|| cantPersonas >= 'A' && cantPersonas <= 'Z') {
    cantPersonas=prompt("Por favor ingrese cantidad de personas");
}
cantPersonas = parseInt(cantPersonas)


dias=prompt("Por favor ingrese cantidad dias");
while (dias==isNaN(dias) || dias >= 'a' && dias <= 'z'|| dias >= 'A' && dias <= 'Z') {
    dias=prompt("Por favor ingrese cantidad de dias");
}
dias = parseInt(dias)


pago=prompt("Ingrese forma de pago:"+"\n"+ 
    "Pulsar '1' para para efectivo."+"\n"+ 
    "Pulsar '2' para para tarjeta."+"\n"+ 
    "Pulsar '3' para para QR."
    );
    pago=parseInt(pago);

while (!(pago==1||pago==2||pago==3)) {
    pago=prompt("Ingrese forma de pago:"+"\n"+ 
    "Pulsar '1' para para efectivo."+"\n"+ 
    "Pulsar '2' para para tarjeta."+"\n"+ 
    "Pulsar '3' para para QR."
    );
    pago=parseInt(pago);
    
}



//----------------------------------------------------------------------------------------
//a)informar el huésped que trajo más personas en una sola reserva.
if (flag==0 || cantPersonas > cantPersonasAcum) {
    cantPersonasAcum =  cantPersonasAcum + cantPersonas;
    cantPersonasAcum = parseInt(cantPersonasAcum);
    huespedAcum = huesped;
 
    flag=1;
}


//console.log("cantPersonas "+cantPersonas);
//console.log("Huesped que trajo mas personas "+huespedAcum);
//console.log("cantPersonasAcum "+cantPersonasAcum);


//------------------------------------------------------------------------------------------------
//b) la cantidad de personas que se quedaron más días

if (flag1==0 || dias > diasAcum) {

    diasAcum =  diasAcum + dias;
    cantPersonas2 = cantPersonas;
    flag1=1;
console.log("dias acumulados "+diasAcum);
console.log("cantidad de personas "+cantPersonas2);
}


//------------------------------------------------------------------------------------------------
//c) la forma de pago más utilizada.


switch (pago) {
    case 1:
        contador1++;
        contador1=parseInt(contador1);
        console.log("contador 1  "+contador1);
        
        break;
    
    case 2:
            contador2++;
            contador2=parseInt(contador2);
            console.log("contador 2  "+contador2);
            break;    

    case 3:
                contador3++;
                contador3=parseInt(contador3);
                console.log("contador 3  "+contador3);
                
                break;        

    default:
        break;
}


//------------------------------------------------------------------------------------------------------
//d) el promedio de cantidad de días por reserva





diasAcum2 =  diasAcum2 + dias;
contador4++;

promnedio = diasAcum2/contador4;









//------------------------------------------------------------------------------------------------





seguir = prompt("Desea seguir? pulsar 's' para seguir, pulsar 'n' para finlaizar");
while (!(seguir == "n"|| seguir == "s")) {
    seguir = prompt("Desea seguir? pulsar 's' para seguir, pulsar 'n' para finlaizar"); 
}


} while (seguir != "n");

document.write("El huésped que trajo más personas en una sola reserva es: "+huespedAcum+"<br>");

if (contador1 > contador2 && contador1 > contador3) {
    document.write("La forma de pago que mas utiliza es: efectivo "+"<br>");
}else if (contador2 > contador1 && contador2 > contador3) {
    document.write("La forma de pago que mas utiliza es: tarjeta  "+"<br>");
}else if (contador3 > contador2 && contador3 > contador1) {
    document.write("La forma de pago que mas utiliza es: QR "+"<br>");
}else if (contador1 == contador2 && contador1 > contador3) {
    document.write("Las formas de pago que MAS  se utilizan son: efectivo y tarjeta "+"<br>");
}else if (contador1 == contador3 && contador1 > contador2) {
    document.write("Las formas de pago que MAS  se utilizan son: efectivo y QR "+"<br>");
}else if (contador2 == contador3 && contador2 > contador1) {
    document.write("Las formas de pago que MAS se utilizan son: Tarjeta y QR "+"<br>");
}


document.write(" el promedio de cantidad de días por reserva es: "+promnedio+"<br>");
document.write("La cantidad de personas que se quedaron más días es: "+cantPersonas2+"<br>");














    



    
}