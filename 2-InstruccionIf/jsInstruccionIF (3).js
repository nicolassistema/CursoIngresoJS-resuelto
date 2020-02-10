function mostrar()
{
    var numeroEdad;

    numeroEdad=parseInt(document.getElementById("edad").value);

    if (numeroEdad>=18) {
        alert("Es mayor de edad");
    }else{

        alert("Es menor de edad");
    }



}//FIN DE LA FUNCIÓN