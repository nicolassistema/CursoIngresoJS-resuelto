/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numeroUno;
    var numeroDos;

    numeroUno = parseFloat(document.getElementById("numeroUno").value);
    numeroDos = parseFloat(document.getElementById("numeroDos").value);
    alert("la suma es :"+numeroUno+numeroDos);
	
}

function restar()
{
    var numeroUno;
    var numeroDos;

    numeroUno = parseFloat(document.getElementById("numeroUno").value);
    numeroDos = parseFloat(document.getElementById("numeroDos").value);
    alert("la resta es :"+numeroUno-numeroDos);
}

function multiplicar()
{ 
    var numeroUno;
    var numeroDos;

    numeroUno = parseFloat(document.getElementById("numeroUno").value);
    numeroDos = parseFloat(document.getElementById("numeroDos").value);
    alert("la multiplicacion es :"+numeroUno*numeroDos);
}

function dividir()
{
    var numeroUno;
    var numeroDos;

    numeroUno = parseFloat(document.getElementById("numeroUno").value);
    numeroDos = parseFloat(document.getElementById("numeroDos").value);
    alert("la division es :"+numeroUno/numeroDos);
}


    

