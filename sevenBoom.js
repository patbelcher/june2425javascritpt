/*hard level on edabit
Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. 
Otherwise, return "there is no 7 in the array".
*/
const sevenBoom = (arr) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 7 || String(arr[i]).includes("7")){
            return "Boom";
        }
    }
    return "There was no 7 in the array";
}

//examples
const array1 = [1, 2, 3, 4, 5, 6, 7];
console.log(sevenBoom(array1));

const array2 = [11, 222, 34, 45, 56, 64, 86];
console.log(sevenBoom(array2));

const array3 = [1, 26, 36, 421, 51, 65, 97];
console.log(sevenBoom(array3));
