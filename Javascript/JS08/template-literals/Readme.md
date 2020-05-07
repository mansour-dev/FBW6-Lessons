# What is template literals?

Template literals is a  **additional way to create and handle dynamic strings/string templates**, thus easing our pain by providing simpler and better solutions for mentioned cases above.

To put it simple — _Template literals are string literals allowing embedded expressions_.

```javascript

const user ='Mansour';
let msg = "Hello " + user ;




const name = 'Daniel';
const age = 36;
const job = 'Web Developer';
const city = 'Hamburg';
let info;

// Without template strings (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: '+ job+ ' </li><li>City: '+ city +' </li></ul>';


// With template strings (es6)
info = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>      
  </ul>
`;

console.log(info)
```


