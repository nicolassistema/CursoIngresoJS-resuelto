/*
Realizar el algoritmo que permita ingresar los datos de una compra de 
ingredientes para preparar comida al por mayor , hasta que el cliente quiera:
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

var tipoAlimento;
var peso;
var importe;
var respuesta;





do {
  

  tipoAlimento = prompt("Por favor ingrese alguno de lo siguientes tipo de alimentos: 'v' para vegetal, 'a' para aninal o 'm' para mezcla");
  while (!(tipoAlimento == "v" || tipoAlimento == "a" || tipoAlimento == "m")) {
    tipoAlimento = prompt("Por favor volver a ingresar alguno de lo siguientes tipo de alimentos: 'v' para vegetal, 'a' para aninal o 'm' para mezcla");
  }
  

  peso = prompt("Por favor ingrese peso del alimento entre 10 y 1000");
  peso = parseInt(peso);
  while (isNaN(peso) || peso < 10 || peso > 1000) {
    peso = prompt("Por favor volver a ingresar peso del alimento entre 10 y 1000");
    peso = parseInt(peso);
  }

  importe = prompt("Por favor ingrese importe x kilo del alimento ");
  importe = parseInt(importe);
  while (isNaN(importe) || importe < 0) {
    importe = prompt("Por favor volver a ingresar importe x kilo del alimento ");
    importe = parseInt(importe);
  }










respuesta=prompt("Por favor pulsar 's' para continuar o 'n' para salir");
	while (!(respuesta == "s" || respuesta == "n")) {
	  respuesta=prompt("Por favor volver a pulsar 's' para continuar o 'n' para salir");
	}



} while (respuesta != "n");






}
