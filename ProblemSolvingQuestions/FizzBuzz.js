//Write a program that prints each number from 1 to 100 on a new line.
// - For each multiple of 3, print "Fizz" instead of the number.
// - For each multiple of 5, print "Buzz" instead of the number.
// - For numbers which are multiples of both 3 and 5, print "FizzBuzz"
// instead of the number.

let limit = 100;

function fizzBuzz (input) {

    if (typeof input !== "number")
    return "NaN"; // For String.
    if ((input % 3=== 0) && (input % 5 ===0)) return "FizzBuzz";
    if ( input % 3 === 0) return "Fizz";
    if (input % 5 === 0) return "Buzz";
    return input;

}

for (i = 1; i <= limit; i++){
    console.log(fizzBuzz(i));
}