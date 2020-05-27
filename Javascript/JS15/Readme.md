# Object-oriented programming
When we write our code using objects to represent entities, that’s called [object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming), in short: “OOP”.
## Object methods, "this"
Objects are usually created to represent entities of the real world, like users, cars and so on:
```javascript
  name: "Sara",
  age: 32
};
```
### Object Methods
And, in the real world, a user can _act_: select something from the shopping cart, login, logout etc. 

For a start, let’s teach the `user` to say hello:
```javascript
let user = {
  name: "Sara",
  age: 32
};

user.sayHi = function() {
  console.log("Hello!");
};

user.sayHi(); // Hello!

//or we can use like :

user = {
  name: "Sara",
  age: 32
  sayHi: function() {
    alert("Hello");
  }
};

```
### “this” in methods
**To access the object, a method can use the  `this`  keyword.**
```javascript
let user = {
  name: "Sara",
  age: 32,

  sayHi() {
    // "this" is the "current object"
    console.log(this.name);
  }

};

user.sayHi(); // Sara
```
the value of `this` will be `user`.
## Constructor, operator "new"
The regular  `{...}`  syntax allows to create one object. But often we need to create many similar objects, like multiple users or menu items and so on.

That can be done using constructor functions and the  `"new"`  operator.
##  Constructor function 
Constructor functions technically are normal functions.

1.  They are named with capital letter first.
2.  They should be executed only with  `"new"`  operator.

```javascript
function Person(name) {
  this.name = name;
  this.isMarried = false;
}

let person = new Person("Jack");

console.log(person.name); // Jack
console.log(person.isMarried); // false
```
So  `let person = new Person("Jack")`  gives the same result as:

```javascript
let person = {
  name: "Jack",
  isMarried: false
};
```
Now if we want to create other persons, we can call `new User("Anna")`, `new User("Alice")` and so on. Much shorter than using literals every time, and also easy to read.
That’s the main purpose of constructors – to implement reusable object creation code.
Let’s note once again – technically, any function can be used as a constructor. That is: any function can be run with `new`, and it will execute the algorithm above. The “capital letter first” is a common agreement, to make it clear that a function is to be run with `new`.
## Methods in constructor

Using constructor functions to create objects gives a great deal of flexibility. The constructor function may have parameters that define how to construct the object, and what to put in it.

Of course, we can add to  `this`  not only properties, but methods as well.

For instance,  `new Person(name)`  below creates an object with the given  `name`  and the method  `sayHi`:
```javascript
function Person(name) {
  this.name = name;

  this.sayHi = function() {
    console.log( "My name is: " + this.name );
  };
}

let mansour = new Person("Mansour");

mansour.sayHi(); // My name is: Mansour

/*
mansour = {
   name: "Mansour",
   sayHi: function() { ... }
}
*/
```
To create complex objects, there’s a more advanced syntax, [classes](https://github.com/Mansour-Tumeh/FBW6-Lessons/blob/master/Javascript/JS15/Classes.md)
