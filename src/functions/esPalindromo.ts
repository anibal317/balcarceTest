export function esPalindromo(palabra: string): boolean {
    const palabraInvertida = palabra.split('').reverse().join('');
    return palabra === palabraInvertida;
}