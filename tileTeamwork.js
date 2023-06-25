//edabit medium level, dont understand what they want
//had to research on chatbpt
//to determine whether it's possible to earn a bonus by reaching your
//friends tile number on the next roll, you need to check if the 
//absolute difference between your position and your friend's
//position is within the range if 1-6

const possibleBonus = (a,b) => {
    const difference = Math.abs(a - b);
    return difference > 0 && difference <= 6;
}
//examples
console.log(possibleBonus(3,7));//true
console.log(possibleBonus(1,9));//false
console.log(possibleBonus(5,3)); //true
