function mostrar()
{

    var numeroEdad;
    
    numeroEdad=parseInt(document.getElementById("edad").value);


    //agregar operador && que significa "AND" para condicionar rangos numericos
    //otra manera de escribirlo  (!(numeroEdad<13 || numeroEdad>17))
    if (numeroEdad>=13 && numeroEdad<=17) {
        alert("Es adolecente");
    }
        
   






}//FIN DE LA FUNCIÓN