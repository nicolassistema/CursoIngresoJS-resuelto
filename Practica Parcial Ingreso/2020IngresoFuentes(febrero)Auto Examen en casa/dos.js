/*
Realizar el algoritmo que permita ingresar los datos de una compra de ingredientes para preparar
 comida al por mayor , hasta que el cliente quiera:
peso (entre 10 y 1000)en kilo,
precio por kilo (más de cero ),
tipo validad("v";"a";"m")(vegetal,animal o mezcla )
Si compro más de 100 kilos en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 300 kilos en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo de alimento más caro.
f) El promedio de precio por kilo en total.
*/


function mostrar()
{
  alert("dos");

var alimento;
var peso;
var importe;
var respuesta;
var importeTotalAPagar = 0;
var tipoAlimentoMasCaro = 0;
var promedio;
var kiloAcumulado = 0;
var alimentMasCaro = 0;





do {
  
	alimento=prompt("Por favor ingresar el alimento solicitado: 'v' para vegetal, 'a' para animal o 'm' para mezcla");
	while (!(alimento=="v"||alimento=="m"||alimento=="a")) {
		alimento=prompt("Por favor volver ingresar el alimento solicitado: 'v' para vegetal, 'a' para animal o 'm' para mezcla");
	}



  
	peso=prompt("Por favor ingresar peso. Minimo 100 y maximo 300");
	peso = parseInt(peso);
	while (isNaN(peso) || peso < 10 || peso > 1000) {
		peso=prompt("Por favor volver a ingresar peso. Minimo 100 y maximo 300");
		peso = parseInt(peso);
	}

	importe=prompt("Por favor ingresar importe por kilo");
	importe = parseInt(importe);
	while (isNaN(importe) || importe < 1) {
		importe=prompt("Por favor volver a ingresar importe por kilo");
		importe = parseInt(importe);
	}


//d) Informar el tipo de alimento más caro.
if (importe>alimentMasCaro) {
	alimentMasCaro = importe;
	tipoAlimentoMasCaro = alimento;

}

//f) El promedio de precio por kilo en total.
kiloAcumulado = kiloAcumulado + peso;





//a) El importe total a pagar , bruto sin descuento y...
importeTotalAPagar = importeTotalAPagar + importe;






respuesta=prompt("Por favor pulsar 's' para continuar o 'n' para salir");
while (!(respuesta == "s" || respuesta == "n")) {
  respuesta=prompt("Por favor volver a pulsar 's' para continuar o 'n' para salir");
}


} while (respuesta != "n");



//Si compro más de 100 kilos en total tenes 15% de descuento sobre el total a pagar.
//Si compro más de 300 kilos en total tenes 25% de descuento sobre el total a pagar.
//b) el importe total a pagar con descuento(solo si corresponde)



document.write("a) El importe total a pagar , bruto sin descuento es de: "+importeTotalAPagar+"<br>");

if (kiloAcumulado > 100 && kiloAcumulado < 301) {
	document.write("El importe total a pagar con descuento de 15 % es de: "+(importeTotalAPagar -= importeTotalAPagar*0.15)+"<br>");
}else if (kiloAcumulado > 300){
	document.write("El importe total a pagar con descuento de 25 % es de: "+(importeTotalAPagar -= importeTotalAPagar*0.25)+"<br>");
}

promedio=importeTotalAPagar/kiloAcumulado;
document.write("El tipo de alimento mas caro es : "+tipoAlimentoMasCaro);







  }
