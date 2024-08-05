// Question: Write a function removeDuplicates that removes duplicate elements from an array and returns the array with only unique elements.
// Example Input: [1, 2, 3, 2, 4, 3, 5]
// Expected Output: [1, 2, 3, 4, 5]


function removeDuplicates(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

let input = [1, 2, 3, 2, 4, 3, 5];
console.log(removeDuplicates(input));
