//the is an interviw question
const sumArray = (arr) => {
    let sum = 0;
    for (let i= 0; i < arr.length; i++){
        sum += arr[i];
        
    }
    return sum;
}

const mySumArray = sumArray([1, 2, 3, 4, 5])
console.log(mySumArray)