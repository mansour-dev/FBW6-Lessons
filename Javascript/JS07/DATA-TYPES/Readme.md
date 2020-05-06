# Data Types
A value in JavaScript is always of a certain type. For example, a string or a number.
```javascript
let message = "hello";
message = 123456
```
 

 **- Primitive**
 

   ```javascript
// String
const name = 'John Doe';
// Number
const age = 40;
// Boolean
const hasKids = true;
// Null
const car = null;
// Undefined
let test;
// Symbol
const sym = Symbol();  
 
 ```
 


 -  **REFERENCE TYPES** - Objects

```javascript
// Array
const hobbies = ['movies', 'music'];

// Object literal
const address = {
  city: 'Hamburg',
  street: 'wandalenweg 30'
}
// Date
const today = new Date();
console.log(today);
console.log(typeof today);
```

## Type Conversion

```javascript
let val;

// Number to string
val = String(777);
val = String(4+4);
// Bool to string
val = String(false);
// Date to string
val = String(new Date());
// Array to string
val = String([1,9,2,10]);

// toString()
val = (6).toString();
val = (true).toString();

// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1,2,3]);

val = parseInt('50.20');
val = parseFloat('50.20');

// Output
 console.log(val);
 console.log(typeof val);
 console.log(val.length);
 console.log(val.toFixed(2));

const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);
```

## Math Object
```javascript
const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2,33,4,1,55,6,3,-2);
val = Math.max(2,33,4,1,55,6,3,-2);
val = Math.random();

val = Math.floor(Math.random() * 20 + 1);

console.log(val);
```
