/*
Enunciado:
Bienvenidos.
En el ingreso a un viaje en crucero nos solicitan nombre , edad(mayores de 18), sexo("f" o "m")
 y estado civil("soltero", "casado" o "viudo");
a) El nombre del hombre casado más joven.
b) El sexo y nombre del pasajero/a más viejo.
c) La cantidad de mujeres que hay casadas o viudas.
d) El promedio de edad entre las mujeres.
e) El promedio de edad entre los hombres solteros.

*/

function mostrar()
{

  alert("tres");

var nombre;
var edad;
var sexo;
var estadoCivil;
var edadJoven;
var nombreM;
var respuesta;
var edadViejo;
var sexoViejo;
var contadorMujerCasadasViudas = 0;
var acumuladorEdadMujer = 0;
var promedioMujer;
var contadorMujer2 = 0;
var contadorHombreSoltero = 0;//contador general para setear en != 0 a los flags
var acumuladorEdadHombre = 0;
var promedioHombreSoltero;



do {


nombre = prompt("Por favor ingrese el nombre");
while (!isNaN(nombre)) 
{
  nombre = prompt("Por favor reingrese el nombre");
}


edad=prompt("Por favor ingrese edad (mayores de 18)");
edad=parseInt(edad);
while (isNaN(edad) || edad < 18)
{
  edad=parseInt(prompt("Por favor reingrese edad (mayores de 18)"));
}


sexo = prompt("Por favor ingrese sexo 'f' o 'm'");
while (sexo != "f" && sexo != "m") 
{
  sexo = prompt("Por favor reingrese sexo 'f' o 'm'");
}


estadoCivil = prompt("Por favor ingrese el estado civil");
while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo") 
{
  estadoCivil = prompt("Por favor reingrese el estado civil");
}


//a) El nombre del hombre casado más joven.
if ((estadoCivil == "casado" && sexo == "m" && edad < edadJoven)||contadorHombreSoltero == 0 ) 
{
  edadJoven = edad;
  nombreM = nombre;
  //console.log("edad mas joven "+ edadJoven);
  //console.log("nombre del mas joven "+ nombreM);
}


//b) El sexo y nombre del pasajero/a más viejo.
if (edad>edadViejo||contadorHombreSoltero == 0 ) 
{
  edadViejo = edad;
  nombreViejo = nombre;
  sexoViejo=sexo;
//  console.log("edad mas viejo "+ edadViejo);
 // console.log("nombre del mas viejo "+ nombreViejo);
  //console.log("sexo del mas viejo "+ sexoViejo);
}


//c) La cantidad de mujeres que hay casadas o viudas.
if (sexo == "f" && estadoCivil == "casado" || estadoCivil =="viudo") 
{
  contadorMujerCasadasViudas++;
  // console.log("cantidad de mujeres "+ contadorMujerCasadasViudas);
}


//d) El promedio de edad entre las mujeres.
if (sexo == "f") 
{
  contadorMujer2++;
  acumuladorEdadMujer = acumuladorEdadMujer + edad;
    // console.log("contador  mujer "+ contadorMujer2);
  //console.log("acumulador mujer "+ acumuladorEdadMujer);
  //console.log("promedio de mujeres "+ promedioMujer);
}


//e) El promedio de edad entre los hombres solteros.
if (sexo == "m" && estadoCivil == "soltero"||contadorHombreSoltero == 0) 
{
  contadorHombreSoltero++;
  acumuladorEdadHombre = acumuladorEdadHombre + edad;
  console.log("contador  hombre soltero  "+ contadorHombreSoltero);
  console.log("acumulador hombre "+ acumuladorEdadHombre);
}


respuesta = prompt("Para seguir pulsar 's', para salur pulsar 'n'");
while (respuesta != "s" && respuesta != "n") 
{
  producto=prompt("Por favor para seguir pulsar 's', para salur pulsar 'n'");
}

} while (respuesta != "n");//fin del do while

document.write
(
  "El nombre del hombre casado más joven es: "+nombreM+"<br>"+
  "El sexo y nombre del pasajero/a más viejo es: "+"<br>"+
  "Nombre: "+nombreViejo+"<br>"+
  "Sexo: "+sexoViejo+"<br>"+
  "La cantidad de mujeres que hay casadas o viudas es de: "+contadorMujerCasadasViudas+"<br>"
);

if (contadorHombreSoltero != 0) 
{
  promedioHombreSoltero = acumuladorEdadHombre/contadorHombreSoltero;
  document.write("El promedio de edad entre los hombres solteros es de: "+promedioHombreSoltero+"<br>");
}else
{
  ("No se ingresaron hombres"+"<br>");
}
if (contadorMujer2 != 0) 
{
  promedioMujer = acumuladorEdadMujer/contadorMujer2;
  "El promedio de edad entre las mujeres es de: "+promedioMujer+"<br>"
}else
{
  document.write("No se ingresaron mujeres");
}


}
