/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

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

var miTemporizador;

//Set de caminos para mensajes + validacion
if ((numeroEntrada == numeroSecreto) && (!(isNaN(contadorIntentos)))){

switch (contadorIntentos) {
	case 1:
		document.getElementById('intentos').value=contadorIntentos;
		alert("Usten lo hizo en "+contadorIntentos+"intento. Usted es un Psíquico");
		location.reload(true);
		break;
	case 2:
		document.getElementById('intentos').value=contadorIntentos;
		alert("Usten lo hizo en "+contadorIntentos+" intentos. excelente percepción");
		location.reload(true);
		break;
	case 3:
		document.getElementById('intentos').value=contadorIntentos;
		alert("Usten lo hizo en "+contadorIntentos+" intentos. es suerte");
		location.reload(true);
		break;
	case 4:
		document.getElementById('intentos').value=contadorIntentos;
		alert("Usten lo hizo en "+contadorIntentos+" intentos. Excelente técnica");
		location.reload(true);
		break;
	case 5:
		document.getElementById('intentos').value=contadorIntentos;
		alert("Usten lo hizo en "+contadorIntentos+" intentos. usted está en la media");
		location.reload(true);
		break;
	case 6:
	case 7:
	case 8:
	case 9:
	case 10:
		document.getElementById('intentos').value=contadorIntentos;
		alert("Usten lo hizo en "+contadorIntentos+" intentos. falta técnica");
		location.reload(true);
		break;

	default:
		document.getElementById('intentos').value=contadorIntentos;
		alert("Usten lo hizo en "+contadorIntentos+" intentos. afortunado en el amor!!");
		location.reload(true);
		break;
}
}






	
	

}