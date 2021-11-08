// Write a program to print a star-triangle pattern.
// *
// * *
// * * *
// * * * *
// * * * * *

function showStars (rows){

    for(let row = 1; row <= rows; row++){
        let pattern = "";

        for(let i = 0; i< row; i++)
            pattern  = pattern + "*"
            // pattern += '*';
            console.log(pattern);
            
    }

}

showStars(5);