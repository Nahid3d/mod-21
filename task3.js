function countVowles(str){
const vowle =['a','e','i','o','u'];
    let count = 0;
    for(char of str){
        if(vowle.includes(char)){
            count++;
        }
    }
    return count;
}
const inputstr ='Hello world';
const result = countVowles(inputstr);
console.log("vowel :",result)