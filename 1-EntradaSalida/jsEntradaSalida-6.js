/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

    //var numeroUno;
    //var numeroDos;

    //numeroUno = parseInt(document.getElementById("numeroUno").value);
    //numeroDos = parseInt(document.getElementById("numeroDos").value);
    //alert(numeroUno+numeroDos);
    


    var numeroUno;
    var numeroDos;
    var numeroDosParseado;
    var resultado;

    numeroUno = parseInt(document.getElementById("numeroUno").value);
    numeroDos = document.getElementById("numeroDos").value;
    numeroDosParseado=parseInt(numeroDos);
   resultado = numeroUno + numeroDosParseado;
    alert(resultado);
    







}

