/**
 * Completar la lógica de los 20 ejercicios siguientes.
 * Todas las function deben de retornar una respuesta acorde a la definición que tienen.
 * Ej. myFN(...): number {...} >> myFN debe de retornar un number.
 * 
 * INTEGRANTES DEL GRUPO:
 * -
 * -
 * -
 * -
 * 
 */

// (1) Dado un número `n`, devuelve la suma de los primeros `n` números naturales.
// Ejemplo: 10 >> 55
export function sumaNumerosNaturales(n: number): number {}

// (2) Dado un número `n`, verifica si es un número primo. Devuelve `true` si es primo, de lo contrario, devuelve `false`.
// Ejemplo: 
// 7 >> true
// 10 >> false
export function esPrimo(n: number): boolean {}

// (3) Dada una cadena de texto, devuelve la cadena invertida.
// Ejemplo: "hola" -> "aloh"
export function invertirCadena(cadena: string): string {}

// (4) Dada una cadena de texto, cuenta y devuelve el número de vocales presentes en la cadena.
// Ejemplo: 'hola mundo' >> 4
export function contarVocales(cadena: string): number {}

// (5) Dada una palabra, devuelve `true` si es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda), de lo contrario, devuelve `false`.
// Ejemplo: "anilina" -> true, "palabra" -> false
export function esPalindromo(palabra: string): boolean {}

// (6) Convierte una temperatura en grados Celsius a Fahrenheit y devuelve el resultado.
// Fórmula: F = (C * 9/5) + 32
export function celsiusAFahrenheit(celsius: number): number {}

// (7) Dado un arreglo de números, devuelve un nuevo arreglo que contenga solo los números pares del arreglo original.
export function filtrarPares(arr: number[]): number[] {}

// (8) Dado un número `n`, devuelve el factorial de `n`. El factorial de un número es el producto de todos los números desde 1 hasta `n`.
// Ejemplo: factorial(5) >> 5 * 4 * 3 * 2 * 1 = 120
export function factorial(n: number): number {}

// (9) Promedio de un arreglo
// Crea una función que devuelva el promedio de los elementos de un arreglo de números.
// Ejemplo: [10, 20, 30] >> 20
export function promedioArreglo(arr: number[]): number {}

// (10) Eliminar duplicados
// Escribe una función que elimine los valores duplicados de un arreglo.
// Ejemplo: [1, 2, 2, 3] >> [1, 2, 3]
export function eliminarDuplicados(arr: number[]): number[] {}

// (11) Multiplicar todos los números de una matriz
// Escribe una función que multiplique todos los elementos de una matriz.
// Ejemplo: [[1, 2], [3, 4]] >> 24
export function multiplicarMatriz(matriz: number[][]): number {}

// (12) Contar las palabras en una frase
// Crea una función que reciba una frase y devuelva la cantidad de palabras.
// Ejemplo: "Hola mundo" >> 2
export function contarPalabras(frase: string): number {}

// (13) Obtener la mediana de un arreglo
// Crea una función que calcule la mediana de un arreglo de números.
// Ejemplo: [1, 2, 3, 4, 5] >> 3
export function calcularMediana(arr: number[]): number {}

// (14) Calcular el máximo común divisor (MCD) de dos números
// Crea una función que calcule el máximo común divisor (MCD) de dos números usando el algoritmo de Euclides.
// Ejemplo: 48 y 18 >> 6
export function mcd(a: number, b: number): number {}

// (15) Validar un número de tarjeta de crédito usando el algoritmo de Luhn
// Crea una función que valide si un número de tarjeta de crédito es válido utilizando el algoritmo de Luhn.
// Ejemplo:
// '4532015112830366' >> true
// '1234567812345679' >> false
export function validarTarjeta(numero: string): boolean {}

// (16) Crea una función que reciba un número y devuelva la suma de sus dígitos.
// Ejemplo: 11 >> 1 + 1 = 2
export function sumaDigitos(n: number): number {}

// (17) Verificar si una cadena es un anagrama de otra.
// Dada dos cadenas de texto, devuelve true si son anagramas entre sí (es decir, si las letras se pueden reorganizar para formar la otra cadena), de lo contrario, devuelve false.
// Ejemplo: "roma" y "amor >> true
export function esAnagrama(cadena1: string, cadena2: string): boolean {}

// (18) Verificar si un número es perfecto.
// Un número perfecto es aquel que es igual a la suma de sus divisores propios (excluyendo el propio número). Escribe una función que reciba un número y devuelva true si es un número perfecto, de lo contrario, devuelve false.
// Ejemplo:
//  28 >> true (1 + 2 + 4 + 7 + 14 = 28)
//  10 >> false
export function esNumeroPerfecto(n: number): boolean {}

// (19) Convertir un número a binario.
// Crea una función que reciba un número entero positivo y devuelva su representación en binario como una cadena de texto.
// Ejemplo: 255 >> "11111111"
export function convertirABinario(n: number): string {}

// (20) Determinar si una cadena es un pangrama.
// Un pangrama es una frase que contiene todas las letras del alfabeto al menos una vez. Escribe una función que reciba una cadena de texto y devuelva true si es un pangrama, de lo contrario, devuelve false.
// Ejemplo:
// "El cadáver de Wamba, rey godo de España, fue exhumado y trasladado en una caja de zinc que pesó un kilo." >> true
// "Hola Mundo" >> false
export function esPangrama(cadena: string): boolean {}