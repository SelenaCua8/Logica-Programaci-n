/*
 * Escribe un programa que sea capaz de generar contraseñas de forma aleatoria.
 * Podrás configurar generar contraseñas con los siguientes parámetros:
 * - Longitud: Entre 8 y 16.
 * - Con o sin letras mayúsculas.
 * - Con o sin números.
 * - Con o sin símbolos.
 * (Pudiendo combinar todos estos parámetros entre ellos)
 */

//hay que hacer una funcion caracteres <=8 y >=16, que se pueda mayusculas y minisculuas, numeros y simbolos y que sea combinado. de forma aleatoria.
// y como en el anterior una declaracion con todo el abecedario, los numeros y simbolos.
//para mi es una function llamada paswordrandom()

//PRIMER PASO: Declaración de variables - LISTO

//SEGUNDO PASO: Crear una función- LISTO

//TERCER PASO: Dentro de la funcion buscar algo que los mezcle a todas esas variables
//Falta descubrir algo que haga eso, un map puede ser? todavía sigo leyendo e investigando!

//CUARTO PASO: Que lo devuelva a la funcion

//Primer paso creo un array con los valores que quiero mezclar 
const vocabulary = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '$', '%', '&', '/', '(', ')', '=', '?', '¿', '+', '-', '~'
  ];

  //ya tengo todo declara y ahora tengo que hacer una function que cada vez cuando la llame genere una contraseña con todas esas variables.

  function paswordrandom (){

    return"";

  }
  
