function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroIngresado = 0;
	
//////
/*
 // Entro con variable contador = 0 al while
	while (contador < 5 ) {
		
		ingresoNumero = parseInt(prompt("Ingrese mumero"));

		//La variable acumulador va a ir en este caso sumando lo que entre por variable ingresoNumero
		acumulador = acumulador + ingresoNumero ;
		console.log(acumulador);

		//Este es el contador
		contador++;

	}
*/

do {
	//ingresar numero
	numeroIngresado = prompt("Ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado);
	//validar que el dato este correcto
while (isNaN(numeroIngresado)) {
	numeroIngresado = prompt("Lo que ingresaste no es un numero");
	numeroIngresado = parseInt(numeroIngresado); 
}

//En esta parete del codigo sabemos que el numero es correcto
contador++;
acumulador = acumulador + numeroIngresado ;
console.log("el contador es: "+contador);
console.log("Se encuentra acumulado: "+acumulador);
} while (contador<5);







document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN