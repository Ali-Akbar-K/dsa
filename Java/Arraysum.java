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

public class ArraySum {
    
    // Method to calculate sum
    static int findSum(int[] arr) {
        int sum = 0;  // Start with 0
        
        // Loop through each element
        for (int i = 0; i < arr.length; i++) {
            sum = sum + arr[i];  // Add current element to sum
        }
        
        return sum;
    }
    
    // Test the function
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        
        int result = findSum(arr);
        
        System.out.println("Array: [1, 2, 3, 4, 5]");
        System.out.println("Sum: " + result);
        
        // Test with more examples
        int[] arr2 = {10, 20, 30};
        System.out.println("\nArray: [10, 20, 30]");
        System.out.println("Sum: " + findSum(arr2));
        
        int[] arr3 = {5};
        System.out.println("\nArray: [5]");
        System.out.println("Sum: " + findSum(arr3));
    }
}

/**
 * How to Run:
 * 1. Open Command Prompt
 * 2. Navigate to your Java folder: cd dsa-learning\Java\01_Arrays
 * 3. Compile: javac ArraySum.java
 * 4. Run: java ArraySum
 * 
 * Expected Output:
 * Array: [1, 2, 3, 4, 5]
 * Sum: 15
 * 
 * Array: [10, 20, 30]
 * Sum: 60
 * 
 * Array: [5]
 * Sum: 5
 */
