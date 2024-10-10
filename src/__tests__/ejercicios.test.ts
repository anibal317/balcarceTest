import {
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
  esAnagrama,
  clasificarEdades,
} from '../respuestas';

// test('Suma de los primeros 10 números', () => {
//   expect(sumaNumerosNaturales(10)).toBe(55);
// });

test('Número primo', () => {
  expect(esPrimo(7)).toBe(true);
  expect(esPrimo(10)).toBe(false);
});

test('Invertir una cadena', () => {
  expect(invertirCadena('radar')).toBe('radar');
});

test('Contar vocales', () => {
  expect(contarVocales('hola mundo')).toBe(4);
});

test('Verificar si es un palíndromo', () => {
  expect(esPalindromo('radar')).toBe(true);
  expect(esPalindromo('typescript')).toBe(false);
});

test('Convertir de Celsius a Fahrenheit', () => {
  expect(celsiusAFahrenheit(0)).toBe(32);
  expect(celsiusAFahrenheit(25)).toBe(77);
});

test('Filtrar números pares', () => {
  expect(filtrarPares([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
});

test('Calcular el factorial', () => {
  expect(factorial(5)).toBe(120);
});

test('Promedio de [10, 20, 30] es 20', () => {
  expect(promedioArreglo([10, 20, 30])).toBe(20);
});

test('Eliminar duplicados de [1, 2, 2, 3] es [1, 2, 3]', () => {
  expect(eliminarDuplicados([1, 2, 2, 3])).toEqual([1, 2, 3]);
});

test('Multiplicar elementos de [[1, 2], [3, 4]] es 24', () => {
  expect(
    multiplicarMatriz([
      [1, 2],
      [3, 4],
    ])
  ).toBe(24);
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

test('Validar tarjeta "1234567812345679" no es válida', () => {
  expect(validarTarjeta('1234567812345679')).toBeFalsy();
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
  expect(
    esPangrama(
      'El cadáver de Wamba, rey godo de España, fue exhumado y trasladado en una caja de zinc que pesó un kilo.'
    )
  ).toBe(true);
  expect(esPangrama('Hola Mundo')).toBe(false);
});

test('debería devolver un array vacío para mayores o iguales a 21 cuando todos son menores de 21', () => {
  const edades = clasificarEdades([18, 19, 20, 21, 25, 40]);

  console.log(edades)
  expect(edades[0]).toEqual(3); // Todos menores de 21
  expect(edades[1]).toBe(3); // Ninguno mayor o igual a 21
});