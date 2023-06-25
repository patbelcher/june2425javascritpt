/*you will be given an array of drinks, 
each drink being an object with two properties:
name and price. Create a function that has the 
drinks array as an argument and return the drinks
objects sorted by price in ascending order */

const  sortDrinkByPrice = (drinks) => {
    //sort the drinks array by price in ascending order
    drinks.sort((a,b) => a.price - b.price);
    return drinks;
}

//examples  - the are objects
const drinks = [
    {name: "Dos XX", price: 3.50},
    {name: "Torpedo Double IPA", price: 6.00},
    {name: "Rum Runner", price: 8.00}

]

const sortedDrinks = sortDrinkByPrice(drinks)
console.log(sortedDrinks)