/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

//numeroUno
//numeroDos

var primerNumero;
var segundoNumero;
var resultado;

//En este casp el parseInt se ingresa de la siguiente manera:
//nombreVariable = parseInt(document.getElementById("id").value);

primerNumero = parseInt(document.getElementById("numeroUno").value);

segundoNumero = parseInt(document.getElementById("numeroDos").value);


resultado =  primerNumero + segundoNumero;


alert("El total de la sume es: "+resultado); 








}

