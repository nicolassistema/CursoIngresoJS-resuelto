/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var centigrados;
    var faren;
    var flag = 0;

    faren = parseFloat(document.getElementById("Temperatura").value);

    if (isNaN(faren)) {
        alert("Por favor ingresar solamente numeros en elñ campo 'Ingrese Temperatura'");
       flag = 1;
        location.reload(true);
    }

    if (flag == 0) {
    centigrados =  (5/9)*(faren-32);
    centigrados = centigrados.toFixed(2); 

    document.write(faren +" grados Fahrenheit son "+centigrados+" grados Centigrados ");
    }

}

function CentigradosFahrenheit () 
{
    var centigrados;
    var faren;
    var flag = 0;
  

    centigrados = parseFloat(document.getElementById("Temperatura").value);
    if (isNaN(centigrados)) {
        alert("Por favor ingresar solamente numeros en elñ campo 'Ingrese Temperatura'");
       flag = 1;
        location.reload(true);
    }

    if (flag == 0) {
    faren =  ((centigrados * 9)/5)+32;
    faren = faren.toFixed(2); 
    document.write(centigrados +" grados centigrados son "+faren+" grados Fahrenheit ");
    }




}
