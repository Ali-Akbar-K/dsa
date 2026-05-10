"""
Problem 1: Sum of All Elements in Array

Question: Given an array of integers, find the sum of all elements.
Example: [1, 2, 3, 4, 5] → Output: 15

Approach: Loop through each element and add to sum
Time Complexity: O(n) - we visit each element once
Space Complexity: O(1) - only using one variable
"""

def find_sum(arr):
    """
    Calculate the sum of all elements in array
    
    Args:
        arr: list of integers
        
    Returns:
        sum: integer sum of all elements
    """
    sum_value = 0  # Start with 0
    
    # Loop through each element
    for num in arr:
        sum_value = sum_value + num  # Add current element to sum
    
    return sum_value


def find_sum_builtin(arr):
    """
    Alternative approach: Using Python's built-in sum() function
    (In interviews, they may ask you to do it WITHOUT using built-in)
    """
    return sum(arr)


# Test the function
if __name__ == "__main__":
    arr = [1, 2, 3, 4, 5]
    result = find_sum(arr)
    
    print(f"Array: {arr}")
    print(f"Sum: {result}")
    
    # Test with more examples
    arr2 = [10, 20, 30]
    print(f"\nArray: {arr2}")
    print(f"Sum: {find_sum(arr2)}")
    
    arr3 = [5]
    print(f"\nArray: {arr3}")
    print(f"Sum: {find_sum(arr3)}")
    
    arr4 = [-1, -2, 5, 3]
    print(f"\nArray: {arr4}")
    print(f"Sum: {find_sum(arr4)}")

"""
How to Run:
1. Open Command Prompt
2. Navigate to your Python folder: cd dsa-learning\Python\01_Arrays
3. Run: python array_sum.py

Expected Output:
Array: [1, 2, 3, 4, 5]
Sum: 15

Array: [10, 20, 30]
Sum: 60

Array: [5]
Sum: 5

Array: [-1, -2, 5, 3]
Sum: 5
"""