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
    var flag = 0; // es parte de la validacion. Es como un flag restarteable

    largo=parseFloat(document.getElementById("Largo").value);
    ancho=parseFloat(document.getElementById("Ancho").value);
  

//Validacion para campos en el front. NO DISPONIBLE PARA PROMPT POR EL MOMENTO
/*Si los campos no son numeros, entra al if informando con alert, 
luego el flag queda en 1 para no entrar en el siguiente if. Por ultimo ejecuta location.reload(true) donde
regresca la pantalla y vuelve a dejar el flag en 0, el cual si la entrada en los campos son numeros, en este caso,
 va a entrar al if de calculos para mostrar por pantalla
*/
    if (isNaN(largo) || isNaN(ancho)) {
        alert("Por favor ingresar solamente numeros en los campos 'Largo del terreno' y 'Ancho del terreno'");
       flag = 1;
        location.reload(true);
    }
    

if (flag == 0) {// Es parte de la validacion
 //-----------------------------------------------------
    superficie = largo * ancho;
    superficie = superficie.toFixed(2); 
    //console.log(superficie);
    
    cantidadAlambre = ((largo * 2) + (ancho * 2))*3;
    cantidadAlambre = cantidadAlambre.toFixed(2); 
    //console.log(cantidadAlambre);
    
    document.write("La cantidad de alambre a utilizar para una superficie rectangular de "+superficie+" m²"+" es de: "+cantidadAlambre+" Mts."+"<br>");
    
}


}

function Circulo () 
{
    
    var radio;
    var cantidadAlambre;
    var superficie;
    var flag = 0; 
    
    
    radio=parseFloat(document.getElementById("Radio").value);
    

    if (isNaN(radio)) {
        alert("Por favor ingresar solamente numeros en el campo 'Radio del terreno'");
       flag = 1;
       location.reload(true);
    }
    

    if (flag == 0) {
    //console.log(largo);
    superficie = (3.14 * radio)*(3.14 * radio);
    superficie = superficie.toFixed(2); 
    //console.log(superficie);
    
    cantidadAlambre = ((3.14 * radio)*(3.14 * radio))*3;
    cantidadAlambre = cantidadAlambre.toFixed(2); 
    //console.log(cantidadAlambre);
    
    document.write("La cantidad de alambre a utilizar para una superficie circular de "+superficie+" m²"+" es de: "+cantidadAlambre+" Mts."+"<br>");    
}


}
function Materiales () 
{
	
var largo;
var ancho;
var superficie;
var semento;
var cal;
var flag = 0;

//Entrada
largo=parseFloat(document.getElementById("Largo").value);
ancho=parseFloat(document.getElementById("Ancho").value);


if (isNaN(largo) || isNaN(ancho)) {
    alert("Por favor ingresar solamente numeros en los campos 'Largo del terreno' y 'Ancho del terreno'");
   flag = 1;
    location.reload(true);
}

if (flag == 0) {

superficie =largo * ancho;
superficie = superficie.toFixed(2); 
semento = (superficie * 2);
semento = semento.toFixed(); 
cal = (superficie * 3) ;
cal = cal.toFixed(); 



document.write("La cantidad de bolsas de cemento para una superficie rectangular de "+superficie+" m²"+" es de: "+semento+"<br>");
document.write("La cantidad de bolsas de cal para una superficie rectangular de "+superficie+" m²"+" es de: "+cal+"<br>");
}
}