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
 

## Problem 1: Find Second Largest
**Category:** Arrays  
**Difficulty:** Easy    
Problem Statement : Given an array, find the second largest element.  
 
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

## Problem 2:  Find frequency of element 
**Category:** Arrays  
**Difficulty:** Easy  
  
Problem Statement : Given an array, find the frequency of each element.  

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
## Problem 3: Move all zero to end
**Category:** Arrays  
**Difficulty:** Easy  
Problem Statement : Given an array, move all zero to the end.  
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
## Problem 4:Reverse an array
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
## Problem 5: Find the largest subarray in an integer array that has a sum of 0.
```javascript
let arr = [-2,-4];
let sum = -Infinity;
let arrVal;
for(let i = 0 ; i < arr.length ; i++){
    for (let j = i; j < arr.length; j++) {
     let subArr = arr.slice(i,j+1)
     let sumVal = subArr.reduce((pre,cur)=> pre+cur,0)
     if( sum < sumVal ){
        sum = sumVal
        arrVal = subArr
     }
     
    }
}
console.log(`Max sum val is ${sum} of sub array ${arrVal}`)

```
## Problem 6:Check if array is sorted or not.  
```javascript
let data = [10,10,20,10,30,50,60];
let first = 0 
let sec = 1;
let isSorted = true
for(let i = 0; i < data.length ; i++){
    if(data[first] > data[sec]){
        isSorted = false
        break;
    }
    first++
    sec++
}
console.log(isSorted)


```
## Problem 7: Rotate array by given number 

```javascript
let data = [1,2,3,4,5];
let rotate = 2;
let rotatedVal = [];
//run loop start how many values should rotate
for(let i = rotate ; i < data.length ; i++){
    rotatedVal.push(data[i])
}
//run till how mnay values need to rotate
for(let i = 0 ; i < rotate ; i++){
    rotatedVal.push(data[i])
}
console.log(rotatedVal)

```
## Problem 8: Find the leaders in the array   
```javascript
let arr = [7,10,10,4,6,5];
let leaders = new Set();
for(let i = 0 ; i < arr.length ; i++){
   for(let j = i ; j < arr.length ; j++){
      if(arr[i] > arr[j] || (arr.length - 1)  == i ){
        leaders.add(arr[i])
        break;
      }
  } 
}
console.log([...leaders])


```
## Problem 9: Two sum problem with time complexity o(n)
 
```javascript
let arr = [10, 20, 35, 50,11,67];
let target = 78;

function sum(arr,target){
    let map1 = new Map(); //to store key => values pairs..
    for(let i = 0 ; i < arr.length ; i++){
        let complement = target - arr[i];     //here we have to find the complement value from the array
        if(map1.has(complement)){
            return [map1.get(complement),i] //return if Map has complement value..
        }
        map1.set(arr[i],i)    //store key value pairs here..
   }
}
console.log(sum(arr,target))
```
## Problem 10: reverse Vowels O(N)
 
```javascript

let s = "leetcode";
function reverseVowels(s){
    
    s = s.split("")
    let left = 0;
    let right = s.length -1;
    while(left < right){
     
        if(isVowels(s[left]) && isVowels(s[right]) ){
           let valOne = s[left];
            s[left] = s[right];
            s[right] = valOne
            left++;  
            right--
        } 
        else if(!isVowels(s[left])) {
            left++
        }else{
            right--
        }
    }   

    function isVowels(curEle){
        if(curEle == 'a' || curEle == 'e' || curEle == 'i' || curEle == 'u' || curEle == 'A' || curEle               == 'E' || curEle == 'I' || curEle == 'O' || curEle == 'U'){
            return true;
        }
        return false
    }
    return s.join("")
}

console.log("final--------->",reverseVowels(s))
```
## Problem 11: Reverse Words in a String
 Leet code solution Link : https://leetcode.com/problems/reverse-words-in-a-string/submissions/1505952408
```javascript
let str = "the sky is blue";
str = str.split(" ");
let arr = []
for(let i = str.length - 1; i >= 0 ; i-- ){
    if(str[i] != ""){
        arr.push(str[i]);
    }
    
}
console.log(arr.join(" "))
```
## Problem 12: FizzBuzz Problem
Leet code solution Link : https://leetcode.com/problems/fizz-buzz/submissions/1595519069
```
var fizzBuzz = function(n) {
    let arr = []
    for(i = 1; i <= n ; i++){
        if(i % 5 == 0 && i % 3 == 0){
            arr.push("FizzBuzz")
        }else if(i % 3 == 0){
            arr.push("Fizz")
        }else if(i % 5 == 0){
            arr.push("Buzz")
        }else{
            arr.push(i.toString())
        }
    }
    return arr
};
```
## Problem 13: Number of steps to reach the 0
```
var numberOfSteps = function(num) {
    let ans = num;
    let step = 0;
    while(ans != 0){
        if(ans % 2 == 0){
          ans = ans/2  
        }else{
            ans = ans-1
        }
        step++
    }
    return step
};
```


## Problem 13: Romon to integer 
```javascript
var romanToInt = function(s) {
    let obj = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    
    let val = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] < obj[s[i + 1]]) {
            val -= obj[s[i]];
        } else {
            val += obj[s[i]];
        }
    }
    return val;
};

```


