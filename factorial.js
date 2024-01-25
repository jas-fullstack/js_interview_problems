function factFN(num){
    if(num == 0){
        return 1
    }
    return num * factFN(num-1);
}

console.log(factFN(5))