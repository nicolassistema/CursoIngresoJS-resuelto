function mostrar()
{

var numeroEdad;
var opcion;

numeroEdad=parseInt(document.getElementById("edad").value);

opcion = (document.getElementById("estadoCivil").value);


if  (numeroEdad<18)
	{
		if(opcion != "Soltero")
		{
			alert( "es muy pequeño para no ser soltero");
		}
	}
	


}//FIN DE LA FUNCIÓN