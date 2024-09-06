export function esPrimo(n: number): boolean {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(esPrimo(7)); // true
console.log(esPrimo(10)); // false
