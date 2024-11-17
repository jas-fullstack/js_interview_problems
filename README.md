# Interview Problems Collection

A curated list of programming problems and solutions, designed to help prepare for technical interviews.  

---

## Table of Contents
1. [Tips and Tricks](#tips-and-tricks)
2. [Problems List](#problems-list)

---

## Tips and Tricks

- **Sub Array Tip:** Create two nested loops and use the `splice` method to generate all possible subarrays.

---

## Problems List

| #   | Title                          | Category       | Difficulty | Solution Link            |
|-----|--------------------------------|----------------|------------|--------------------------|
| 1   | Find Second Largest            | Arrays         | Easy       | [View Solution](#problem-1)|

---

<details>
<summary><b>Problem 1: Find Second Largest</b></summary>

**Category:** Arrays  
**Difficulty:** Easy  

#### Problem Statement  
Given an array, find the second largest element.  

#### Example Input/Output  
```javascript
let arr = [10, 29, 19, 80, 70, 32];
arr.sort();
let firstLargest = arr[arr.length - 1];
let secLargest = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secLargest && arr[i] != firstLargest) {
        secLargest = arr[i];
    }
}
console.log(secLargest); // Output: 70
