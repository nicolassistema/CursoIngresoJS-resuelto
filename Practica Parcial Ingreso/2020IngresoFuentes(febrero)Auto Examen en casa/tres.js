/*
En el ingreso a un viaje en crucero nos solicitan nombre , 
edad(mayores de 18), sexo("f" o "m") y estado civil("soltero", "casado" o "viudo");
a) El nombre del hombre casado más joven.
b) El sexo y nombre del pasajero/a más viejo.
c) La cantidad de mujeres que hay casadas o viudas.
d) El promedio de edad entre las mujeres.
e) El promedio de edad entre los hombres solteros.

*/
function mostrar()
{
	alert("tres");

var respuesta;
var nombre;
var edad;
var sexo;
var estadoCivil;
var edadMujeres = 0;
var promedioF;
var promedioM;
var nombrePersonaMasVieja;
var edadPersonaMasVieja = 0;
var nombreEdadHombreJoben;
var edadHombreJoben = 0;
var cantidadHombres = 0;
var edadHombres = 0;
var sexoPersonaMasVieja;
var cantidadMujeres = 0;
var cantidadMujeresTotal = 0;



do {
	
	nombre=prompt("Por favor ingresar nombre");
	while (nombre==false) {
		nombre=prompt("Por favor volver a ingresar nombre");
	}


	sexo=prompt("Por favor ingresar el sexo: 'm' para masculino, 'f' para femenino");
	while (!(sexo=="f"||sexo=="m")) {
		sexo=prompt("Por favor vovler ingresar el sexo: 'm' para masculino, 'f' para femenino");
	}
	
	edad=prompt("Por favor ingresar edad (Mayor de 18 años)");
	edad = parseInt(edad);
	while (isNaN(edad) || edad < 17) {
		edad=prompt("Por favor volver aingresar edad (Mayor de 18 años)");
		edad = parseInt(edad);
	}


	estadoCivil=prompt("Por favor ingresar el estado civil('soltero', 'casado' o 'viudo')");
	while (!(estadoCivil=="soltero"||estadoCivil=="casado"||estadoCivil=="viudo")) {
		estadoCivil=prompt("Por favor volver a ingresar el estado civil('soltero', 'casado' o 'viudo')");
	}


	//a) El nombre del hombre casado más joven.

	if (edad < edadHombreJoben && sexo == "m" && estadoCivil == "casado" || cantidadHombres == 0) 
	{
		edadHombreJoben = edad;
		nombreEdadHombreJoben = nombre;

		console.log(nombre);
		console.log(nombreEdadHombreJoben);
				
	}

	//b) El sexo y nombre del pasajero/a más viejo.

	if (edad > edadPersonaMasVieja) 
	{

		edadPersonaMasVieja = edad;
		nombrePersonaMasVieja = nombre;
		sexoPersonaMasVieja = sexo;
	

	}

	//c) La cantidad de mujeres que hay casadas o viudas.

	if (sexo == "f" && (estadoCivil == "viudo" || estadoCivil == "casado")) 
	{
		cantidadMujeres++;
	
				
	}


	if (sexo == "m") {
		cantidadHombres++;
		edadHombres = edadHombres + edad;
	}


if (sexo=="f") {
	edadMujeres = edadMujeres + edad;
	cantidadMujeresTotal++;
}










	respuesta=prompt("Por favor pulsar 's' para continuar o 'n' para salir");
	while (!(respuesta == "s" || respuesta == "n")) {
	  respuesta=prompt("Por favor volver a pulsar 's' para continuar o 'n' para salir");
	}
	
	
	} while (respuesta != "n");




promedioF = edadMujeres/cantidadMujeresTotal;

promedioM = edadHombres / cantidadHombres;

document.write(
		"El nombre del hombre casado más joven: "+nombreEdadHombreJoben+"<br>"+
		"El sexo y nombre del pasajero/a más viejo: "+"<br>"+
		"Nombre: "+nombrePersonaMasVieja+"<br>"+
		"Sexo: "+sexoPersonaMasVieja+"<br>"+
		"La cantidad de mujeres que hay casadas o viudas: "+cantidadMujeres+"<br>"+
		"El promedio de edad entre las mujeres. "+promedioF+"<br>"+
		"El promedio de edad entre las hombres. "+promedioM
	
	
	
	);

}
