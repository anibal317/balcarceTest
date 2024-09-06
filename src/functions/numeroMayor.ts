export function numeroMayor(arr: number[]): number {
    let mayor = arr[0];
    for (let num of arr) {
        if (num > mayor) {
            mayor = num;
        }
    }
    return mayor;
}