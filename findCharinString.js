let num = "this is the test";
let hash = {}
function findNumberOFacc(num) {
    for (let index = 0; index < num.length; index++) {
        const element = num[index];

        if (hash[element] == undefined) {
            hash[element] = 1
        } else {
            hash[element]++
        }
    }
    let max = 0;
    let key = ""
    Object.keys(hash).forEach(data => {
        if (max < hash[data]) {
            max = hash[data]
            key = data
        }
    })
    console.log(key, "is the maximum number with ", max, " times")
}
findNumberOFacc(num)