// Question: Create a function isPalindrome that checks whether a given string is a palindrome.
// Example Input: "madam"
// Expected Output: true

let Input = "madam";

function isPalindrome(input) {
    input = input.toLowerCase();
    
    let length = input.length;

    for (let i = 0; i < length / 2; i++) {
        if (input[i] !== input[length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(isPalindrome(Input)); 
