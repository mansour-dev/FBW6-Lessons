## assignments

 **1.** Write a JavaScript function to list the properties of a JavaScript 
 object:  
```javascript 
const developer = {  
name : "Adams",  
age : 37,
role : "frontend developer",  
id : 12 
};  
```

**2** Write a JavaScript function to get the length of a JavaScript object
for example the developer object  length is 4 
```javascript 
const developer = {  
name : "Adams",  
age : 37,
role : "frontend developer",  
id : 12 
};  
```
**3.** Write a JavaScript function to display the reading status (readStatus property include book title and author) of the following books.
```javascript 
let library = [ 
   {
       author: ' J. K. Rowling ',
       title: 'Harry Potter and the Sorcerers Stone Book 1',
       readStatus: true
   },
   {
       author: 'Mary Shelley',
       title: 'Frankenstein',
       readStatus: true
   },
   {
       author: 'J. R. R. Tolkien',
       title:  'The Lord of the Rings', 
       readStatus: false
   }];

```
**4.** Write a JavaScript function that takes the library array and other argument as a book title then removes the book from that library array:

```javascript
removeFromLibrary(library, 'Frankenstein'); // should remove the second object from the library array
```