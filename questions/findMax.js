// Question: Write a function findMax that takes an array of numbers and returns the largest number.
// Example Input: [3, 7, 2, 5, 9]
// Expected Output: 9

let input = [3,7,2,5,9];

function findMax (input){
    let max = 0;
    for(let i = 0; i< input.length; i++){
           if(max < input[i]){
            max = input[i];
           }
    }
    return max
}

console.log(findMax(input));