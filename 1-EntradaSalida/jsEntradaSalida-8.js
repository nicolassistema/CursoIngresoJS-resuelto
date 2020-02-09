/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    
    //numeroDividendo
    //numeroDivisor


    var primerNumero;
    var segundoNumero;
    var rasultado;


    primerNumero=parseInt(document.getElementById("numeroDividendo").value);
    segundoNumero=parseInt(document.getElementById("numeroDivisor").value);
    //Para calcular el resto se hace de la siguiente manera:
    //dividendo%divisor
    resultado=primerNumero%segundoNumero;
    alert("El resto de la division es: "+resultado); 






}
