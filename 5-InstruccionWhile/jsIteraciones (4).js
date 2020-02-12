function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	//practicarlo bien!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	while(numero<1 || numero>9)
	{
		numero = prompt("ingrese un número entre 0 y 10.");
	}

	document.getElementById('Numero').value=numero;


}//FIN DE LA FUNCIÓN