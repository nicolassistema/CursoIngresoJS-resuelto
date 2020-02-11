function mostrar()
{
	var numeroRandom;
	
	numeroRandom = Math.floor(Math.random()*10 )+ 1;
	numeroRandom = parseInt(numeroRandom);

	if (numeroRandom >= 9 ) {
		alert(numeroRandom+" EXCELENTE");
	}else if(numeroRandom < 9 && numeroRandom >= 4){
		alert(numeroRandom+" APROBÓ");
	}else{
		alert(numeroRandom+" Vamos, la proxima se puede");
	}

	

	
	

}//FIN DE LA FUNCIÓN