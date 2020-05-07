# Spread Operator `...` 
The spread syntax “spreads” the array into separate arguments.
## What is  `...`  used for?
he `…` spread operator is useful for many different routine tasks in JavaScript, including the following:

-   Copying an array
-   Concatenating or combining arrays
-   Using Math functions
-   Using an array as arguments
-   Adding an item to a list
-   Adding to state in React
-   Combining objects
-   Converting NodeList to an array.
 
In each case, the spread syntax expands an iterable object, usually an array, though it can be used on any interable, including a string.
 examples :
```javascript
//example1
// we have two arrays 
let students1 =['John','Daniel','Mara','Alfred'] ;
let students2 =['Steven','Amit'] ;

// now we want to add the students1 to students2
student2 = ['Steven','Amit',students1];
// the result is : ["Steven", "Amit", Array(4)]
// we can solve this using ...spread operator like this
student2 = ['Steven','Amit',...students1];
// ["Steven", "Amit", "John", "Daniel", "Mara", "Alfred"]

// example2 : we have an array of scores 
let scores = [88,71,90,60,97,57,84,69]
// we want to get the higest score using the Math object Math.max()
console.log(Math.max(scores)); // but we get NaN 
// so we can spread it out like this 
console.log(Math.max(...scores)) // 97

// example3
// we have two arrays and we want to copy the first array
let arr1 = [1,2,3];
let arr2 = arr1;
console.log(arr2) // [1, 2, 3];
// now if we change arr1 
arr1[3]=4;
console.log(arr1) // [1,  2,  3,  4]
// but also arr2 is the same
console.log(arr2) // [1,  2,  3,  4]
// so the solution is to assign arr2 like this
arr2 = [...arr1];
// now we get a copy form arr1 
arr1[4]=5;
console.log(arr1); // [1,  2,  3,  4,  5]
console.log(arr2);// // [1,  2,  3,  4]

//example 4 

let numer1 = [1, -2, 8, 4];
let number2 = [9, 3, -9, 1];

console.log( Math.max(...number1, ...number2) ); // 9


// example 5 
// here we use the spread syntax to turn the string into array of characters
 
let str = "Hello";

console.log( [...str] ); // ["H", "e", "l", "l", "o"]
 

//example 6
// Get a new copy of an object 
 
let person = { name: 'sara', age: 36, job: 'graphic designer' };
let personCopy = { ...person }

// modifying our initial object does not modify the copy:
person.job = 'web developer';


```