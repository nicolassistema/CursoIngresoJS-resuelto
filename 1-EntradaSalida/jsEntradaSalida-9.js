/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    
    sueldo = parseInt(document.getElementById("sueldo").value);
    sueldo = sueldo + sueldo * 0.10 ;
  
    document.getElementById("resultado").value = sueldo;
  
	
}
