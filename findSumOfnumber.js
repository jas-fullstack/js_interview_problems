let sum = 0
function sumOfDigits(integer) {
    console.log(integer.length)
    if(integer == 0){
        return sum
    }
    let last_number =  integer%10;
    integer = parseInt(integer/10);
    sum += last_number;

    return sumOfDigits(integer)

}

console.log(sumOfDigits(567));

