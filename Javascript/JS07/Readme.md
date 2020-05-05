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

||||
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
