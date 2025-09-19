function chk(){

    let str = "{[}]";
    let stack = [];
    let hash = {
        "}" : "{",
        "]" : "[",
        ")" : "(",
        
    };

    for(let i = 0 ; i < str.length; i++){
       
        if(str[i] == "{" || str[i] == "[" || str[i] == "(" ){
            
            stack.push(str[i]);
        }
        else if(str[i] == "}" || str[i] == "]" || str[i] == ")" )
        {    
           
            if(stack.pop() != hash[str[i]]){
                return false;
            }
           
        }
         
    }
     
    return stack.length ? false: true;
}
console.log(chk())