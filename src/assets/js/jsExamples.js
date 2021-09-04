
// .reverse()
//console.log(['a', 'b', 'c', 'd'].reverse()); // [ 'd', 'c', 'b', 'a' ]

// Creating objecst via es6
class Cat {
    constructor(name, color) {
        this.name = name;
        this.color = this.color;
    }
    makeSound() {
        console.log('meow!');
    }
}
const cat = new Cat('LuckyChance', 'gray');
//console.log(cat.makeSound());

let myArray = [1, 2, 3];
myArray.push(4);
// console.log(myArray); // [ 1, 2, 3, 4 ]

const pets = ['cat', 'dog', 'bat'];
//console.log(pets.includes('giraffe'));  // false

const arrayToShift = ['a', 'b', 'c'];
const shiftedElement = arrayToShift.shift();
// console.log(shiftedElement); // a
// console.log(arrayToShift); // ['b', 'c']

// Add element to beginning of array and returns length of new array.
const arrayToUnshift = [1, 2, 3];
const newArrayLength = arrayToUnshift.unshift(9);
// console.log(arrayToUnshift); // [ 9, 1, 2, 3]
// console.log(newArrayLength); // 4

const arrayToPop = ['dog', 'racoon', 'cat'];
const poppedElement = arrayToPop.pop();
// console.log(arrayToPop);
// console.log(poppedElement);

// .slice() - (sim. to .substring())
const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
const firstTwoElements = fruits.slice(0, 2);
//console.log(firstTwoElements);  // [ 'Banana', 'Orange' ]

// .splice() - 1st arg is starting index, 2nd arg is how many elements to remove, 3rd arg is what elements to add.
const badArray = [1, 2, 'z', 5];
badArray.splice(2, 1, 3, 4);
//console.log(badArray); // [ 1, 2, 3, 4, 5 ]

// .concat(array) - Returns array consisting of 2nd array appended to end of 1st array.
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];
// console.log(firstArray.concat(secondArray)); // [ 1, 2, 3, 4, 5, 6 ]

// .join(joiningCharacter) - Returns string based on combines array elements separated by a character.  If no arg, join by commas.
const arrayToJoin = ['a', 'b', 'c'];
let myString = arrayToJoin.join('-');
// console.log(myString); // a-b-c
myString = arrayToJoin.join('');
// console.log(myString); // abc
myString = arrayToJoin.join();
// console.log(myString); // a,b,c

// Array.from(iterableObject, mappingFunction) - Creates an array from an array-like or iterable object (string, object).  
// Can pass a function which returns the result of running some process on each element.
const newArray = Array.from('kurt');
// console.log(newArray); // [ 'k', 'u', 'r', 't' ]

const newArray2 = Array.from([1, 2, 3], (element) => {
    // console.log(element);  // 1   2    3   
    return element * 2;
});
// console.log(newArray2); // [ 2, 4, 6 ]

const newArray3 = Array.from(Object.entries({ name: 'kurt', weight: 190}), (element) => {
    // console.log(element); // [ 'name', 'kurt' ], then [ 'weight', 190 ]
    return element + '!';
})
// console.log(newArray3); // [ 'name,kurt!', 'weight,190!' ]

// .every() - Returns true if running some function on each element always returns true.
const allAbove3 = [1, 2, 3, 4, 5].every( (element) => { 
    return element > 3;
});  
// console.log(allAbove3);  // false

// .filter(function) - Returns ALL elements that return true when processed via function.
const firstFilteredElement = [1, 2, 3, 4, 5].filter( (element) => {
    return element > 2;
});
// console.log(firstFilteredElement);  // [3, 4, 5]

// map() - Applies a function to each element and returns new array.
const mappedArray = [1, 2, 3].map((element) => {
    return element * element;
}); 
// console.log(mappedArray); // [ 1, 4, 9 ]

// .reduce() - Applies a function to each element in an array and updates an accumulator with the result (ex: sums values in an array)
const total = [1, 2, 3, 4].reduce( (accum, element) => {
    return accum += element;
});
// console.log(total); // 10

// .sort() - Sorts elements in an array.  Notes: 
    // If no function is passed, elements are sorted alphabetically.
    // Don't sort numbers like this because it does an alpha sort on them!

const sortedNames = ['abe', 'don', 'bob', 'mary', 'lisa'].sort();
// console.log(sortedNames); // [ 'abe', 'bob', 'don', 'lisa', 'mary' ]

let sortedNumbers = [1, 8, 3, 9, 15].sort();    
// console.log(sortedNumbers); // [ 1, 15, 3, 8, 9 ] See?  This is wrong!


sortedNumbers = [1, 8, 3, 9, 15].sort( (a, b) => {
    return a - b; 
});    
// console.log(sortedNumbers); // [ 1, 3, 8, 9, 15 ] <-- Much better.

const scores = [
    { name: 'casey', score: 20},
    { name: 'bob', score: 80},
    { name: 'kurt', score: 98},
    { name: 'aaron', score: 0},
];
const sortedScores = scores.sort( (obj1, obj2) => {
    return obj1.score - obj2.score;
});
// console.log(sortedScores);  // [{ name: 'aaron', score: 0 }, { name: 'casey', score: 20 }, { name: 'bob', score: 80 }, { name: 'kurt', score: 98 }]

// .find() - Finds the 1st element in an array that returns a truthy when function is applied to it.
const fruitInventory = [	
	{name: 'apples', qty: 2},
	{name: 'cherries', qty: 5},
	{name: 'bananas', qty: 1}
]	
const cherries = fruitInventory.find( (element) => {
    return element.name === 'cherries';
});
// console.log(cherries.qty); // 5






