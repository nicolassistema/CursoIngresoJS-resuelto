/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
 //variables
 
 eleccionMaquina = Math.floor(Math.random()*3 )+ 1;
 eleccionMaquina = parseInt(eleccionMaquina);
 console.log("numero secreto: "+eleccionMaquina);	





}//FIN DE LA FUNCIÓN
function piedra()
{
    var piedra;
    piedra = 1;

    if (piedra == eleccionMaquina) {
        console.log("numero secreto: "+eleccionMaquina);
        console.log("Piedra");
        alert("La maquina selecciomo Piedra. Usted Empato");
        location.reload(true);
    }else if ((piedra += 2) == eleccionMaquina) {
        
        console.log("numero secreto: "+eleccionMaquina);
        console.log("Tijera");
        alert("La maquina selecciomo Tijera. Usted Gano");
        location.reload(true);
    }else {
        console.log("numero secreto: "+eleccionMaquina);
        console.log("Papel");	
        alert("La maquina selecciomo papel. Usted perdio");
        location.reload(true);
        	
    } 
	

}//FIN DE LA FUNCIÓN
function papel()
{
    var papel;
    papel = 2;

    if (papel == eleccionMaquina) {
        console.log("numero secreto: "+eleccionMaquina);
        console.log("Papel");	
        alert("La maquina selecciomo papel. Usted Empato");
        location.reload(true);	
    }else if (papel > eleccionMaquina) {
        console.log("numero secreto: "+eleccionMaquina);	
        console.log("Piedra");	
        alert("La maquina selecciomo Piedra. Usted gano");
        location.reload(true);
    }else {
        console.log("numero secreto: "+eleccionMaquina);
        console.log("Tijera");	
        alert("La maquina selecciomo Tijera. Usted  perdio");
        location.reload(true);
    } 
	

}//FIN DE LA FUNCIÓN
function tijera()
{
    var tijera;
    tijera = 3;
	
    if (tijera == eleccionMaquina) {
        console.log("numero secreto: "+eleccionMaquina);
        console.log("Tijera");
        alert("La maquina selecciomo Tijera. Usted Empato");
        location.reload(true);	
    }else if ((tijera -= 1) == eleccionMaquina) {
        console.log("numero secreto: "+eleccionMaquina);
        console.log("Papel");	
        alert("La maquina selecciomo papel. Usted Gano");
        location.reload(true);
    }else {
        console.log("numero secreto: "+eleccionMaquina);
        console.log("Piedra");	
        alert("La maquina selecciomo Piedra. Usted  perdio");
        location.reload(true);
	
    } 
	

}//FIN DE LA FUNCIÓN