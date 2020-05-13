# Javascript loops 
### while loop
The `while` loop has the following syntax:
```javascript
while (condition) {
  // code
  //  "loop body"
}
```
While the  `condition`  is truthy, the  `code`  from the loop body is executed.

For instance, the loop below outputs  `i`  while  `i < 3`:
```javascript

let i = 0;

 while(i < 10){
   console.log('Number ' + i);
   i++;
 }

```

### forEach loop
The [arr.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method allows to run a function for every element of the array.
```javascript
arr.forEach(function(item, index, array) {
  // ... do something with item
});
```
```javascript
// for each element call console.log
["Daniel", "Sara", "Nazgul"].forEach(console.log('Hi'));
```
```javascript
["Daniel", "Sara", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});
```
The result of the function (if it returns any) is thrown away and ignored.

### for...in Loop
The `for-in` loop is a special type of a loop that iterates over the properties of an object or the elements of an array. The generic syntax of the `for-in` loop is:
```javascript

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
```
```javascript
// An object with some properties 
const person = {"name": "Sara", "lastName": "Smith", "age": "37"};
 
// Loop through all the properties in the object  
for(let prop in person) {  
    console.log(prop + " = " + person[prop]); 
}
```

```javascript
// An array with some elements
const fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
 
// Loop through all the elements in the array 
for(let i in fruits) {  
    console.log(fruits[i] );
}
```
