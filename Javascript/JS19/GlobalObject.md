

# Global Object
The global object provides variables and functions that are available anywhere. By default, those that are built into the language or the environment.

In a browser it is named  `window`, for Node.js it is  `global`, for other environments it may have another name.
we could use : 
console.log
```javascript
  window.console.log('1234')
```
 Alert
```javascript
  window.alert('Hello World')
```
Prompt
```javascript
const input = prompt();
alert(input);
```
Confirm
```javascript
  if(confirm('Are you sure')){
    console.log('Yes')
  }
  else {
  console.log('No')
  }
```
Outer height and width
```javascript
 let result = window.outerHeight;
 result = window.outerWidth;
 console.log(result)
```
Inner height and width
```javascript
 let result = window.innerHeight;
 result = window.innerWidth;
 console.log(result)
```
Scroll points
```javascript
let result = window.scrollY;
result = window.scrollX;
 console.log(result)
```
Location Object
```javascript
let result = window.location;
result = window.location.hostname;
result = window.location.port;
result = window.location.href;
result = window.location.search;
```

Redirect and Reload
```javascript
window.location.href = 'http://google.com';

window.location.reload();
```

Navigator Object
```javascript
let result = window.navigator;
result = window.navigator.appName;
result = window.navigator.appVersion;
result = window.navigator.userAgent;
result = window.navigator.platform;
result = window.navigator.vendor;
result = window.navigator.language;
```

