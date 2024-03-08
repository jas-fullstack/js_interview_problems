let data = [10,20,25,30,5,20];
let largest = data[0]
let secLargest = data[0]
for(i=0; i <= data.length-1;i++){
    
    if(largest < data[i])
    {
        secLargest = largest
        largest = data[i];
    }
    else if(data[i] > secLargest && data[i] !== largest)
    {
        secLargest = data[i];
    }
    
    
}
console.log(largest,secLargest)