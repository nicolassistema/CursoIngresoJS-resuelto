function mostrar()
{

	var contador=0;
	var acumuladorNegativos = 0;
	var acumuladorPositivos = 0;
	var numeroIngresado = 0;
	var cantidadNegativos = 0;
	var cantidadPositivos = 0;
	var cantidadCeros = 0;
	var cantidadNumeroPares = 0;
	var promedioNegativos;
	var promedioPositivos;
	var diferenciaNegativosPositivos;
	//var respuesta="si";
	
	
	do {
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		//Se valida el dato correcto--------------------------------------------------
		while (isNaN(numeroIngresado)) {
		numeroIngresado = prompt("Lo que ingresaste no es un numero");
		numeroIngresado = parseInt(numeroIngresado); 
		//----------------------------------------------------------------------------
		}
		//Se valida el dato esta vacio--------------------------------------------------
		
		if (numeroIngresado>0) { //en este if solo entran los positivos
		acumuladorPositivos = acumuladorPositivos + numeroIngresado;
		cantidadPositivos++;
		//Aca se se procesa numeros pares aplicando la formula de resto = 0-----------
		var resto = numeroIngresado % 2;
		if(resto == 0){ //Entre en este if si el numero es 0
		cantidadNumeroPares++; //cuenta numeros pares
		}
		//----------------------------------------------------------------------------
		//console.log("Numero ingresado positivo: "+numeroIngresado);

		
		}else if (numeroIngresado<0) {
		acumuladorNegativos = acumuladorNegativos + numeroIngresado;
		cantidadNegativos++;
		//console.log("Numero ingresado negativo: "+numeroIngresado);
		}else{
		cantidadCeros++;
		}
		contador++;


		respuesta = prompt("Desea continuar? Si desea cancelar escriba no");
		//validacion de final--------------------------------------------
		while (respuesta != "si" && respuesta != "no" ) {
			respuesta = prompt("por favor ingrese "+"si"+" para continuar, "+"no"+" para finalizar");
		}
		//----------------------------------------------------------------

}//termina el bucle
while(respuesta !="no");
//while(respuesta ==undefined);




//se calculan los promedios
promedioNegativos = acumuladorNegativos / cantidadNegativos;
/*Aca se aregar un if por si promedioNegativos queda como NaN y no se muestre por pantalla,
es decir, si acumuladorNegativos que es "0" lo devidimos por cantidadNegativos que es "0", esto
daria aerror
*/
if (isNaN(promedioNegativos)) {
	promedioNegativos = 0;
}
//----------------------------------------------------------------------------------------
//se calculan los promedios
promedioPositivos = acumuladorPositivos / cantidadPositivos;

/*Aca se aregar un if por si promedioPositivos queda como NaN y no se muestre por pantalla,
es decir, si acumuladorPositivos que es "0" lo devidimos por cantidadPositivos que es "0", esto
daria aerror
*/
if (isNaN(promedioPositivos)) {
	promedioPositivos = 0;
}
//----------------------------------------------------------------------------------------


diferenciaNegativosPositivos = acumuladorPositivos + acumuladorNegativos;

//aca implime por pantalla los resultados
document.write("El total de numeros positivos es de :"+acumuladorPositivos + "<br>"+
"El total de numeros negativos es de : "+acumuladorNegativos +"<br>"+
"El promedio de numeros negativos es de : "+promedioNegativos +"<br>"+
"El promedio de numeros positivos es de : "+promedioPositivos +"<br>"+
"La cantidad de ceros es de : "+cantidadCeros +"<br>"+
"La diferencia de numeros negativos y positivos : "+diferenciaNegativosPositivos);

}