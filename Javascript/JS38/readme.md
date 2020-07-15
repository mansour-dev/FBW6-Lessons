## XMLHttpRequest
![enter image description here](https://domscripting.com/presentations/fowa07/slides/images/page_xhr_server.jpg)
`XMLHttpRequest` (XHR) is a built-in browser object that are used to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing.
The **X**ML**H**ttp**R**equest  is **a developers dream**, because you can:
-   Update a web page without reloading the page
-   Request data from a server - after the page has loaded
-   Receive data from a server - after the page has loaded
-   Send data to a server - in the background
**How to use XHR** 

1- Create `XMLHttpRequest`:
```javascript
const xhr = new XMLHttpRequest();
```
2- Initialize it, usually right after `new XMLHttpRequest`:
This method specifies the main parameters of the request:

-   `method`  – HTTP-method. Usually  `"GET"`  or  `"POST"`.
-   `URL`  – the URL to request
-   `async`  – if explicitly set to  `false`, then the request is synchronous, if `true`  then the request is Asynchronous.
-   `user`,  `password`  – login and password for basic HTTP auth (if required).
3- Send it out.
```javascript
xhr.send()
```
4-Listen to  `xhr`  events for response.

These three events are the most widely used:

-   `load`  – when the request is complete.
-   `error`  – when the request couldn’t be made, e.g. network down or invalid URL.

```javascript
xhr.onload = function() {
```javascript
console.log(`Loaded: ${xhr.status} ${xhr.response}`);

  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
}

 xhr.onerror = function() {
    console.log('Request error...');
  }

```