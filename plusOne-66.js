/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let sum = "";
    for(let i = 0 ; i < digits.length;i++){
         
        sum += digits[i]
    }
    sum = BigInt(sum) + 1n //this is important
    sum = sum.toString();
    let arr = []
    for(let j=0; j<sum.length; j++){
        arr.push(Number(sum[j]))
    }
    return arr
};