/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    
    var numeroImporte;

    numeroImporte=parseInt(document.getElementById("importe").value);

    numeroImporte -= numeroImporte * 0.25;
    
    document.getElementById("resultado").value = numeroImporte;






}
