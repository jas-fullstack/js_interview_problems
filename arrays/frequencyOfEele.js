
let arr  = [10,10,20,11,23,23,23,23,23];
let obj = {}
arr.map(ele=>{
    console.log(obj[ele])
    if(typeof obj[ele] == "undefined" ){
        obj[ele] = 1
    }else{
        obj[ele]++
    }
});
console.log(obj) //{ '10': 2, '11': 1, '20': 1, '23': 5 }