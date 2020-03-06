/*
Realizar el algoritmo que permita ingresar la marca del producto, 
el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.
*/
function mostrar()
{

   //ENTRADA
    var marca;
    var producto;
    var temperatura;
    var peso;
    var contadorPar = 0;
    var contadorProd=0;
    var contadorProd2 = 0;
    var acumuladorProd= 0;
    var acumuladorPeso = 0;
    var seguir;
    var flag = 0;
    var flag1 = 0;
    var maxiPeso;
    var maxiProducto;
    var maxiMarca;
    var promedio;
    var minPeso;




    do {


producto = prompt("Ingresar producto");
while (!( producto != isNaN(producto))) {
    producto = prompt("Por favor ingresar  el producto");
} 

marca = prompt("ingresar marca");
while (!( marca != isNaN(marca))) {
    marca = prompt("Por favor ingresar la marca del producto");
} 

temperatura = prompt("Ingresar temperatura");
temperatura = parseInt(temperatura);
while (!(temperatura >= -30 && temperatura <= 30 && temperatura != isNaN(temperatura))) {
temperatura = prompt("Por favor ingresar entre -30 y 30 grados");
} 


peso = prompt("Ingresar peso del producto");
peso = parseInt(peso);
while (!(peso >= 0 && peso <= 100 && peso != isNaN(peso))) {
    peso = prompt("Por favor ingresar peso entre 1 y 100");
} 



//1)
if (temperatura%2==0) {
    contadorPar++;
}
console.log("Contador de pares: "+contadorPar);
//-------------------------------------------------------------------------------------



//b) La marca del producto más pesado
if (flag1 == 0 || peso > maxiPeso) {
    maxiPeso = peso;
    maxiProducto = producto;
    maxiMarca = marca;
    console.log("marcaMaxi "+maxiMarca);
    //flag = 1;
}

//-------------------------------------------------------------------------

//c) La cantidad de productos que se conservan a menos de 0 grados.

if (temperatura <= 0) {
    contadorProd++;
    
}

//------------------------------------------------------------------------
//d) El promedio del peso de todos los productos.

acumuladorProd = parseInt(acumuladorProd);
contadorProd2 = parseInt(contadorProd2);
acumuladorPeso = acumuladorPeso+peso;
contadorProd2++;

//console.log("peso acumulado"+acumuladorPeso);
//console.log("contador de prod: "+contadorProd2);



//-------------------------------------------------------------------------
//f) El peso máximo y el mínimo.



    //flag = 1;
if (flag1 == 0 || peso < minPeso) {
    minPeso = peso;
    console.log("peso: "+peso);
    console.log("minPeso: "+minPeso);
    flag1 = 1;
    
}


//------------------------------------------------------------------------------------
seguir = prompt("Desea seguir? pulsar 's' para seguir, pulsar 'n' para finlaizar");
while (!(seguir == "n"|| seguir == "s")) {
    seguir = prompt("Desea seguir? pulsar 's' para seguir, pulsar 'n' para finlaizar"); 
}


    } while (seguir != "n");


    
    document.write("La cantidad de temperaturas pares es "+contadorPar+"<br>");

    document.write("La marca del producto más pesado "+maxiMarca+"<br>");

    document.write("La cantidad de productos que se conservan a menos de 0 grados es "+contadorProd+"<br>");
   promedio=acumuladorPeso/contadorProd2;
   
   document.write("El promedio del peso de todos los productos es "+promedio.toFixed(2)+"<br>");



   document.write("peso maximo: "+maxiPeso+"<br>"+"peso minimo: "+minPeso+"<br>"
);










}
