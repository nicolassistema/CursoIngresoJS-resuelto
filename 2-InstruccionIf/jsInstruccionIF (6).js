function mostrar()
{
//tomo la edad  

var numeroEdad;

numeroEdad=parseInt(document.getElementById("edad").value);

if (numeroEdad>=18) {
    alert("La persona es mayor de edad");
} else if (numeroEdad>12 && numeroEdad<18 ) {
    alert("La persona es adolescente");
}else if (numeroEdad<13) {
    alert("La persona es niño");
}







}//FIN DE LA FUNCIÓN