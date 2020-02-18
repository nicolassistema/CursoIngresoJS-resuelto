function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	//practicarlo bien!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	//Entra por falso para que siga iterando en caso de falso
	//Si entra por verdadero, muestra valor ingresado en el campo numero
	//while(numero<1 || numero>10 || isNaN(nummero)
	//                    o
	while(!(numero>=0 && numero<=9))
	{
		numero = prompt("ingrese un número entre 0 y 10.");
	}

	document.getElementById('Numero').value=numero;


}//FIN DE LA FUNCIÓN