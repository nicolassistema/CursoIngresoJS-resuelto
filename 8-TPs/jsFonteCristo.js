/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function Rumeros(string){//Solo numeros
    var out = '';
    var filtro = '1234567890';//Caracteres validos
  
    //Recorrer el texto y verificar si el caracter se encuentra en la lista de validos 
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) 
             //Se añaden a la salida los caracteres validos
       out += string.charAt(i);
  
    //Retornar valor filtrado
    return out;
  } 

function NumerosPares() {
//Variables    
var numero;
var numInicial;
var numerosPar;
var contador;

//Entrada
numero=parseInt(document.getElementById("numero").value);

//Cargando valor inicial
numInicial = numero;

//Inicializador de conteo
contador = 0;

if (isNaN(numero)) {
    alert("Por favor ingresar un numero en el campo 'Ingrese numero'");
     location.reload(true);
  }


do {
    //Calculador de numeros pares
    numerosPar=numero%2;
    /*
    Flujo principal: 
    1) contar si el numero tiene resto 0
    2) Restarle 1 al numero ingresado para poder calcular nuevamente su resto
    */
    if (numerosPar == 0) {
        contador ++;
        numero = numero -1;
    /*
    Flujo alternativo:
    1) Restarle 1 al numero ingresado para poder calcular nuevamente su resto
    */
    }else{
        numero = numero -1;
    }

} while (numero != 0 && !isNaN(numero) );

if (!isNaN(numero)) {
alert("La cantidad de pares entre el numero ingresado "+numInicial+" y el 0 es: "+contador);
}

}

function NumerosImpares() {
    
    //Variables    
var numero;
var numInicial;
var numerosImpar;
var contador;

//Entrada
numero=parseInt(document.getElementById("numero").value);

//Cargando valor inicial
numInicial = numero;

//Inicializador de conteo
contador = 0;
if (isNaN(numero)) {
    alert("Por favor ingresar un numero en el campo 'Ingrese numero'");
     location.reload(true);
  }




do {
    //Calculador de numeros pares
    numerosImpar=numero%2;
    /*
    Flujo principal: 
    1) contar si el numero tiene resto != 0
    2) Restarle 1 al numero ingresado para poder calcular nuevamente su resto
    */
    if (numerosImpar != 0) {
        contador ++;
        numero = numero -1;
    /*
    Flujo alternativo:
    1) Restarle 1 al numero ingresado para poder calcular nuevamente su resto
    */
    }else{
        numero = numero -1;
    }

} while (numero != 0 && (!isNaN(numero)));

if (!isNaN(numero)) {
alert("La cantidad de impares entre el numero ingresado "+numInicial+" y el 0 es: "+contador);
}
}


function NumerosDivisibles(){

//Variables    
var numero;
var numInicial;
var numerosPar;
var divisible;
var contador;

//Entrada
numero=parseInt(document.getElementById("numero").value);

//Cargando valor inicial
numInicial = numero;

//Inicializador de conteo
contador = 0;
divisible = 1;

if (isNaN(numero)) {
    alert("Por favor ingresar un numero en el campo 'Ingrese numero'");
     location.reload(true);
  }



do {
    //Calculador de numeros pares
    numerosPar=divisible%numero;
    console.log("Calculadore de pares: "+" | "+
    "Resto: "+numerosPar+" | "+
    "Numero divisible: "+divisible+" | "+
    "Numero ingresado: "+numero);
    /*
    Flujo principal: 
    1) contar si el numero tiene resto 0
    2) Restarle 1 al numero ingresado para poder calcular nuevamente su resto
    */
    if (numerosPar == 0 ) {
        contador ++;
        console.log("contador: "+contador);
        divisible++;
        console.log("Divisible: "+divisible);
    /*
    Flujo alternativo:
    1) Restarle 1 al numero ingresado para poder calcular nuevamente su resto
    */
    }else{
        divisible = divisible +1;
        console.log("Divisible: "+divisible);
    }

} while (divisible != 100);

if (!isNaN(numero)) {
alert("La cantidad de numeros divisibles entre el 1 y el 100 para el numero ingresado "+numInicial+" es de: "+contador);
}




}



function VerificarPrimo() {
  //var n1;
  var primo;
  var numero;
  var contador;
  contador = 1;
  numero=parseInt(document.getElementById("numero").value);
  console.log(numero);
primo = 1; 
  i=2;

  if (isNaN(numero)) {
    alert("Por favor ingresar un numero en el campo 'Ingrese numero'");
     location.reload(true);
  }


  while (i<numero && (!isNaN(numero))) {
      if (numero%i==0) {
          primo=false;
      }
      i++;
   
  }

if (primo==true && numero !=1 && (!isNaN(numero))) {
    alert("es primo");
}else if (!isNaN(numero)){
    alert("no es primo");
}

}

function NumerosPrimos() {
     //var n1;
  var primo;
  var numero;
  var contador;
  var contador2;
  contador2 = 0;
  
  numero=parseInt(document.getElementById("numero").value);
primo = 1; 
  i=2;

  if (isNaN(numero)) {
    alert("Por favor ingresar un numero en el campo 'Ingrese numero'");
     location.reload(true);
  }
    for (var i = 2; i <= numero; i++) {
        var primo = 1;
        var contador = 2;
        while(contador <= i/2 && primo) {
            if (i % contador === 0) {
                primo = 0;
            }
            contador++;
        }
        if( primo ) {
           
            contador2++;
       
        }
    } 
    
    if (!isNaN(numero)) {
        alert("La cantidad de números Primos desde el número ingresado "+numero+" hasta 0 es de: "+contador2); 
    }
    

    
 
}
