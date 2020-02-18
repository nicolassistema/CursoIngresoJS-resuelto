function mostrar()
{

	var contador=0;
	var acumulador=0;
	
//

 // Entro con variable contador = 0 al while
	while (contador < 5 ) {
		
		ingresoNumero = parseInt(prompt("Ingrese mumero"));

		//La variable acumulador va a ir en este caso sumando lo que entre por variable ingresoNumero
		acumulador = acumulador + ingresoNumero ;
		console.log(acumulador);

		//Este es el contador
		contador++;

	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN