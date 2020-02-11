function mostrar()
{
var numeroEdad;
var opcion;

numeroEdad=parseInt(document.getElementById("edad").value) ;
opcion=document.getElementById("estadoCivil").value ;


if (numeroEdad < 18 && opcion != "Soltero") {
    
}else if (opcion == "Soltero" && numeroEdad >= 18) {
 alert("Es soltero y no es menor");

}



	


}//FIN DE LA FUNCIÓN