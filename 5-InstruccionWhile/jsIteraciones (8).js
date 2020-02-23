function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	//var respuesta='si';




do {
	ingresoNumero = parseInt(prompt("Ingrese numero"));
		console.log(ingresoNumero);

		if (ingresoNumero >0) {
			positivo = positivo + ingresoNumero;
			console.log(positivo);
		}else {
			negativo = negativo * ingresoNumero;
			console.log(negativo);
		}
		respuesta = prompt("Desea Seguir?");
		console.log(respuesta);
} while (respuesta == "si");
console.log(respuesta);


//} while (respuesta == null);
//console.log(respuesta);


/*

	while (respuesta == 'si' ) {
		
		ingresoNumero = parseInt(prompt("Ingrese numero"));
		console.log(ingresoNumero);

		if (ingresoNumero >0) {
			positivo = positivo + ingresoNumero;
			console.log(positivo);
		}else if (ingresoNumero <0) {
			negativo = negativo + ingresoNumero;
			console.log(negativo);
		}
		respuesta = prompt("Desea Seguir?");
		console.log(respuesta);


	}


	*/


parseInt(document.getElementById('suma').value=positivo);
parseInt(document.getElementById('producto').value=negativo);

}//FIN DE LA FUNCIÓN