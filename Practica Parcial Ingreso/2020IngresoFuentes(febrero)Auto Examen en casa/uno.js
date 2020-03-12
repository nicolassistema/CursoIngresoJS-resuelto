
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
var i = 0;
var item;
var precio;
var cantidad;
var fabricante;
var precioBarbijoMasCaro = 0;
var cantidadMasCaraBarbijo;
var itemConMasUnidades = 0;
var itemConMasUnidadesFabricante;
var cantidadJabonEntotal = 0;
var barbijoMasCaroFabricante;



while (i<2) {
	
	item=prompt("Por favor ingresar el item solicitado: 'barbijo', 'jabon' o 'alcohol'");
	while (!(item=="barbijo"||item=="jabon"||item=="alcohol")) {
		item=prompt("Por favor volver a ingresar el item solicitado: 'barbijo', 'jabon' o 'alcohol'");
	}
	


	precio=prompt("Por favor ingresar precio. Minimo 100 y maximo 300");
	precio = parseInt(precio);
	while (isNaN(precio) || precio < 100 || precio > 300) {
		precio=prompt("Por favor volver a ingresar precio. Minimo 100 y maximo 300");
		precio = parseInt(precio);
	}


	cantidad=prompt("Por favor ingresar cantidad. No puede usperar la 1000 unidades");
	cantidad = parseInt(cantidad);
	while (isNaN(cantidad) || cantidad < 1 || cantidad > 1000 ) {
		cantidad=prompt("Por favor volver a ingresar cantidad.  No puede usperar la 1000 unidades");
		cantidad = parseInt(cantidad);
	}

	fabricante=prompt("Por favor ingresar fabricante");
	while (fabricante==false) {
		fabricante=prompt("Por favor volver a ingresar fabricante");
	}
	


	//a) Del más caro de los Barbijos, la cantidad de unidades y el fabricante
	if (precio > precioBarbijoMasCaro && item == "barbijo") 
	{
		precioBarbijoMasCaro = precio;
		barbijoMasCaroFabricante = fabricante;
		cantidadMasCaraBarbijo = cantidad;
	}



	 //b) Del ítem con más unidades, el fabricante
	 if (cantidad > itemConMasUnidades) 
	 {
		 itemConMasUnidades = cantidad;
		 itemConMasUnidadesFabricante = fabricante;
		 console.log(fabricante);
		 console.log(itemConMasUnidadesFabricante);
		 

	 }


	 //c) Cuántas unidades de jabones hay en total
	 if (item == "jabon") {
		 cantidadJabonEntotal = cantidadJabonEntotal + cantidad;
	 }

	 i++;

}

document.write(
	"La cantidad de unidades y el fabricante del más caro de los Barbijos: "+"<br>"+
	"Fabricante: "+barbijoMasCaroFabricante+"<br>"+
	"Cantidad: "+cantidadMasCaraBarbijo+"<br>"+
	"El fabricante con mas unidades es: "+itemConMasUnidadesFabricante+"<br>"+
	"En total hay "+cantidadJabonEntotal+" Unidades de jabon"



);






}
