#  The “class” syntax
In practice, we often need to create many objects of the same kind, like users, or persons or books or whatever.

As we already know `new function` can help with that.

But in the modern JavaScript, there’s a more advanced “class” construct, that introduces great new features which are useful.
```javascript
class MyClass {
  // class methods
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
```
for example
```javascript

class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }

}

// Usage:
let user = new User("Sara");
user.sayHi();
```
When `new User("Sara")` is called:

1.  A new object is created.
2.  The `constructor` runs with the given argument and assigns `this.name` to it.

…Then we can call object methods, such as `user.sayHi()`.

 No comma between class methods.
one more example
```javascript
class Apple {

  constructor(type,color) {
    this.type = type;
    this.color = color;
  }

  getAppleInfo() {
   return  this.color + '  ' + this.type + ' apple'; 
  }

}

let  apple = new  Apple('macintosh','reddish');
console(apple.getAppleInfo());

```
### What is a class?
In JavaScript, a class is a kind of function.
```javascript
console.log(typeof Apple); // function
console.log(typeof apple); // object
```
another example
```javascript
class User {
  name = "John";

  sayHi() {
    alert(`Hello, ${this.name}!`);
  }
}

let user = new User();
user.sayHi() // Hello John
```


