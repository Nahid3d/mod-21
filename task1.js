// তাপমাত্রা সেলসিয়াস থেকে ফারেনহাইটে রূপান্তরের জন্য একটি ফাংশন লেখ।
function culcaseToFarinhie(calcuas){
    let feranhite =(calcuas * 5 / 9)+ 32;
    return feranhite;
}
const calcuasfar = 40;
const total = culcaseToFarinhie(calcuasfar);
console.log('farenhite',total , calcuasfar,"calculas");
