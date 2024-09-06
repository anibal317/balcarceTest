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