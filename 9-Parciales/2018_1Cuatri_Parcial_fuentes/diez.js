/*
Bienvenidos.
Se pide la carga de datos de un contenedor de alimento canino con un máximo de carga de 1000kg,
 cargar hasta que el cliente quiera o se llene el contenedor. se pide:  
-marca
-kilos por bolsa
-cantidad de bolsa
-importe por bolsa
a) que marca tiene más kilos en el contenedor?
b) que marca tiene más bolsas de alimento en el contenedor
c) que marca tiene el mayor importe por bolsa de alimento
d) el importe y la marca de la bolsa de alimento menos pesada.
f) Mostrar todo con document.write

*/


function mostrar()
{
    
var marca;
var peso;
var maximoKilo;
var maxKiloIngreso;
var flagPeso;
var acumuladorPeso = 0;
var acumuladorMarca;
var acumuladorMarcaBolsa;
var acumuladorBolsa = 0;
var bolsa;
var importe;
var acumuladorImporte = 0;
var flagImporte;
var flagBolsa;
var flagPesoMenor = 0;
var importePesoMenor;
var acumuladorMarcaMenor = 0;
var acumuladorPesoMenor = 0;
var contenedorAcumulado = 0;
var respuesta;
var acumuladorMarcaImporte;
var respuestaContenedor;







/*

*/








do {


    marca = prompt("Ingrese la marca"); 
    while (marca == isNaN(marca)) {
    marca = prompt("Por fravor ingrese la marca");
    }



    peso = prompt("Ingrese el peso");
    while (peso == isNaN(peso) || (peso > 'a' && peso < 'z') ||(peso > 'A' && peso < 'Z') ) {
    peso = prompt("Por fravor ingrese el peso");
    }//analizar de valizar > 0
    peso = parseInt(peso);



    bolsa = prompt("Ingrese cantidad de bolsas");
    while (bolsa == isNaN(bolsa) || (bolsa > 'a' && bolsa < 'z') ||(bolsa > 'A' && bolsa < 'Z')) {
    bolsa = prompt("Por fravor ingrese cantidad de bolsas");
    }//analizar de valizar > 0
    bolsa = parseInt(bolsa);


    importe = prompt("Ingrese importe por bolsa");
    while (importe == isNaN(importe) || (importe > 'a' && importe < 'z') ||(importe > 'A' && importe < 'Z')) {
        importe = prompt("Por fravor ingrese importe por bolsa");
    }//analizar de valizar > 0
    importe = parseInt(importe);

    console.log("Importe de bolsa menos pesada "+importe);




//a) que marca tiene más kilos en el contenedor?
if (peso > acumuladorPeso || flagPeso == 0) {
        acumuladorPeso =   peso ;  
        acumuladorMarca=  marca;

        flagPeso = 1;
}
console.log("peso acumulado "+acumuladorPeso);
console.log("marca acumuladaa "+acumuladorMarca);



//d) el importe y la marca de la bolsa de alimento menos pesada.
if ( flagPesoMenor == 0 || peso < acumuladorPesoMenor) {
    acumuladorPesoMenor =   peso ;  
    acumuladorMarcaMenor=  marca;
    importePesoMenor = importe;
    flagPesoMenor = 1;
}


//console.log("peso de bolsa menos pesada "+acumuladorPesoMenor);
//console.log("marca de bolsa menos pesada "+acumuladorMarcaMenor);
//console.log("Importe de bolsa menos pesada "+importePesoMenor);












//b) que marca tiene más bolsas de alimento en el contenedor

if (bolsa > acumuladorBolsa || flagBolsa == 0) {
    acumuladorBolsa = bolsa;
    acumuladorMarcaBolsa =  marca;
    flagBolsa = 1;
}
//console.log("bolsa acumulado: "+acumuladorBolsa);
//console.log("la marca que tiene mas bolsas: "+acumuladorMarcaBolsa);

   

//c) que marca tiene el mayor importe por bolsa de alimento

if (importe > acumuladorImporte || flagImporte == 0) {
    acumuladorImporte = importe;
    acumuladorMarcaImporte =  marca;
    flagImporte = 1;
}
console.log("importe acumulado: "+acumuladorImporte);
console.log("la marca con mayor importe por bolsa: "+acumuladorMarcaImporte);


//Contenedor

contenedorAcumulado = contenedorAcumulado + peso;
contenedorAcumulado=parseInt(contenedorAcumulado);
console.log("acumulador antes del if : "+contenedorAcumulado);




if (contenedorAcumulado == 1000) {
    alert("Ya llego a los 1000 kilos!");
} else if (contenedorAcumulado > 1000) {
    respuestaContenedor = contenedorAcumulado - 1000;
    respuestaContenedor = parseInt(respuestaContenedor);
    contenedorAcumulado = (contenedorAcumulado - peso);
    
    peso = prompt("Usted ingreso "+peso+" kilos que supero los 1000 kilos permitidos por: "+respuestaContenedor+". Por favor ingrese menos kilos o pulse 'n' para mostrar resultado");
    peso = parseInt(peso);
    contenedorAcumulado = contenedorAcumulado + peso;
    contenedorAcumulado = parseInt(contenedorAcumulado);
    peso = parseInt(peso);
    console.log("acumulador dentro del if : "+contenedorAcumulado);

    while (peso == isNaN(peso) || (peso >= 'a' && peso <= 'm')&&(peso >= 'o' && peso <= 'z')||(peso >= 'A' && peso <= 'M')&&(peso >= 'O' && peso < 'Z')|| contenedorAcumulado > 1000 ) {
    contenedorAcumulado = parseInt(contenedorAcumulado);
    peso = parseInt(peso);
    contenedorAcumulado = (contenedorAcumulado - peso);
    
    console.log("acumulador dentro del while restado : "+contenedorAcumulado);
    peso = prompt("Supero los 1000 kilos .Por favor ingrese un peso menor al que inreso");
    
    contenedorAcumulado = (contenedorAcumulado + peso);
    console.log("acumulador dentro del while sumado : "+contenedorAcumulado);
    }//analizar de valizar > 0
    if (contenedorAcumulado == 1000) {
        alert("Ya llego a los 1000 kilos!");
    }
    
}




if (contenedorAcumulado < 1000) {
    respuesta = prompt("Para continuar pulsar 's'. Para salir pulsar 'n'"); 
        while (!(respuesta == "n" || respuesta == "s" || respuesta != isNaN(respuesta))) {
        respuesta = prompt("Por favor pulsar 's'. Para salir pulsar 'n'");
        }
}

        

while (!(respuesta == "n" || respuesta == "s" || respuesta != isNaN(respuesta))) {
    respuesta = prompt("Por favor pulsar 's'. Para salir pulsar 'n'");
}




  //  console.log("Respuesta: "+respuesta);
   // console.log("acumulador peso: "+contenedorAcumulado);
    




    
} while (!(contenedorAcumulado >= 1000 || respuesta != "s"));



//a) que marca tiene más kilos en el contenedor?
//b) que marca tiene más bolsas de alimento en el contenedor
//c) que marca tiene el mayor importe por bolsa de alimento
//d) el importe y la marca de la bolsa de alimento menos pesada.
//f) Mostrar todo con document.write

document.write(
    "La marca que  tiene más kilos en el contenedor: "+ acumuladorMarca+"<br>"+
    "La marca que tiene más bolsas de alimento en el contenedor: "+acumuladorMarcaBolsa+"<br>"+
    "La marca que tiene el mayor importe por bolsa de alimento: "+acumuladorMarcaImporte+"<br>"+
     "El importe y la marca de la bolsa de alimento menos pesada:"+"<br>"+
     "Importe: "+acumuladorImporte+"<br>"+
     "Marca: "+acumuladorMarcaImporte


);




}