function odd_avarase(numbers){
    const odd =[];
    for(Number of numbers){
        if(Number % 2 === 1){
        // console.log(odd)
        odd.push(Number);
        }
    }
    // odd number program 
    let sum =0;
    for(const number of odd){
        sum = sum + number;

    }
    const count =odd.length;
    const avg = sum / count;
    console.log(sum,count);
    return avg;


}
const numbers =[35,22,14,21,31,59,99,87,88,44,555,521];
const avg = odd_avarase(numbers);
console.log("abarage of the odd number is:" , avg);