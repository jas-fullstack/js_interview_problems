let arr = [1,2,3,4,5,5];
let temp = arr[0];  //
let n = 1
for(i=1;i<arr.length;i++){
       arr[i - 1] = arr[i]
}
arr[arr.length - 1 ] = temp
console.log(arr) //[ 2, 3, 4, 5, 1 ]