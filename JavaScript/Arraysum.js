/**
 * Problem 1: Sum of All Elements in Array
 * 
 * Question: Given an array of integers, find the sum of all elements.
 * Example: [1, 2, 3, 4, 5] → Output: 15
 * 
 * Approach: Loop through each element and add to sum
 * Time Complexity: O(n) - we visit each element once
 * Space Complexity: O(1) - only using one variable
 */

// Method 1: Using for loop
function findSum(arr) {
    let sum = 0;  // Start with 0
    
    // Loop through each element
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];  // Add current element to sum
    }
    
    return sum;
}

// Method 2: Using reduce (functional approach)
function findSumReduce(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Method 3: Using built-in sum (if available)
function findSumBuiltin(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

// Test the function
console.log("=== Test Cases ===\n");

let arr1 = [1, 2, 3, 4, 5];
console.log(`Array: [${arr1}]`);
console.log(`Sum: ${findSum(arr1)}`);

let arr2 = [10, 20, 30];
console.log(`\nArray: [${arr2}]`);
console.log(`Sum: ${findSum(arr2)}`);

let arr3 = [5];
console.log(`\nArray: [${arr3}]`);
console.log(`Sum: ${findSum(arr3)}`);

let arr4 = [-1, -2, 5, 3];
console.log(`\nArray: [${arr4}]`);
console.log(`Sum: ${findSum(arr4)}`);

/**
 * How to Run:
 * 1. Open Command Prompt
 * 2. Navigate to your JavaScript folder: cd dsa-learning\JavaScript\01_Arrays
 * 3. Run: node arraySum.js
 * 
 * Expected Output:
 * === Test Cases ===
 * 
 * Array: [1,2,3,4,5]
 * Sum: 15
 * 
 * Array: [10,20,30]
 * Sum: 60
 * 
 * Array: [5]
 * Sum: 5
 * 
 * Array: [-1,-2,5,3]
 * Sum: 5
 */