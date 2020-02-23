function mostrar()
{

	//var contador=0;
	var numeroIngresado;
	var maximo;
	var minimo;
	var flag = 0;

	var respuesta='si';

	while(respuesta!='no')
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		//validar que el dato este correcto
	while (isNaN(numeroIngresado)) {
		numeroIngresado = prompt("Lo que ingresaste no es un numero");
		numeroIngresado = parseInt(numeroIngresado); 
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
	respuesta = prompt("Desea continuar?: ");

	
	
	}//fin del while, fin del pedido de datos y evalucacion de maximos y minimos

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;


}//FIN DE LA FUNCIÓN