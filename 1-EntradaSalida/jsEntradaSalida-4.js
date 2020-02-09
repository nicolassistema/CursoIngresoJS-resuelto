/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{

	var nombre;


	nombre = prompt("Ingrese nombre");

	//para mostrar variable por id, el getElementById va de la siguiente manera:
	//document.getElementById("id").value = nombreDeLaVariable;

	document.getElementById("elNombre").value = nombre;


}

