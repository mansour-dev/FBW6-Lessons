# DOM Manipulation in Vanilla Javascript

![enter image description here](https://res.cloudinary.com/practicaldev/image/fetch/s--fzU9Q772--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/ern57e4pds7jpp9oq5xy.png)
 

 

## DOM (Object Object Model)


Document Object Model, or DOM for short, represents all page content as objects that can be modified.

The  `document`  object is the main “entry point” to the page. We can change or create anything on the page using it.
we could use : 
```javascript
 console.log(document);
```
 All
```javascript
console.log(document.all)
console.log(document.all[0]);
console.log(document.all[1]);
console.log(document.all[2]);
console.log(document.all.length)

```
Head
```javascript
console.log(document.head)
```
Body
```javascript
console.log(document.body)
```

```javascript
 
console.log(document.doctype);
console.log(document.domain);
console.log(document.URL);
console.log(document.characterSet);
console.log(document.contentType);
```
### DOM Selectors For Single Elements
```javascript
document.getElementById();
document.querySelector();
```
### DOM Selectors For Multiple Elements
```javascript
document.getElementsByClassName();
document.getElementsByName()
document.getElementsByTagName();
document.querySelectorAll();
```
