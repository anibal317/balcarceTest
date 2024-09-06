export function sumaNumerosNaturales(n: number): number {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
    }
    return suma;
}

export function esPrimo(n: number): boolean {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

export function invertirCadena(cadena: string): string {
    return cadena.split('').reverse().join('');
}

export function contarVocales(cadena: string): number {
    let cuenta = 0;
    const vocales = "aeiouAEIOU";
    for (let char of cadena) {
        if (vocales.includes(char)) {
            cuenta++;
        }
    }
    return cuenta;
}

export function numeroMayor(arr: number[]): number {
    let mayor = arr[0];
    for (let num of arr) {
        if (num > mayor) {
            mayor = num;
        }
    }
    return mayor;
}

export function tablaMultiplicar(n: number): string[] {
    let arr:string[] = []
    for (let i = 1; i <= 10; i++) {
        arr.push(`${n} x ${i} = ${n * i}`)
        // console.log(`${n} x ${i} = ${n * i}`);
    }
    return arr;
}

export function esPalindromo(palabra: string): boolean {
    const palabraInvertida = palabra.split('').reverse().join('');
    return palabra === palabraInvertida;
}

export function celsiusAFahrenheit(celsius: number): number {
    return (celsius * 9 / 5) + 32;
}

export function filtrarPares(arr: number[]): number[] {
    return arr.filter(num => num % 2 === 0);
}

export function factorial(n: number): number {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}