//edabit easy level, Had to use chat gpt
//understand problem just dont know 
//how to solve
const potatoes = (str) => {
    const regex = /potato/gi;
    const matches = str.match(regex);

    return matches ? matches.length : 0;
}
//examples
console.log(potatoes("potato"));//output 1
console.log(potatoes("potatoPotato"));//output 2
console.log(potatoes("potatoapple"));//output 1

//needed to use chatgpt
//had to look up the meaning of /gi
// g is global to match all occurrenceds of the word potato
//i is for case insensitive so we could look for 
//potato or Potato
//use regex when you are looking for some type of 
//pattern or match
