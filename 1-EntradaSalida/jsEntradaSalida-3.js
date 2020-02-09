/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{

	var nombre;

	//Esta es la estructura basica del "getElementById" y se escribe :
	//"nombre de la variable = document.getElementById("id").value;""
	nombre = document.getElementById("elNombre").value;

	alert(nombre);
}


