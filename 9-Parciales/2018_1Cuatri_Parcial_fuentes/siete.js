function mostrar()
{
var nota;
var notaInc;
var sexo;
var i;
var flag;
var flag2;
var contador;
var minimo;
var sexoUlt;
var alumno;

alumno = 1;
flag2 = 0;
flag = 0;
i = 0;
contador = 0;
nota = 0;




while (i < 3) {
    sexo = prompt("Ingresar Sexo del alumno: "+alumno);
    sexo = sexo.toLowerCase();
    nota = parseInt(prompt("Ingresar nota del alumno: "+alumno));
    console.log("ingresar nota: "+nota);
    //nota = parent(nota);

    //sumador de notas
    
    if (flag == 0) {
        notaInc = nota;
        flag =1;
    }else{

        notaInc = nota + notaInc;
    }
    

//observamos si son maximos y minimos
if (flag2 == 0) {
    //Entrariamos la primera vez y solo una vez
    minimo = nota;
    minimo=parseInt(minimo);
    sexoUlt = sexo;
    console.log("if: "+minimo);
    //console.log("if: "+sexoUlt);
    flag2 = 1;
}else if (nota < minimo) {
    minimo = nota;
    sexoUlt = sexo;

    console.log("else: "+minimo);
    console.log("else: "+sexoUlt);
    
}
    

//Cantidad de alumnos con nora > = a 6
    if (sexo =="m" && nota >= 6) {
        contador++;
    }

    i++;
    alumno++;



}


promedio= notaInc/5;
alert("La nota mas baja es: "+minimo+" "+sexoUlt+"\n"+
"El promedio total de notas es de: "+promedio+"\n"+
"La cantidad de varones con nota mayor o igual a 6 es de: "+contador
);









}
