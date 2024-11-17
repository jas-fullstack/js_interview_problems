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
| 1   | Find Second Largest            | Arrays         | Easy       | [View Solution](#find-second-largest)|
| 2   | find frequency of each element | Arrays         | Easy       | [View Solution](#Find-frequency-of-element)|

---

## Problem 1: Find Second Largest

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
```

## Problem 2:
## Find frequency of element
**Category:** Arrays  
**Difficulty:** Easy  

#### Problem Statement  
Given an array, find the frequency of each element.  

#### Example Input/Output  
```javascript
let arr  = [10,10,20,11,23,23,23,23,23];
let obj = {}
arr.map(ele=>{
    if(typeof obj[ele] == "undefined" m){
        obj[ele] = 1
    }else{
        obj[ele]++
    }
});
console.log(obj) //{ '10': 2, '11': 1, '20': 1, '23': 5 }

