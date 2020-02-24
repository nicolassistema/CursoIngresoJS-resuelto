/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
	//alert(numeroSecreto );
  contadorIntentos = 0;
  console.log("contador de reintentos restarteado: "+contadorIntentos);


	numeroSecreto = Math.floor(Math.random()*100 )+ 1;
  numeroSecreto = parseInt(numeroSecreto);
  console.log("numero secreto: "+numeroSecreto);
  alert("El numero secreto ya se genero. Por favor ingrese un numero y pulse 'Verificar' para saber si adivino el numero secreto");
  


}

function verificar()
{




//Variables
var numeroEntrada;
var flag = 0;
var flag2 = 0;
console.log("numero secreto: "+numeroSecreto);
//Entrada
numeroEntrada=parseInt(document.getElementById("numero").value);
console.log("numero secreto: "+numeroEntrada);

if (isNaN(numeroEntrada)) {
  alert("Por favor ingresar un numero en el campo 'Ingrese numero'");
 flag2 = 1;
 //location.reload(true);
}






if ((numeroEntrada == numeroSecreto)&& (!(isNaN(cantidad)))) {
  alert("Usted es un ganador!!! y en solo X intentos.");
}else if (numeroEntrada < numeroSecreto){
  alert("Perdiste, te falta x para llegar al número secreto" );
}else if(numeroEntrada > numeroSecreto){
alert("Perdiste, te pasaste x para llegar al número secreto " );
}

contadorIntentos ++;

console.log("Cantidad de intentos: "+contadorIntentos);

document.getElementById('intentos').value=contadorIntentos;





  

	
}