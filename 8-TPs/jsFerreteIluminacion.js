/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    
var cantidad;
var precio = 35;
var marca;
var iibb;
var porcentaje;

//primer entrada de datos
cantidad=parseInt(document.getElementById("Cantidad").value);
marca = (document.getElementById("Marca").value);




//Calculos matematicos
if (cantidad >= 6) {
    console.log(precio);
    precio = (precio*cantidad);
    console.log(precio);
    precio -= precio * 0.50;
    console.log(precio);
}else if (cantidad == 5 && marca == "ArgentinaLuz") {
    precio = (precio*cantidad);
    precio -= precio * 0.40;  
}else if (cantidad == 5 && marca != "ArgentinaLuz") {
    precio = (precio*cantidad);
    precio -= precio * 0.30; 
}else if (cantidad == 4 && (marca == "ArgentinaLuz" || marca == "FelipeLamparas") ) {
    precio = (precio*cantidad);
    precio -= precio * 0.25; 
}else if (cantidad == 4 && (marca != "ArgentinaLuz" || marca != "FelipeLamparas")) {
    precio = (precio*cantidad);
    precio -= precio * 0.20; 
}else if (cantidad == 3 && marca == "ArgentinaLuz") {
    precio = (precio*cantidad);
    precio -= precio * 0.15; 
}else if (cantidad == 3 && marca == "FelipeLamparas") {
    precio = (precio*cantidad);
    precio -= precio * 0.10;
}else if (cantidad == 3 && (marca != "ArgentinaLuz" || marca != "FelipeLamparas")) {
    precio = (precio*cantidad);
    precio -= precio * 0.05; 
}else{
    precio = (precio*cantidad);
  }       
  
if (precio <= 120) {
    document.getElementById("precioDescuento").value = precio;
}else{
    iibb = (precio*10)/100;
    porcentaje = iibb;
    precio = precio + iibb;
    document.getElementById("precioDescuento").value = precio;
    alert("Usted pago "+porcentaje+" de IIBB.");
}
  



//Salida



    



    



}
