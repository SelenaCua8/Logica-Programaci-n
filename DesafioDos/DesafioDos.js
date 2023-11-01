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
        //console.log ("Ahora lo vamos a convertir en lenguaje hacker");
