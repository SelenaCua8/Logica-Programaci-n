/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

/*multiplos de tres: fizz
3, 6, 9, 12, 15, 18, 21, 24, 27, 30

multiplos de 5: buzz
5, 10, 15, 20, 25, 30, 35, 40, 45, 50

multiplos en comun de 3 y 5: fizbuzz
15, 30

lo que quiero es hacer un programa que pasen todos los numeros desde el 1 al 100 y cada vez que aparecen los multiplos que aparezcan esas palabras
*/

/*PRIMER PASO*/
/*function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        
        if( i % 3 === 0){console.log ("Fizz")
         if( i % 5 === 0)
            console.log ("buzz")

         else if( i % 5 === 0){console.log ("buzz") & ( i % 3 === 0){console.log ("Fizz") console.log ("fizzbuzz") 


        

    }
    }
}*/

function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

//Tambien puedo hacerlo con while

/*let i = 1;


while i<= 100
 i++;*/

 let i = 1;

while (i <= 100) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
    i++; // No olvides incrementar i en cada iteración para evitar un bucle infinito.
}

