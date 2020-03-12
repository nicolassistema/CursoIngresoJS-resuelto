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
var cantidad;
var fabricante;
var flagBarbijo = 0;
var precioMayorBarbijo;
var precioMayorBarbijoCantidad;
var cantidadItemMasUnidades;
var precioMayorBarbijoFabricante;
var fabricanteMasUnidades;
var cantidadTotalJabon = 0;
//Bandera Global
var contadorGeneral = 0;


for (i = 0; i < 5; i++) {

//ENTRADA
item=prompt("Por favor ingrese item");
while (!(item == "barbijo" || item == "jabon" || item == "alcohol")) 
{
  item=prompt("Por favor reingrese item");
}

cantidad=parseInt(prompt("Por favor ingrese cantidad"));
//console.log(cantidad);
while (isNaN(cantidad) || cantidad < 0 && cantidad > 1000) 
{
 // console.log(cantidad);
  cantidad=parseInt(prompt("Por favor reingrese cantidad"));
}

precio=parseInt(prompt("Por favor ingrese precio"));
//console.log(precio);
while (isNaN(precio)|| precio < 100 && precio > 300) 
{
  precio=prompt("Por favor reingrese precio");
}

fabricante=prompt("Por favor ingrese fabricante");
while (!isNaN(fabricante)) 
{
  fabricante=prompt("Por favor reingrese fabricante ");
}
//-------------------------------------------------------------------------------
//a) Del más caro de los Barbijos, la cantidad de unidades y el fabricante
if (item == "barbijo" && flagBarbijo == 0 || precio > precioMayorBarbijo) 
{
  precioMayorBarbijo =  precio;
  precioMayorBarbijoCantidad = cantidad;
  precioMayorBarbijoFabricante = fabricante;
  flagBarbijo = 1;
}
//console.log("precio barbijo "+precioMayorBarbijo);
//console.log("cantidad mayor barbijo "+precioMayorBarbijoCantidad);
//console.log("precio mayor barbijo fabricante "+precioMayorBarbijoFabricante);


//b) Del ítem con más unidades, el fabricante
if (cantidad>cantidadItemMasUnidades || contadorGeneral == 0) 
{
  cantidadItemMasUnidades = cantidad;
  fabricanteMasUnidades = fabricante;
 //console.log("item con mas unidades "+cantidadItemMasUnidades);
// console.log("nombre de fabricante con mas unidades"+fabricanteMasUnidades);
}


  //c) Cuántas unidades de jabones hay en total
if (item == "jabon") 
{
  cantidadTotalJabon = cantidadTotalJabon + cantidad;
    //console.log("cantidad de jabones en total "+cantidadTotalJabon);
}
contadorGeneral++;
}//fin del while

//Mostrar por pantalla
document.write
(
  "a) Del más caro de los Barbijos, la cantidad de unidades y el fabricante: "+"<br>"+
  "Cantidad de Unidades: "+precioMayorBarbijoCantidad+"<br>"+
  "Nombre de fabricante: "+precioMayorBarbijoFabricante+"<br>"+
  "b) Del ítem con más unidades, el fabricante: "+fabricanteMasUnidades+"<br>"+
  "c) Cuántas unidades de jabones hay en total: "+cantidadTotalJabon
);











}
