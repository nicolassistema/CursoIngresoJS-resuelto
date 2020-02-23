function mostrar()
{


	var numeroIngresado;
	var maximo;
	var minimo;
	var flag = 0;



do {
	

	
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		console.log(numeroIngresado);
		//validar que el dato este correcto
	while (isNaN(numeroIngresado)) {
		numeroIngresado = prompt("Por favor ingresar un numero");
		numeroIngresado = parseInt(numeroIngresado); 
		console.log(numeroIngresado);
	}

	//observamos si son maximos y minimos
	if (flag == 0) {
		//Entrariamos la primera vez y solo una vez
		maximo = numeroIngresado;
		minimo = numeroIngresado;
		flag = 1;
	}else if (numeroIngresado>maximo) {
		maximo = numeroIngresado;
	}else if (numeroIngresado < minimo) {
		minimo = numeroIngresado;
		
	}
	respuesta = prompt("Desea continuar? "+"\n"+
	"Ingresar en minuscula la palabra si y luego pulsar Aceptar para continuar."+"\n"+
	"o"+"\n"+
	"Ingresar en minuscula la palabra no y luego pulsar Aceptar para finalizar y visualizar resultados."+"\n");



			while (respuesta != "si" && respuesta != "no") {
				respuesta = prompt("Lo que ingreso es incorrecto."+"\n"+
				"Por favor realizar lo siguiente: "+"\n"+
				"Ingresar en minuscula la palabra si y luego pulsar Aceptar para continuar."+
				" o"+"\n"+
				"Ingresar en minuscula la palabra no y luego pulsar Aceptar para finalizar y visualizar resultados."+"\n");

				
				
		}
		









	}while(respuesta!='no')//fin del while, fin del pedido de datos y evalucacion de maximos y minimos






	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;


}//FIN DE LA FUNCIÓN