// Write a program to print Fibonacci Sequence.
// - 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610.

let a = 0 
let b = 1;
let limit = 15;

console.log(a);
console.log(b);

for(let i = 2; i<=limit; i++){

    let c = a + b;
    a = b;
    b = c;
    console.log(c);
    
}