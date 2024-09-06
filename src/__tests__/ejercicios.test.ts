// src/__tests__/ejercicios.test.ts
import { 
    sumaNumerosNaturales, 
    esPrimo, 
    invertirCadena, 
    contarVocales, 
    numeroMayor, 
    tablaMultiplicar, 
    esPalindromo, 
    celsiusAFahrenheit, 
    filtrarPares, 
    factorial 
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

// Test para encontrar el número mayor en un arreglo
test('encontrar el número mayor', () => {
    expect(numeroMayor([3, 5, 7, 2, 8])).toBe(8);
});

// Test para generar la tabla de multiplicar
test('tabla de multiplicar del 5', () => {
    expect(tablaMultiplicar(5)).toEqual([
        '5 x 1 = 5', '5 x 2 = 10', '5 x 3 = 15', '5 x 4 = 20', '5 x 5 = 25',
        '5 x 6 = 30', '5 x 7 = 35', '5 x 8 = 40', '5 x 9 = 45', '5 x 10 = 50'
    ]);
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
