/*
 * Escribe un programa que reciba un texto y transforme lenguaje natural a
 * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 *  se caracteriza por sustituir caracteres alfanuméricos.
 * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/) 
 *   con el alfabeto y los números en "leet".
 *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
 */

/*LENGUAJE HACKER
A= 4
B = 13
C = [
D = cl
E = 3
F = |=
G = 6
H = |-|
I = 1
J= ,_|
K = |<
L = |_
M = nn
N = /\/
O = 0
P = |o
Q = (_,)
R = /2
S = $
T = 7
U = v
V = \/
W = VV
X = ><
Y = Ч
Z = 2
-Ahora lo que tengo que hacer es declarar cada variable con su respectivo lenguaje
ejemplo let A = 4, tengo que hacer como una pregunta por ejemplo: Escriba una frase e imprimir la frase con el lenguaje de hacker
*/ 

//PRIMER PASO: DECLARAR LAS VARIABLES
let a = 4;
let b = 13;
let c = '[';
let d  = 'cl';
let e = 3;
let f = '|=';
let g = 6;
let h = '|-|';
let i = 1;
let j = ',_|';
let k = '|<';
let l = '|_';
let m = 'nn';
let n = '/\/';
let o = 0;
let p = '|o';
let q = '(_,)';
let r = '/2';
let s = '$';
let t = 7;
let u = 'v';
let v = '\/';
let w = 'VV';
let x = '><';
let y = 'Ч';
let z = 2;

//Segundo paso para mi hay que pedir que ingrese un texto:
let nombre = prompt("Por favor, ingrese un texto el que quiera: ");
        console.log(`Su texto que ingresó fue: ${nombre}`);
        console.log ("Ahora lo vamos a convertir en lenguaje hacker");
// tercero es convertir el texto

//cuarto publicarlo


//Razonamiento
/*lo que para mi tengo que hacer es declarar todas las variables, despues pido que ingrese un texto y lo convierto pero con una function, para mi que se llame hacker y con en el que es while mientras A = 4, ahora que lo pienso no es necesario declararlas
while a  = 4, 

function numeroALetra(numero) {
    if (numero >= 1 && numero <= 26) {
        return String.fromCharCode(64 + numero);
    } else {
        return "Fuera de rango";
    }
}

console.log(numeroALetra(4)); // "D"
console.log(numeroALetra(26)); // "Z"
console.log(numeroALetra(30)); // "Fuera de rango"

let contador = 1;

while (contador <= 5) {
    console.log(contador);
    contador++;
}*/ 