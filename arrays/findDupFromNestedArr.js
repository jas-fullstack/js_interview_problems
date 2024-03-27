let arr  = [[19,20,12,20],8,10,[[10,20,[90,90]],20,19,10],[11,23]];
let hash = {}
function checkDup(arr) {
 
    arr.map(nesArr=> {

        if(typeof nesArr == 'object'){
            checkDup(nesArr)
        } else {

           if(hash[nesArr] == undefined){
                   hash[nesArr] = 1
           }else{
                     hash[nesArr]++
           }
        }
    })
    return hash
}
console.log(checkDup(arr));