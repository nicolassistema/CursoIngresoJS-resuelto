/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los Barbijos, la cantidad de unidades y el fabricante
b) Del ítem con más unidades, el fabricante
c) Cuántas unidades de jabones hay en total

*/
function mostrar()
{
	alert("uno");

	var item; 
	var precio;
	var cantidad;
	var fabricante;
	var i = 0;


	while (i<1) {

		
		item = prompt("Por favor ingrese alguno de lo siguientes items: 'barbijo', 'jabón' o 'alcohol'");
		while (!(item == "barbijo" || item == "jabon" || item == "alcohol")) {
			item = prompt("Por favor volver a ingresar alguno de lo siguientes items: 'barbijo', 'jabón' o 'alcohol'");
		}
		

		precio = prompt("Por favor ingrese precio del item entre 100 y 300");
		precio = parseInt(precio);
		while (isNaN(precio) || precio < 100 || precio > 300) {
			precio = prompt("Por favor volver a ingresar precio del item entre 100 y 300");
			precio = parseInt(precio);
		}


		cantidad = prompt("Por favor ingrese cantidad que no supere las mil unidades");
		cantidad = parseInt(cantidad);
		while (isNaN(cantidad) || cantidad < 0 || cantidad > 1000) {
			cantidad = prompt("Por favor volver a ingresar cantidad que no supere las mil unidades");
			cantidad = parseInt(cantidad);
		}
		

		fabricante = prompt("Por favor ingrese el fabricante");
		while (!isNaN(fabricante) ) {
			fabricante = prompt("Por favor volver a ingresar el fabricante");
		}








		i++;
	}






}
