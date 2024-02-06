function lipear(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }

}
const lipi = lipear(2056);
console.log(lipi);