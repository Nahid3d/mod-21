function even_average(numbers){
    const even =[];
    for(numbe of numbers){
        if(numbe % 2 === 0){
            // console.log(numbe)
            even.push(numbe);
            // console.log(even);
        }
    }
    let sum = 0;
    for(const numbe of even){
        sum = sum + numbe;
    }
    const count = even.length;
    const avg = sum / count;
    console.log(sum, count);
    return avg;
}
const number =[12,14,25,36,33,21,66,58,96,69,87,78,41,14,25,52];
const evenet = even_average(number);
console.log("this is a even number is :", evenet);
