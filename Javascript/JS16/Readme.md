# Array methods
Arrays provide a lot of methods. To make things easier.
we will create some Arrays.
```javascript
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];
```
##  Add/remove items 
We already know methods that add and remove items from the beginning or the end:
-   `arr.push(...items)` – adds items to the end,
-   `arr.pop()` – extracts an item from the end,
-   `arr.shift()` – extracts an item from the beginning,
-   `arr.unshift(...items)` – adds items to the beginning.

```javascript
let val;
// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
val = numbers[0];
// Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(36);
console.log(numbers);
console.log(val);
```
```javascript
// // Add on to end
// numbers.push(250);
// // Add on to front
// numbers.unshift(120);
// // Take off from end
// numbers.pop();
// // Take off from front
// numbers.shift();
```

### Splice
The [arr.splice(start)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) method is a  knife for arrays. It can do everything: insert, remove and replace elements.
```javascript
arr.splice(index[, deleteCount, elem1, ..., elemN])
```
example 
```javascript
let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element

console.log( arr ); // ["I", "JavaScript"]
```
here we remove 3 elements and replace them with the other two:
```javascript
let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");

console.log( arr ) // now ["Let's", "dance", "right", "now"]
```
Here we can see that `splice` returns the array of removed elements:
```javascript
let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 2 first elements
let removed = arr.splice(0, 2);

console.log( removed ); // "I", "study" <-- array of removed elements
```
The `splice` method is also able to insert the elements without any removals. For that we need to set `deleteCount` to `0`:
```javascript
let arr = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");

alert( arr ); // "I", "study", "complex", "language", "JavaScript"
```
