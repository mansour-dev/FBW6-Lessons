# browser events
![enter image description here](https://miro.medium.com/max/1028/1*seBvkMAiWB1V1AN1qyhX3Q.png)

**Mouse events:**
-   `click`  – when the mouse clicks on an element .
-   `contextmenu`  – when the mouse right-clicks on an element.
-   `mouseover`  /  `mouseout`  – when the mouse cursor comes over / leaves an element.
-   `mousedown`  /  `mouseup`  – when the mouse button is pressed / released over an element.
-   `mousemove`  – when the mouse is moved.

**Keyboard events:**
`keydown` and `keyup` – when a keyboard key is pressed and released.

**Form element events:**
-   `submit`  – when the visitor submits a  `<form>`.
-   `focus`  – when the visitor focuses on an element, e.g. on an `<input>`.

**Document events:**
`DOMContentLoaded` – when the HTML is loaded and processed, DOM is fully built.

**CSS events:**
-   `transitionend`  – when a CSS-animation finishes.
## Event handlers
![enter image description here](https://1.bp.blogspot.com/-XFlpJ7F8oRo/XezLby82LoI/AAAAAAAAA-U/Pn6GIMkG8NwQHllciuiiTOQHs7neTp0rQCNcBGAsYHQ/s1600/images+%25288%2529.png)

**HTML-attribute**

A handler can be set in HTML with an attribute named  `on<event>`.

For instance, to assign a  `click`  handler for an  `input`, we can use  `onclick`, like here:
```markup
<input value="Click me" onclick="alert('Click!')" type="button">
```
**DOM property**

We can assign a handler using a DOM property  `on<event>`.

For instance, `` elem.onclick``
1- Only HTML:
```markup
<input type="button" onclick="alert('Click!')" value="Button">
```
2- HTML + JS:
```markup
<input id="elem" type="button" value="Click me">
<script>
  elem.onclick = function() {
    alert('Thank you');
  };
</script>
```
```markup
<input type="button" id="elem" onclick="alert('Before')" value="Click me">
<script>
  elem.onclick = function() { // overwrites the existing handler
    alert('After'); // only this will be shown
  };
</script>
```
To remove a handler – assign  `elem.onclick = null`.

## addEventListener
usingmethods `addEventListener` and `removeEventListener`  we can assign multiple handlers to one event.

```javascript
element.addEventListener(event, handler, [options]);
```
`event`

Event name, e.g.  `"click"`.
`handler`


The handler function.
`options`

An additional optional object with properties.
To remove the handler, use  `removeEventListener`:
```javascript
element.removeEventListener(event, handler, [options]);
```
if we don’t store the function in a variable, then we can’t remove it.
Multiple calls to  `addEventListener`  allow to add multiple handlers, like this:
```markup
<input id="elem" type="button" value="Click me"/>

<script>
  function handler1() {
    alert('Thanks!');
  };

  function handler2() {
    alert('Thanks again!');
  }

  elem.onclick = () => alert("Hello");
  elem.addEventListener("click", handler1); // Thanks!
  elem.addEventListener("click", handler2); // Thanks again!
</script>
```
As we can see in the example above, we can set handlers  _both_  using a DOM-property and  `addEventListener`. But generally we use only one of these ways.

## Event object
