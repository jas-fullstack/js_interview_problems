let word1 = ["ab", "c"] 
let word2 = ["a", "bc"]
 function checkIfEqual(word1,word2){
    if(concatWord(word1) !== concatWord(word2)){
        return false
    }
    return true;
 }
 function concatWord(word){
       let concatedString='';
       for(let i= 0; i < word.length; i++ ){
            concatedString += word[i]
       }
        
       return concatedString;
 }
 console.log(checkIfEqual(word1,word2));