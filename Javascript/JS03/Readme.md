## Variables
Declare a variale
```javascript
let message;

message = 'Hello'; // store the string

or 

let message = 'Hello';
```
multi word variables
```javascript
let firstName= 'John';  //camel case
let first_name= 'Sara';  //underscore
let FirstName= 'Mansour';  //pascal case
let firstname= 'Anna'
```
LET
```javascript
let  name;
name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);
```
CONST
```javascript
const  greeting= 'Hello';
console.log(greeting);
Can  not  reassign
greeting= 'Hi';

Have  to  assign  a  value
const  lastName;
```

## Data Types

**Primitive Data Types:**
	

 - [ ] String
 - [ ] Number
 - [ ] Boolean
 - [ ] Null
 - [ ] Undefined
 - [ ] Symbols

**Reference Data Types:**

 - [ ] Arrays
 - [ ] Objects
 - [ ] Functions
 - [ ] Dates
 
 

### Primitves

    

```javascript
// String
const  name = 'John Doe';

// Number

const  age = 35;

// Boolean

const  hasKids = true;

// Null

const  car = null;

// Undefined

```
### REFERENCE TYPES
```javascript
// Array

const  hobbies = ['Javascript', 'music'];

// Object 

const  address = {

city:  'Hamburg',

Street:  'wandalenweg 30'

}

const  today = new  Date();

console.log(today);

console.log(typeof  today);
```
## “if” statement

  ```javascript

if(something){

do  something

} else {

do  something  else

}
```

```javascript
const  id = 50;
```
EQUAL  TO
```javascript
if(id == 50){

console.log('CORRECT');

} else {

console.log('INCORRECT');

}
```
NOT EQUAL TO
```javascript
if(id != 100){

console.log('CORRECT');

} else {

console.log('INCORRECT');

}

```
EQUAL TO VALUE & TYPE
```javascript
if(id === 100){

console.log('CORRECT');

} else {

console.log('INCORRECT');

}
```
GREATER OR LESS THAN
```javascript
if(id <= 100){

console.log('CORRECT');

} else {

console.log('INCORRECT');

}
```
    

## FUNCTIONS
FUNCTION DECLARATION 

```javascript
function  greet(){

console.log('Hello');
}
greet()

// or 

function  greet(){

return  'Hello ';
}
console.log(greet())
  
```
FUNCTION WITH ARGUMENTS
```javascript
function  greet(firstName , lastName ){


return  'Hello ' + firstName + ' ' + lastName;

}
greet('Sara' ,'Smith');

// OR
function  greet(firstName='Sara' , lastName='Smith' ){


return  'Hello ' + firstName + ' ' + lastName;

}
console.log(greet());


  

```
FUNCTION EXPRESIONS
```javascript
const  square = function(x){

return  x*x;
};
console.log(8); 

```
IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
```javascript

  (function(){

console.log('IIFE Ran..');
})();

// example
(function(name){

console.log('Hello '+ name);

})('Mansour');

```
## Objects
**JavaScript is an object-based language and in JavaScript almost everything is an object or acts like an object.**
In real life user, person, car is an  **object**.
```javascript
let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};

```
person as object 
```javascript
const  person = {

firstName:  'Sara',
lastName:  'Smith',
age:  35,
email:  'sara@gmail.com',
hobbies: ['music', 'sports'],
address: {
city:  'Hamburg',
street:  'Rennbahnstr 22111'
},
getBirthYear:  function(){

return  1985;

}

}

```
car as object 
![enter image description here](https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/BMW_G07_IMG_0439.jpg/250px-BMW_G07_IMG_0439.jpg)

```javascript
let car= {     // an object
  name: "BMW",  // by key "name" store value "BMW"
  model: 'x7',  // by key "model" store value x7
  year: 2019,
  color:'Black'  
};

```
