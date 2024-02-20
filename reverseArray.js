//reverse an array..
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
console.log("arr------->",arr)