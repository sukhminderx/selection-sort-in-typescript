export class SelectionSort {

    constructor(val: Array<number>) {
        console.log(val);
        this.sort(val);
        console.log(val);
    }

    sort(a: Array<number>) {
        let size = a.length;
        for(let i=0;i<size; i++) {
            let indexOfMin = i;
            for(let j=i+1;j<size; j++) {
                (a[j]<a[indexOfMin]) && (indexOfMin=j);                
            }
            // swap
            [a[i], a[indexOfMin]]=[ a[indexOfMin], a[i]];
        }
    }

}