function mostrar()
{
//tomo la edad  
var mesDelAño 

mesDelAño = document.getElementById('mes').value;



switch (mesDelAño) {
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
        alert("Falta para el invierno.");
        break;
       
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
        alert("Ya pasamos el frio, ahora calor!!!.");
        break;      
        
    default:
    alert("Abrigate que hace frio.");
        break;
}









}//FIN DE LA FUNCIÓN