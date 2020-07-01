## Event Bubbling and Delegation

### Bubbling
The bubbling principle is simple.When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
Let’s say we have 3 nested elements  `FORM > DIV > P`  with a handler on each of them:
```markup
<style>
  body * {
    margin: 10px;
    border: 1px solid blue;
  }
</style>

<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
```
A click on the inner  `<p>`  first runs  `onclick`:

1.  On that  `<p>`.
2.  Then on the outer  `<div>`.
3.  Then on the outer  `<form>`.
4.  And so on upwards till the  `document`  object.

![Event Bubling](https://javascript.info/article/bubbling-and-capturing/event-order-bubbling.svg)

So if we click on  `<p>`, then we’ll see 3 alerts:  `p`  →  `div`  →  `form`.

The process is called “bubbling”, because events “bubble” from the inner element up through parents like a bubble in the water.
Event bubbling is supported in all browsers, and it works for all handlers, regardless of how they are registered e.g. using `onclick` or `addEventListener()`

###  Stopping bubbling
A bubbling event goes from the target element straight up. Normally it goes upwards till  `<html>`, and then to  `document`  object, and some events even reach  `window`, calling all handlers on the path.

But any handler may decide that the event has been fully processed and stop the bubbling.

The method for it is  `event.stopPropagation()`.
```markup
<body onclick="alert(`the bubbling doesn't reach here`)">
  <button onclick="event.stopPropagation()">Click me</button>
</body>
```
For instance,  focus, blur and scrol event does not bubble_
 ### Capturing
 There’s another phase of event processing called “capturing”. It is rarely used in real code, but sometimes can be useful.

The standard **DOM Events** describes 3 phases of event propagation:

1.  Capturing phase – the event goes down to the element.
2.  Target phase – the event reached the target element.
3.  Bubbling phase – the event bubbles up from the element.

Here’s the picture of a click on `<td>` inside a table, taken from the specification:
![enter image description here](https://javascript.info/article/bubbling-and-capturing/eventflow.svg)That is: for a click on `<td>` the event first goes through the ancestors chain down to the element (capturing phase), then it reaches the target and triggers there (target phase), and then it goes up (bubbling phase), calling handlers on its way.

**Before we only talked about bubbling, because the capturing phase is rarely used. Normally it is invisible to us.**

Handlers added using `on<event>`-property or using HTML attributes or using two-argument `addEventListener(event, handler)` don’t know anything about capturing, they only run on the 2nd and 3rd phases.

To catch an event on the capturing phase, we need to set the handler `capture` option to `true`:

```javascript
elem.addEventListener(..., {capture: true})
// or, just "true" is an alias to {capture: true}
elem.addEventListener(..., true)
```

There are two possible values of the `capture` option:

-   If it’s `false` (default), then the handler is set on the bubbling phase.
-   If it’s `true`, then the handler is set on the capturing phase.

Let’s see both capturing and bubbling in action:

```markup
<style>
  body * {
    margin: 10px;
    border: 1px solid blue;
  }
</style>

<form>FORM
  <div>DIV
    <p>P</p>
  </div>
</form>

<script>
  for(let elem of document.querySelectorAll('*')) {
    elem.addEventListener("click", e => alert(`Capturing: ${elem.tagName}`), true);
    elem.addEventListener("click", e => alert(`Bubbling: ${elem.tagName}`));
  }
</script>
```

If you click on `<p>`, then the sequence is:

1.  `HTML` → `BODY` → `FORM` → `DIV` (capturing phase, the first listener):
2.  `P` (target phase, triggers two times, as we’ve set two listeners: capturing and bubbling)
3.  `DIV` → `FORM` → `BODY` → `HTML` (bubbling phase, the second listener).

There’s a property `event.eventPhase` that tells us the number of the phase on which the event was caught. But it’s rarely used, because we usually know it in the handler.
### Summary 

When an event happens – the most nested element where it happens gets labeled as the “target element” (`event.target`).

-   Then the event moves down from the document root to `event.target`, calling handlers assigned with `addEventListener(..., true)` on the way (`true` is a shorthand for `{capture: true}`).
-   Then handlers are called on the target element itself.
-   Then the event bubbles up from `event.target` up to the root, calling handlers assigned using `on<event>` and `addEventListener` without the 3rd argument or with the 3rd argument `false/{capture:false}`.

Each handler can access `event` object properties:

-   `event.target` – the deepest element that originated the event.
-   `event.currentTarget` (=`this`) – the current element that handles the event (the one that has the handler on it)
-   `event.eventPhase` – the current phase (capturing=1, target=2, bubbling=3).

Any event handler can stop the event by calling `event.stopPropagation()`, but that’s not recommended, because we can’t really be sure we won’t need it above, maybe for completely different things.

The capturing phase is used very rarely, usually we handle events on bubbling. And there’s a logic behind that.

In real world, when an accident happens, local authorities react first. They know best the area where it happened. Then higher-level authorities if needed.


