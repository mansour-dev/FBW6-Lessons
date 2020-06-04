//console.log('Hello FBW6');
//1-change the body background to lightblue
document.body.style.background ="lightblue";

// change the color of h1 to white

// we need to select the h1 : document.getElementById('firstHead')
// we need to assign the new color to h1
// using getElementById
//document.getElementById('firstHead').style.color = "white"
// using querySelector
// document.querySelector("#firstHead").style.color="#fff";

// change the heading text to "Welcom to Jasvascript Dom"
// let heading = document.getElementById("firstHead")

// heading.innerHTML = "Welcom to Jasvascript Dom";
// document.getElementById("firstHead").innerText = "Welcom to Jasvascript Dom"
//heading.style.color = "green";
// heading.style.fontFamily ="tahoma";

// create a function to change the color of the p having argument to be the new color

// change('red')

firstHead.style.color = "#fff";
console.log(firstHead);

// create a function to change the color of any element having 2 argument the first argument should be the id and the second one is the new color
function changeColor(id,color){

}
// changeColor('paragraph','green');
// changeColor('firstHead','red');

// Highlight all of the words over 5 characters long in the paragraph text (with a yellow background)

// generate an array from the text 
// loop through the array and check the length of each element from this array if the length > 5 
// add a span to each word with length > 5 
// we can add the background color to all the spans 
// 
let source = document.getElementById("paragraph"); // fetch text from html
let arrSource= source.textContent.split(" ");            // create an array out of the html-text with splitting the text by spaces
let result = "";
for (let i = 0; i < arrSource.length; i++) {                // loop through each element of the array
  if (arrSource[i].length > 5){                             // check if the length of each element is greater than 5
    arrSource[i] = "<span>" + arrSource[i] + "</span>";     // add a span around each element of the array with more than 5 characters
  }
  result += " " + arrSource[i];
}
source.innerHTML = result;

let spans = document.querySelectorAll('span');
spans.forEach(function(item){
item.style.backgroundColor = 'yellow';
})
