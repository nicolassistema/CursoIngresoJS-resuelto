function mostrar()
{
/*
var sexo = prompt("ingrese f ó m .");


while (sexo != "f" && sexo != "m") {
    
    alert("El sexo es incorrecto, por favor ingrese f o m")
    sexo = prompt("ingrese f ó m .");
}

   document.getElementById('Sexo').value=sexo;

*/
   //Hacer esto mientras se cumple la condicion
do {

    var sexo = prompt("Ingrese f o m");
    sexo = sexo.toLocaleLowerCase();
    
} while (sexo != "f" && sexo != "m");


document.getElementById('Sexo').value=sexo;






}//FIN DE LA FUNCIÓN