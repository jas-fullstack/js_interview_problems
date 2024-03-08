let arr = [10,20,30];
let indexAdd = 1;
let output = "array is sorted"
for(i=0;i<= arr.length -1 ; i++){
        
        if(arr[i] > arr[indexAdd++]){
              output = "array is not sorted";    
        }
}
console.log(output)