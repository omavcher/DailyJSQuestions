// Question: Write a function reverseString that takes a string as input and returns the reversed string.
// Example Input: "hello"
// Expected Output: "olleh"

let input = "hello"; 

function reverseString(input){   
    let  output = input.split('').reverse().join('')
return output;
}

console.log(reverseString(input));