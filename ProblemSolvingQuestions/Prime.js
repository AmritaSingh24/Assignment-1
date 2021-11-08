// Write a program to print prime numbers from 1-100.

function primeNumber (limit){

    for(let number = 2; number <= limit; number++)  // Prime number start from 2.
        if(isPrime(number))
        console.log(number);

 }

 function isPrime (number){

    for(let factor = 2; factor < number; factor++) // Every number divisible by 1. So, factory is start from 2.
        if(number % factor === 0)
        return false
    return true;

 }

 primeNumber(100);