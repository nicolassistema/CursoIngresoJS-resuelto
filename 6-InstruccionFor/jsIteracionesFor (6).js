function mostrar()
{

    var numInicial;
    var numerosPar;
    var contador = 0;
var numero = prompt("ingrese un numero");
numero=parseInt(numero);




for (var i = 0; i < numero; i++) {


    numerosPar=numero%2;
  

    if (numerosPar == 0) {
        contador ++;
      //  numero = numero -1;
      console.log("numero restado en else "+contador);
   
    }else{
      //  numero = numero -1;
        console.log("numero restado en else "+numero);
    }
    

}

//console.log("contador final: "+contador);


}