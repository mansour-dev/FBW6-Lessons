## JavaScript Value vs Reference Types
In JavaScript we have types that are copied by value and types copied by reference. These are :

**Primitives (copied by value)**

-  Number
-  String 
-  Boolean
-  null
-  undefined
-  Symbol

**Objects (copied by reference)**

-   Object
-   Array
-   Function


###  Primitives
```javascript
let a = 10;
let b = a;
a = 20; console.log(a); // 20  
console.log(b); // 10  this is also true for string, boolean, null, undefined
```
When we assign primitives to the variable, we  **copy the value**.

### Objects
```javascript 
let a = { value : 40};  
let b = a;
a.value = 50 ;console.log(a); // { value: 50}  
console.log(b); // { value: 50}
```

This is also true for  **Arrays**
```javascript
let a = [];  
let b = a;
a.push(5);console.log(a); // [5]  
console.log(b); // [5]  
console.log(a === b); // true
```
	
more examples 
```javascript
let num = 10;  
function increase(num){
 num ++; 
}
increase(num);
console.log(num); // 10 

```

```javascript
let obj = {value:10};  
function increase(obj){
 obj.value ++; 
}
increase(obj);
console.log(obj); //{ value: 11 } 

```