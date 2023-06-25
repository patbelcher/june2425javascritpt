/*you will be given an array of drinks, 
each drink being an object with two properties:
name and price. Create a function that has the 
drinks array as an argument and return the drinks
objects sorted by name in ascending order */
const sortDrinkByName = (drinks) => {
    //sort the drinks array by name in ascending order
    drinks.sort((a, b) => a.name.localeCompare(b.name));
    return drinks;
}

//examples  - the are objects
const drinks = [
    {name: "Dos XX", price: 3.50},
    {name: "Torpedo Double IPA", price: 6.00},
    {name: "Rum Runner", price: 8.00},
    {name: "Navy Grog", price: 7.00},
    {name: "Mai Tai", price: 9.00}

]

const sortedDrinks = sortDrinkByName(drinks)
console.log(sortedDrinks)