function noDuplicate(numbers){
    const unic =[];
    for(const item of numbers){
        if(unic.includes(item) === false){
            unic.push(item);
        }
    }
    return unic;

}
const number =[1,5,8,78,1,5,7,8,65,96,58,77,58];
const allNumber = noDuplicate(number);
console.log(allNumber);