function Rotate(arr,d,n)
 {
   
    var temp=[];                        //To store the result.
    let k = 0;                          //temp index that will use in both loops
    
   for (let i = d; i < n; i++) {        //start loop from d. 
        temp[k] = arr[i];               //get data from starting d and push until end
        k++;
    }
 
    for (let i = 0; i < d; i++) {      //run loop d times

        temp[k] = arr[i];             //get first two who skipped in last loop
        k++;

    }
   console.log(temp)
 }
 
let arr = [ 1, 2, 3, 4, 5, 6, 7 ];
let n = arr.length;
let d = 2; //number of times rotating the array. 
Rotate(arr, d, n);