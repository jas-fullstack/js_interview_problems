# Interview Problems Collection

A curated list of programming problems and solutions, designed to help prepare for technical interviews.  

---

## Table of Contents
1. [Tips and Tricks](#tips-and-tricks)
2. [Problems List](#problems-list)

---

## Tips and Tricks

- **Sub Array Tip:** Create two nested loops and use the `splice` method to generate all possible subarrays. see problem 5

---

## Problems List

| #   | Title                          | Category       | Difficulty | Solution Link            |
|-----|--------------------------------|----------------|------------|--------------------------|
| 1   | Find Second Largest            | Arrays         | Easy       | [View Solution](#find-second-largest)|
| 2   | find frequency of each element | Arrays         | Easy       | [View Solution](#Find-frequency-of-element)|
| 3   | move all zero to end           | Arrays         | Easy       | [View Solution](#Move-all-zero-to-end)|
| 4   | Reverse and array              | Array          | Easy       | [View Solution](#Reverse-an-array)|
| 5   | Find sec largest val           | Array          | Easy       | [View Solution](#find-sec-largest)|
---

## Problem 1: Find Second Largest

**Category:** Arrays  
**Difficulty:** Easy  

#### Problem Statement  
Given an array, find the second largest element.  

#### Example Input/Output  
```javascript
let values = [10,20,30,60,50]
let largest = 0;
let secLargest = 0;
for(let i = 0 ; i < values.length; i++ ){
    if(largest < values[i]){
        largest = values[i]
        secLargest = largest
    }else if(largest > values[i] ){
        secLargest = values[i]
    }
    
}
 
console.log(largest,secLargest)
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
    if(typeof obj[ele] == "undefined" ){
        obj[ele] = 1
    }else{
        obj[ele]++
    }
});

let maxVal = 0;
let keyVal = 0
for (let key in hash) {
    
   if(maxVal < hash[key]){
       maxVal = hash[key]
       keyVal = key
   }
}
console.log("key Val------->",keyVal,"maxVal--------->",maxVal)```
```
## Problem 3:
## Move all zero to end
**Category:** Arrays  
**Difficulty:** Easy  

#### Problem Statement  
Given an array, move all zero to the end.  

#### Example Input/Output  
```javascript
let arr = [0,10,0,20,50,5,0,0,8];
let z = 0
let nz = 0;
let temp;
while(arr.length > nz ){
    if(arr[nz] !== 0 )
    {
        temp = arr[nz]; 
        arr[nz] = arr[z];
        arr[z] = temp;
        z++
        nz++
    }
    else
    {
      nz++
    }
}
console.log(arr)

```
## Problem 4:
#### Problem Statement  
#### Reverse an array

#### Example Input/Output  
```javascript
let arr = [10,2,5,20,23,53,54];
let low = 0;
let high = arr.length - 1;

while(low < high) {
    let temp = arr[low]
    arr[low] = arr[high]
    arr[high] = temp
    low++
    high--
}
console.log("arr------->",arr)```

```
## Problem 5:
#### Problem Statement  
#### to find the largest subarray in an integer array that has a sum of 0.

#### Example Input/Output  
```
let data = [3, 4, -7, 3, 1, 3, 1, -4, -2, -2];

let largestSubarray = [];   
let maxLength = 0;   

for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j <= data.length; j++) {
        let subarray = data.slice(i, j);
        let sum = subarray.reduce((acc, cur) => acc + cur, 0);   
   
        if (sum === 0 && subarray.length > maxLength) {
           
            largestSubarray = subarray;
            maxLength = subarray.length;
        }
    }
}

console.log("Largest Subarray with sum 0:", largestSubarray);


