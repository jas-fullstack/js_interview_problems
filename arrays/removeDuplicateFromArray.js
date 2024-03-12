//Remove duplicate values from array...and keep the array size same....
let arr = [10,20,20,30,30,30];
let counter=0
function removeDup(arr) {
    for(let i =0 ; i < arr.length ; i++){
        if(arr[i]  == arr[++counter])
        {
            
            delete arr[counter];     
        }
    }
    return arr;
}
console.log(removeDup(arr));