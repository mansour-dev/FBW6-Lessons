// let result = window.innerHeight;
// console.log(result);
// //window.location.reload();
// result = window.navigator;
// console.log(result);


//document.body.style.background = "lightgreen"
//console.log(document.doctype);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.characterSet);
// console.log(document.contentType);
// console.log(document.forms[0]);
//console.log(document.getElementById("header-title"));
let headerTitle = document.getElementById("header-title")

let header = document.getElementById("main-header");
console.log(headerTitle.innerText);
headerTitle.innerHTML = "<h2> Hello world </h2>";

header.style.borderBottom = "3px solid #111";

header = document.querySelector('#main-header');
header.style.borderTop = "3px solid red";

let items = document.getElementsByClassName('list-group-item');

//console.log(items);
console.log(items[0]);
items[0].textContent = " Hello FBW6";
items[0].style.fontWeight = 'bold'

document.getElementsByClassName('list-group-item')[2].style.fontWeight = 'bold';
items[0].style.backgroundColor  = "#f3f3f3";
let itemsArr =  Array.from(items);

itemsArr.forEach(function(element){
    element.style.backgroundColor = '#f3f3f3';
})

for(let i = 0 ; i < items.length ; i++){
    items[i].style.backgroundColor = 'lightblue'
}

 let li = document.getElementsByName('item-desc');

li = document.getElementsByTagName('li');
console.log(li.length);

for(let i = 0 ; i < li.length ; i++){
    li[i].style.color = 'blue'
}


// querySelector one element 

header = document.querySelector('#main-header');
let input = document.querySelector('input');
input.value = "Hi All";
let submit = document.querySelector('input[type="submit"]');
submit.value = 'Send'
let item = document.querySelector('.list-group-item');
console.log(item.textContent);
item.style.color = 'red';
let lastItem = document.querySelector('.list-group-item:last-child');
//lastItem.style.backgroundColor = 'darkblue';
let secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = '#111'

// document.querySelector('.list-group-item:last-child').style.backgroundColor='yellow';

let titles = document.querySelectorAll('.title');
console.log(titles);
 titles[0].textContent = 'Hello'
 titles[1].textContent = 'Hello world';

//   li = document.querySelectorAll('li');
//  li.forEach(function(element){
//      element.style.background = "orange"
//  })



function getRandomColor(){
    const letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0 ; i < 6 ; i++ ){
        const index = Math.floor(Math.random() * 16);
        color += letters[index]

    }
    return color;
}


function gradiantColor(){
    const deg = Math.floor(Math.random() * 270); 
    const color = `linear-gradient(${deg}deg,  ${getRandomColor()}, ${getRandomColor()},${getRandomColor()})`; 
    return color;

}

document.body.style.background = gradiantColor();
