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

function Rumeros(string){//Solo numeros
  var out = '';
  var filtro = '1234567890';//Caracteres validos

  //Recorrer el texto y verificar si el caracter se encuentra en la lista de validos 
  for (var i=0; i<string.length; i++)
     if (filtro.indexOf(string.charAt(i)) != -1) 
           //Se añaden a la salida los caracteres validos
     out += string.charAt(i);

  //Retornar valor filtrado
  return out;
} 

function comenzar()
{
  //variables
  var numeroEntrada;
  
  //Restart de campos "contador" y de "entrada"
  contadorIntentos = "";
  numeroEntrada = "";
  document.getElementById('intentos').value=contadorIntentos;
  document.getElementById('numero').value=numeroEntrada;


	//inicializar variable
  contadorIntentos = 0;
  console.log("contador de reintentos restarteado: "+contadorIntentos);

 //Genero el número RANDOM entre 1 y 100
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
var pasar;
var faltar;

console.log("numero secreto: "+numeroSecreto);
//Entrada
numeroEntrada=parseInt(document.getElementById("numero").value);
console.log("numero entrada: "+numeroEntrada);
console.log("contador de intentos: "+contadorIntentos);




//--------------------------------------------------------------------------------------------
//validaciones de acceso por primera vez pulsando boton verificar,con o sin datos en la entradacon
// refrescar pantalla
if (isNaN(numeroEntrada) && isNaN(numeroSecreto) && isNaN(contadorIntentos)) {
  alert("Por favor ingresar un numero en el campo 'Ingrese numero'");

 location.reload(true);
}else if (!(isNaN(numeroEntrada)) && (isNaN(numeroSecreto))){
  alert("Por favor pulse primero el boton 'Comenzar'");

  location.reload(true);
}else if (isNaN(numeroEntrada) && !isNaN(numeroSecreto) && contadorIntentos == 0) {
  alert("Por favor ingresar un numero en el campo 'Ingrese numero'");

// location.reload(true);
}
//--------------------------------------------------------------------------------------------
//Validacion en caso de pulsar 'verificar' con dato != de integer (numeros)
while (
  (isNaN(numeroEntrada) && contadorIntentos > 0) && flag == 0 )
{
alert("Por favor ingresar un numero en el campo 'Ingrese numero'");
flag = 1;
numeroEntrada=parseInt(document.getElementById("numero").value);
}
//--------------------------------------------------------------------------------------------
//Variable de incrementalidad
if (!isNaN(numeroEntrada)) {
  contadorIntentos ++;
console.log("Cantidad de intentos: "+contadorIntentos);
document.getElementById('intentos').value=contadorIntentos;
}


//Set de caminos para mensajes + validacion
if ((numeroEntrada == numeroSecreto) && (!(isNaN(contadorIntentos)))){
  alert("Usted es un ganador!!! y en solo " + contadorIntentos +" intentos.");
  location.reload(true);
}else if (numeroEntrada < numeroSecreto){
  alert("Perdiste, te falta para llegar al número secreto" );
}else if(numeroEntrada > numeroSecreto){
alert("Perdiste, te pasaste para llegar al número secreto " );
}


//Validacion para que no se incremente en caso de que el campo de entrada sea != integer (numeros)



 	
}