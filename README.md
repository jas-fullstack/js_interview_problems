# Interview Problems Collection

A curated list of programming problems and solutions, designed to help prepare for technical interviews.  

---

## Table of Contents
1. [Tips and tricks](#tipsandtricks)
---

## tipsandtricks

**Sub Array Tip:** Create two nested loops and use splice method to make all possible subarrays. 
---

## Problem Format

Each problem follows a consistent format:

- **Title:** A brief title of the problem.
- **Category:** Algorithms, Data Structures, System Design, etc.
- **Problem Statement:** A clear description of the problem.
- **Example Input/Output:** One or more examples illustrating the problem.
- **Solution Approach:** Explanation of the thought process behind solving the problem.
- **Code:** The actual implementation of the solution in the chosen programming language.
- **Complexity Analysis:** Time and space complexity of the solution.

---

## Problems List

| #   | Title                          | Category       | Difficulty | Solution Link            |
|-----|--------------------------------|----------------|------------|--------------------------|
| 1   | find sec Largest               | Arrays         | Easy       | [View Solution](#find-sec-largest)|
 
---

## Array problem

### find-sec-largest
**Category:** Arrays  
**Difficulty:** Easy  

#### Problem Statement  
Given an array find the sec largest element. 

#### Example Input/Output  
```text
let arr = [10,29,19,80,70,32];
arr.sort();
let firstLargest = arr[arr.length-1];
let secLargest = 0;
for(i=0; i < arr.length;i++)
{
    if(arr[i] > secLargest &&  arr[i] != firstLargest)
    {
        secLargest = arr[i];
    }
}
console.log(secLargest) //70
