let data = [3,1,5,2,7];
let primeArray = [];
data.map((val,index) =>{
    if(index % 2 == 0)
    {
        primeArray.push(val);
    }
});
primeArray = primeArray.reverse()
let counter = 0;
data.map((index) =>{
    if(index % 2 == 0)
    {
        data[index] = primeArray[counter]
        counter++  
    }
});
console.log("data----------->",data)