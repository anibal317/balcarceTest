export function sumaNumerosNaturales(n: number): number {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
    }
    return suma;
}
