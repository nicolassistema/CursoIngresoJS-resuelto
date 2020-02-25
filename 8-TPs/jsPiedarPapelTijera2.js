var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

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
	

	eleccionMaquina = Math.floor(Math.random()*3 )+ 1;
	eleccionMaquina = parseInt(eleccionMaquina);
	console.log("numero secreto: "+eleccionMaquina);	

    if (piedra == eleccionMaquina) {
		ContadorDeEmpates ++;
		document.getElementById('empatadas').value=ContadorDeEmpates;
        console.log("numero secreto: "+eleccionMaquina);
        console.log("Piedra");
		alert("La maquina selecciomo Piedra. Usted Empato");
      // location.reload(true);
    }else if ((piedra += 2) == eleccionMaquina) {
		ContadorDeGanadas ++;
		document.getElementById('ganadas').value=ContadorDeGanadas;
        console.log("numero secreto: "+eleccionMaquina);
        console.log("Tijera");
		alert("La maquina selecciomo Tijera. Usted Gano");
        //location.reload(true);
    }else {
		ContadorDePerdidas ++;
		document.getElementById('perdidas').value=ContadorDePerdidas;
        console.log("numero secreto: "+eleccionMaquina);
        console.log("Papel");	
        alert("La maquina selecciomo papel. Usted perdio");
      //  location.reload(true);
			
		
    } 
	

}//FIN DE LA FUNCIÓN
function papel()
{
    var papel;
	papel = 2;
	
	eleccionMaquina = Math.floor(Math.random()*3 )+ 1;
	eleccionMaquina = parseInt(eleccionMaquina);
	console.log("numero secreto: "+eleccionMaquina);	

    if (papel == eleccionMaquina) {
		ContadorDeEmpates ++;
		document.getElementById('empatadas').value=ContadorDeEmpates;
        console.log("numero secreto: "+eleccionMaquina);
        console.log("Papel");	
        alert("La maquina selecciomo papel. Usted Empato");
        //location.reload(true);	
    }else if (papel > eleccionMaquina) {
		ContadorDeGanadas ++;
		document.getElementById('ganadas').value=ContadorDeGanadas;
        console.log("numero secreto: "+eleccionMaquina);	
        console.log("Piedra");	
        alert("La maquina selecciomo Piedra. Usted gano");
        //location.reload(true);
    }else {
		ContadorDePerdidas ++;
		document.getElementById('perdidas').value=ContadorDePerdidas;
        console.log("numero secreto: "+eleccionMaquina);
        console.log("Tijera");	
        alert("La maquina selecciomo Tijera. Usted  perdio");
        //location.reload(true);
    } 
	

}//FIN DE LA FUNCIÓN
function tijera()
{
    var tijera;
	tijera = 3;
	
	eleccionMaquina = Math.floor(Math.random()*3 )+ 1;
	eleccionMaquina = parseInt(eleccionMaquina);
	console.log("numero secreto: "+eleccionMaquina);	
	
    if (tijera == eleccionMaquina) {
		ContadorDeEmpates ++;
		document.getElementById('empatadas').value=ContadorDeEmpates;
        console.log("numero secreto: "+eleccionMaquina);
        console.log("Tijera");
        alert("La maquina selecciomo Tijera. Usted Empato");
       // location.reload(true);	
    }else if ((tijera -= 1) == eleccionMaquina) {
		ContadorDeGanadas ++;
		document.getElementById('ganadas').value=ContadorDeGanadas;
        console.log("numero secreto: "+eleccionMaquina);
        console.log("Papel");	
        alert("La maquina selecciomo papel. Usted Gano");
       // location.reload(true);
    }else {
		ContadorDePerdidas ++;
		document.getElementById('perdidas').value=ContadorDePerdidas;
        console.log("numero secreto: "+eleccionMaquina);
        console.log("Piedra");	
        alert("La maquina selecciomo Piedra. Usted  perdio");
      // location.reload(true);
	
	} 
}	
function mostrarResultado()
{
	
	

}