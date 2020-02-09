/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{

//var nombre = prompt("ingrese su nombre");
//document.getElementById("elNombre").value = nombre; 

//declaro variable
var nombre;

//asigno variable
nombre = prompt("ingrese su nombre");

//asigno variable al id
document.getElementById("elNombre").value = nombre; 

}

