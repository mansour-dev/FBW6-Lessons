# The “for” loop
The  `for`  loop is the most commonly used loop.

It looks like this:

```javascript
for (start; condition; step) {
  // ... loop body ...
}
```
as example 
```javascript
for (let i = 0 ; i < 10; i++) {
  console.log('Numbrer '+ i);
}
```

|part|||
|--|--|--|
|start|`i = 0`|Executes once upon entering the loop.|
|condition|`i < 10`|Checked before every loop iteration. If false, the loop stops.|
|body|`console.log('Numbrer '+ i);`|Runs again and again while the condition is truthy.|
|step|`i++`|Executes after the body on each iteration.

 


or 
```javascript
for (let i = 100; i > 0; i--) {
   console.log('Numbrer '+ i);
}
```
The general loop algorithm works like this:
```none
Run begin
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ ...
```
Here’s exactly what happens in our case:
```javascript
// for (let i = 0; i < 3; i++) console.log(i)

// run begin
let i = 0
// if condition → run body and run step
if (i < 3) { console.log(i); i++ }
// if condition → run body and run step
if (i < 3) { console.log(i); i++ }
// if condition → run body and run step
if (i < 3) { console.log(i); i++ }
// ...finish, because now i == 3
```

how to stop the loop

 - **continue**
it doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).

```javascript
for(let  i = 0; i < 10; i++){

	if(i === 2){
	console.log('2 is my favorite number');
	continue;
	}
 
console.log ('Number '+ i);
}
```

 
 - **Break**
Normally, a loop exits when its condition becomes falsy.
But we can force the exit at any time using the special  `break`  directive.
```javascript
for(let  i = 0; i < 10; i++){

	if(i === 5){
          console.log('Stop the loop');
          break;
        }
	
 
console.log('Number '+ i);
}
```
