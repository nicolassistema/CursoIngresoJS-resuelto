/*

Realizar el algoritmo que permita ingresar los datos de una compra de ingredientes
 para preparar comida al por mayor , hasta que el cliente quiera:
peso (entre 10 y 1000)en kilo,
precio por kilo (más de cero ),
tipo validad("v";"a";"m")(vegetal,animal o mezcla )
Si compro más de 100 kilos en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 300 kilos en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo de alimento más caro.
f) El promedio de precio por kilo en total.
Curso de ingreso UTN FRA
*/


function mostrar()
{
  alert("dos");
var peso;
var alimento;
var alimnetoMasCaro;
var importe;
var importeTotal = 0;
var importeMasCaro = 0;
var importeTotaldesc = 0;
var kiloTotal = 0;
var promedio = 0;



do {
    alimento=prompt("Por favor ingrese alimento");
    while (alimento != "v" && alimento != "a" && alimento != "m") 
    {
      alimento=prompt("Por favor reingrese alimento");
    }

    peso=parseInt(prompt("Por favor ingrese peso"));
    while (isNaN(peso) || peso < 10 || peso > 1000) 
    {
      peso=parseInt(prompt("Por favor reingrese peso"));
    }

    importe=parseInt(prompt("Por favor ingrese importe del kilo de alimento"));
    while (isNaN(importe)||importe==0)
    {
      importe=parseInt(prompt("Por favor reingrese importe del kilo de alimento"));
    }

    //a) El importe total a pagar , bruto sin descuento y...
    importeTotal = peso * importe;
    
    //console.log("importe total: "+importeTotal);


    //d) Informar el tipo de alimento más caro.
    if (importe > importeMasCaro) 
    {
      importeMasCaro = importe;
      alimnetoMasCaro = alimento;
    }

    

    //f) El promedio de precio por kilo en total
    //Acumulo kilos
    kiloTotal = kiloTotal + peso;
    kiloTotal = parseInt(kiloTotal);
    //console.log("kilo total: "+kiloTotal);


    respuesta = prompt("Para seguir pulsar 's', para salur pulsar 'n'");
    while (respuesta != "s" && respuesta != "n")
    {
        respuesta=prompt("Por favor para seguir pulsar 's', para salur pulsar 'n'");
    }

} while (respuesta != "n");


//Si compro más de 100 kilos en total tenes 15% de descuento sobre el total a pagar.
//Si compro más de 300 kilos en total tenes 25% de descuento sobre el total a pagar.
if (kiloTotal > 100 && kiloTotal < 301)
{
  importeTotaldesc = importeTotal;
  importeTotaldesc -= importeTotaldesc*0.15;
}else if (kiloTotal > 300) 
  {
    importeTotaldesc = importeTotal;
    importeTotaldesc -= importeTotaldesc*0.25;
  }

//f) El promedio de precio por kilo en total
importeTotaldesc = parseInt(importeTotaldesc);
promedio = importeTotal / kiloTotal;
promedio = parseFloat(promedio).toFixed(2);
//console.log("Promedio: "+promedio);


document.write
(
  "El importe total a pagar , bruto sin descuento  es de : "+importeTotal+"<br>"+
  "El importe total a pagar con descuento es: "+importeTotaldesc+"<br>"+
  "EL alimento mas caro es de: "+alimnetoMasCaro+"<br>"+
  "El promedio de precio por kilo en total es de: "+promedio
);


}
