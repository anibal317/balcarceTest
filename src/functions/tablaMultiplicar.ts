
export function tablaMultiplicar(n: number): string[] {
    let arr:string[] = []
    for (let i = 1; i <= 10; i++) {
        arr.push(`${n} x ${i} = ${n * i}`)
        // console.log(`${n} x ${i} = ${n * i}`);
    }
    return arr;
}