function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	



	while (respuesta == 'si' ) {
		
		ingresoNumero = parseInt(prompt("Ingrese mumero"));

		//La variable acumulador va a ir en este caso sumando lo que entre por variable ingresoNumero
		acumulador = acumulador + ingresoNumero ;
		console.log(acumulador);
		contador++;
		console.log(contador);
		respuesta = prompt("Desea Seguir?");
		console.log(respuesta);

	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN