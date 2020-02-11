function mostrar()
{
    var numeroEdad;
/*
    numeroEdad=parseInt(document.getElementById("edad").value);

    if (numeroEdad>=18) {
        alert("Es mayor de edad");
    }else{

        alert("Es menor de edad");
    }
*/

    numeroEdad= parseInt(document.getElementById("edad").value);
	alert(estadoCivil);
	if  (numeroEdad>=18)
	{
		if(numeroEdad<18)
		{
			alert( "Es menor de edad");
		}
	}
	alert( "Es mayor de edad");




}//FIN DE LA FUNCIÓN