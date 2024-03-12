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