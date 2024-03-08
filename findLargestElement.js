let arr = [10,20,30,103,58];
let output = arr.reduce((pre,cur)=>{
    console.log(pre, cur)
    if(pre < cur){
        pre = cur
    }
    return pre 
}, 0);
console.log("output--------------->",output)