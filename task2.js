// আপনাকে সংখ্যার একটি অ্যারে দেওয়া হয়েছে। অ্যারেতে একটি সংখ্যা কতবার পুনরাবৃত্তি হয়েছে তা গণনা করুন।

// নমুনা-ইনপুট: সংখ্যা = [5,6,11,12,98, 5]

// খুঁজুন: 5

// আউটপুট: 2


// নমুনা-ইনপুট:

// সংখ্যা = [5,6,11,12,98, 5]

// খুঁজুন: 25

// আউটপুট: 0


function countCal(numbers , target){
    let count = 0;
    for(let i =0;i < numbers.length;i++){
        if(numbers[i] === target){
            count++;

        }
    }
    return count;
}
let countnumb1 =[5,6,11,12,98, 5];
let target1 =5;
let result = countCal(countnumb1, target1);
console.log(result);

// second 
let countnumb2 =[5,6,11,12,98, 5];
let target2 = 25;
let result2 = countCal(countnumb2,target2);
console.log(result2);