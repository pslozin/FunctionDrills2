// Write your code below
const hasUnique = (str) =>{

    for(i = 0; i < str.length; i ++){
        for (j = i + 1; j < str.length; j++){
            if(str[i] === str[j]){
                return false
            }
        }
    }
    return true

}

console.log(hasUnique("Monday"))
console.log(hasUnique("Moonday"))
console.log(hasUnique("Bob"))

