/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

var largo;
var ancho;
var cantidadAlambre;
var superficie;


//Entrada
largo=parseFloat(document.getElementById("Largo").value);
ancho=parseFloat(document.getElementById("Ancho").value);
superficie = largo * ancho;
superficie = superficie.toFixed(2); 
//console.log(superficie);

cantidadAlambre = ((largo * 2) + (ancho * 2))*3;
cantidadAlambre = cantidadAlambre.toFixed(2); 
//console.log(cantidadAlambre);

document.write("La cantidad de alambre a utilizar para una superficie rectangular de "+superficie+" m²"+" es de: "+cantidadAlambre+" Mts."+"<br>");


}

function Circulo () 
{
    
    var radio;
    var cantidadAlambre;
    var superficie;
    
    
    radio=parseFloat(document.getElementById("Radio").value);
    //console.log(largo);
    superficie = (3.14 * radio)*(3.14 * radio);
    superficie = superficie.toFixed(2); 
    //console.log(superficie);
    
    cantidadAlambre = ((3.14 * radio)*(3.14 * radio))*3;
    cantidadAlambre = cantidadAlambre.toFixed(2); 
    //console.log(cantidadAlambre);
    
    document.write("La cantidad de alambre a utilizar para una superficie circular de "+superficie+" m²"+" es de: "+cantidadAlambre+" Mts."+"<br>");    



}
function Materiales () 
{
	
var largo;
var ancho;
var superficie;
var semento;
var cal;

//Entrada
largo=parseFloat(document.getElementById("Largo").value);
ancho=parseFloat(document.getElementById("Ancho").value);

//Formula
superficie =largo * ancho;
//Dejo dos decimales
superficie = superficie.toFixed(2); 
semento = (superficie * 2);
//console.log("semento "+semento);
semento = semento.toFixed(); 
//.log("con el redondeo "+semento);
cal = (superficie * 3) ;
cal = cal.toFixed(); 



document.write("La cantidad de bolsas de cemento para una superficie rectangular de "+superficie+" m²"+" es de: "+semento+"<br>");
document.write("La cantidad de bolsas de cal para una superficie rectangular de "+superficie+" m²"+" es de: "+cal+"<br>");

}