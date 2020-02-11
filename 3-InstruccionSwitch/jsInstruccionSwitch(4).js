function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) {
    case "Febrero":
            alert("Este mes tiene 28 dias");
        break;

    case "Noviembre":
    case "Abril":
    case "Junio":
    case "Sptiembre":
    
    alert("Este mes tiene 30 día");
    break;

    default:
    alert("Este mes tiene 31 días");
        break;
}




	
	



}//FIN DE LA FUNCIÓN