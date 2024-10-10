// Dado un número `n`, devuelve la suma de los primeros `n` números naturales.
// export function sumaNumerosNaturales(n: number): number {
//     let suma = 0;
//     for (let i = 1; i <= n; i++) {
//         suma += i;
//     }
//     return suma;
// }

// Dado un número `n`, verifica si es un número primo.
export function esPrimo(n: number): boolean {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Dada una cadena de texto, devuelve la cadena invertida.
export function invertirCadena(cadena: string): string {
    return cadena.split('').reverse().join('');
}

// Dada una cadena de texto, cuenta y devuelve el número de vocales presentes en la cadena.
export function contarVocales(cadena: string): number {
    const vocales = 'aeiouAEIOU';
    return cadena.split('').filter((letra) => vocales.includes(letra)).length;
}

// Dada una palabra, devuelve `true` si es un palíndromo.
export function esPalindromo(palabra: string): boolean {
    const palabraInvertida = palabra.split('').reverse().join('');
    return palabra === palabraInvertida;
}

// Convierte una temperatura en grados Celsius a Fahrenheit.
export function celsiusAFahrenheit(celsius: number): number {
    return (celsius * 9) / 5 + 32;
}

// Dado un arreglo de números, devuelve un nuevo arreglo con solo los números pares.
export function filtrarPares(arr: number[]): number[] {
    return arr.filter((num) => num % 2 === 0);
}

// Dado un número `n`, devuelve el factorial de `n`.
export function factorial(n: number): number {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// Crea una función que devuelva el promedio de los elementos de un arreglo de números.
export function promedioArreglo(arr: number[]): number {
    const suma = arr.reduce((acc, val) => acc + val, 0);
    return suma / arr.length;
}

// Escribe una función que elimine los valores duplicados de un arreglo.
export function eliminarDuplicados(arr: number[]): number[] {
    return [...new Set(arr)];
}

// Escribe una función que multiplique todos los elementos de una matriz.
export function multiplicarMatriz(matriz: number[][]): number {
    let producto = 1;
    matriz.forEach((fila) => {
        fila.forEach((valor) => {
            producto *= valor;
        });
    });
    return producto;
}

// Crea una función que reciba una frase y devuelva la cantidad de palabras.
export function contarPalabras(frase: string): number {
    return frase.trim().split(/\s+/).length;
}

// Crea una función que calcule la mediana de un arreglo de números.
export function calcularMediana(arr: number[]): number {
    arr.sort((a, b) => a - b);
    const mitad = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
        return (arr[mitad - 1] + arr[mitad]) / 2;
    } else {
        return arr[mitad];
    }
}

// Crea una función que calcule el máximo común divisor (MCD) de dos números.
export function mcd(a: number, b: number): number {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

// Crea una función que valide si un número de tarjeta de crédito es válido utilizando el algoritmo de Luhn.
export function validarTarjeta(numero: string): boolean {
    let suma = 0;
    let alternar = false;
    for (let i = numero.length - 1; i >= 0; i--) {
        let n = parseInt(numero[i], 10);
        if (alternar) {
            n *= 2;
            if (n > 9) n -= 9;
        }
        suma += n;
        alternar = !alternar;
    }
    return suma % 10 === 0;
}

// Crea una función que reciba un número y devuelva la suma de sus dígitos.
export function sumaDigitos(n: number): number {
    return n
        .toString()
        .split('')
        .reduce((acc, digito) => acc + parseInt(digito), 0);
}

// Verificar si dos cadenas de texto son anagramas entre sí.
export function esAnagrama(cadena1: string, cadena2: string): boolean {
    const ordenar = (cadena: string) => cadena.split('').sort().join('');
    return ordenar(cadena1) === ordenar(cadena2);
}

// Escribe una función que determine si un número es perfecto.
export function esNumeroPerfecto(n: number): boolean {
    let suma = 0;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) suma += i;
    }
    return suma === n;
}

// Crea una función que reciba un número entero positivo y devuelva su representación en binario.
export function convertirABinario(n: number): string {
    return n.toString(2);
}

// Escribe una función que determine si una cadena es un pangrama.
export function esPangrama(cadena: string): boolean {
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';

    // Normalizar la cadena: convertir a minúsculas y eliminar acentos
    const cadenaNormalizada = cadena
        .toLowerCase()
        .normalize('NFD') // Descompone caracteres como 'á' en 'a' + un modificador
        .replace(/[\u0300-\u036f]/g, ''); // Elimina los modificadores (acentos)

    // Comprobar si contiene todas las letras del alfabeto
    return alfabeto.split('').every((letra) => cadenaNormalizada.includes(letra));
}


//Capacidad 
export function clasificarEdades(edades: number[]): [number, number] {
    let menoresDe21 = 0;
    let mayoresOIgualA21 = 0;

    edades.forEach(edad => {
        if (edad < 21) {
            menoresDe21++;
        } else {
            mayoresOIgualA21++;
        }
    });

    return [menoresDe21, mayoresOIgualA21];
}