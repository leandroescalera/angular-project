export function whatsMyType<T>(argument: T): T {
    return argument;
}

let amIString = whatsMyType('Hello World');
let amINumber = whatsMyType(100);
let amIArray = whatsMyType([1, 2, 3, 4, 5]);

console.log(amIString.split(' ')); // ['Hello', 'World']
console.log(amINumber.toFixed()); // 100 
console.log(amIArray.join('-')); // 1-2-3-4-5
