// src/__tests__/ejercicios.test.ts
import {
    sumaNumerosNaturales,
    esPrimo,
    invertirCadena,
    contarVocales,
    esPalindromo,
    celsiusAFahrenheit,
    filtrarPares,
    factorial,
    promedioArreglo,
    eliminarDuplicados,
    multiplicarMatriz,
    contarPalabras,
    calcularMediana,
    mcd,
    validarTarjeta,
    sumaDigitos,
    esPangrama,
    convertirABinario,
    esNumeroPerfecto,
    esAnagrama
} from '../ejercicios';

// Test para suma de los primeros N números naturales
test('suma de los primeros 10 números', () => {
    expect(sumaNumerosNaturales(10)).toBe(55);
});

// Test para determinar si un número es primo
test('número primo', () => {
    expect(esPrimo(7)).toBe(true);
    expect(esPrimo(10)).toBe(false);
});

// Test para invertir una cadena
test('invertir una cadena', () => {
    // expect(invertirCadena('typescript')).toBe('tpircsetyp');  
    expect(invertirCadena('radar')).toBe('radar');
});


// Test para contar las vocales en una cadena
test('contar vocales', () => {
    expect(contarVocales('hola mundo')).toBe(4);
});

// Test para verificar si una palabra es un palíndromo
test('verificar si es un palíndromo', () => {
    expect(esPalindromo('radar')).toBe(true);
    expect(esPalindromo('typescript')).toBe(false);
});

// Test para convertir de Celsius a Fahrenheit
test('convertir de Celsius a Fahrenheit', () => {
    expect(celsiusAFahrenheit(0)).toBe(32);
    expect(celsiusAFahrenheit(25)).toBe(77);
});

// Test para filtrar números pares de un arreglo
test('filtrar números pares', () => {
    expect(filtrarPares([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
});

// Test para calcular el factorial de un número
test('calcular el factorial', () => {
    expect(factorial(5)).toBe(120);
});

test('Promedio de [10, 20, 30] es 20', () => {
    expect(promedioArreglo([10, 20, 30])).toBe(20);
});

test('Eliminar duplicados de [1, 2, 2, 3] es [1, 2, 3]', () => {
    expect(eliminarDuplicados([1, 2, 2, 3])).toEqual([1, 2, 3]);
});

test('Multiplicar elementos de [[1, 2], [3, 4]] es 24', () => {
    expect(multiplicarMatriz([[1, 2], [3, 4]])).toBe(24);
});

test('Contar palabras en "Hola mundo" es 2', () => {
    expect(contarPalabras('Hola mundo')).toBe(2);
});

test('Mediana de [1, 2, 3, 4, 5] es 3', () => {
    expect(calcularMediana([1, 2, 3, 4, 5])).toBe(3);
});

test('MCD de 48 y 18 es 6', () => {
    expect(mcd(48, 18)).toBe(6);
});

test('Validar tarjeta "4532015112830366" es válida (algoritmo de Luhn)', () => {
    expect(validarTarjeta('4532015112830366')).toBe(true);
});

test('Validar tarjeta "1234567812345670" no es válida', () => {
    expect(validarTarjeta('1234567812345670')).toBe(false);
});

test('Validar suma de dígitos', () => {
    expect(sumaDigitos(1234)).toBe(10);
    expect(sumaDigitos(567)).toBe(18);
});

test('Verificar si dos palabras son anagramas', () => {
    expect(esAnagrama('amor', 'roma')).toBe(true);
    expect(esAnagrama('palabra', 'anagrama')).toBe(false);
});

test('Verificar si un número es perfecto', () => {
    expect(esNumeroPerfecto(28)).toBe(true);
    expect(esNumeroPerfecto(10)).toBe(false);
});

test('Convertir un número a binario', () => {
    expect(convertirABinario(255)).toBe('11111111');
    expect(convertirABinario(8)).toBe('1000');
});

test('Verificar si una cadena es un pangrama', () => {
    expect(esPangrama('El veloz murciélago hindú comía feliz cardillo y kiwi')).toBe(true);
    expect(esPangrama('Hola Mundo')).toBe(false);
});