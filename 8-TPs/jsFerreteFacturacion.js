/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var numeroUno;
    var numeroDos;
    var numeroTres;
    var resultado;

    numeroUno = parseFloat(document.getElementById("PrecioUno").value);
    numeroDos = parseFloat(document.getElementById("PrecioDos").value);
    numeroTres = parseFloat(document.getElementById("PrecioTres").value);
    resultado = numeroUno + numeroDos + numeroTres
    alert("la suma es :"+resultado  );
}
function Promedio () 
{
    var numeroUno;
    var numeroDos;
    var numeroTres;
    var resultado;

    numeroUno = parseFloat(document.getElementById("PrecioUno").value);
    numeroDos = parseFloat(document.getElementById("PrecioDos").value);
    numeroTres = parseFloat(document.getElementById("PrecioTres").value);
    resultado = ((numeroUno + numeroDos + numeroTres)/3)
    alert("El promedio es :"+resultado  );	
}
function PrecioFinal () 
{
    var numeroUno;
    var numeroDos;
    var numeroTres;
    var resultado;

    numeroUno = parseFloat(document.getElementById("PrecioUno").value);
    numeroDos = parseFloat(document.getElementById("PrecioDos").value);
    numeroTres = parseFloat(document.getElementById("PrecioTres").value);
    resultado = numeroUno + numeroDos + numeroTres
    resultado = resultado + resultado *1;
    alert("la suma es :"+resultado  );	
}