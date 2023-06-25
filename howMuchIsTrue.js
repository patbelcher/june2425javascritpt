/*Create a function which returns the number of true values there are in an array.
Medium level on edabit
Examples
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
Notes
Return 0 if given an empty array.
All array items are of the type bool (true or false).*/
const countTrue = (arr) => {
    //used to reduce the number of true values 
    const count = arr.reduce((acc, val)=> acc + (val === true ? 1 : 0),0);
    return count;
}

//example outputs
const array1 = [true, false, false, false, true];
console.log(countTrue(array1));//output 2 (true in array)

const array2 = [false, false, false, false, true];
console.log(countTrue(array2));//output 1 (true in array)

const array3 = [];
console.log(countTrue(array3));//output 0 (true in array)
