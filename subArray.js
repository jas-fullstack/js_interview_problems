//print possible subArray of array
let arr = [1,2,3];
for(let i = 0 ; i < arr.length;i++){
    for(let j = i ; j < arr.length; j++){
        console.log("sub---->",printSubArray(i,j,arr))
    }    
}
function printSubArray(i,j,arr){
    let array = []
    for(let y = i; y <= j ; y++  ){
         array.push(arr[y])
    }
    return array;
}