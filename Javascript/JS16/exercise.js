//Create the function that takes an array with objects and returns the sum of people's budgets.
function getBudgets(array){

    let budget =  array.reduce( function(sum, item){
                 return sum + item.budget;
    },0);

    return budget;
}
  



// calling the function 
let arr = [
    { name: "Max", age: 21, budget: 500 },
    { name: "Steven",  age: 32, budget: 1000 },
    { name: "Lara",  age: 16, budget: 500 }
  ];

//console.log(getBudgets(arr)) //➞ 1700




//We have the following arrays  
     //           0             1        2       3     4        5          6  
    let color = ["Violet ", "Green", "Orange", "Red","Blue", "Indigo", "Yellow "];

        //        0    1    2    3   
        let o = ["th","st","nd","rd"];

//Write a JavaScript function  to display the colors in the following way :

"1st choice is Violet ."
"2nd choice is Green."
"3rd choice is Orange."
"4th choice is Red."
"5th choice is Blue."
"6th choice is Indigo."
"7th choice is Yellow."

// map function 
// forEach
// for 
// function getText(index){
  
//     if(index > 2){
//         return o[0]
//     }
//     else {
//         return o[index+1]
//     }
// }


let newColors = color.map(function(item,index){
    let text = index > 2 ? o[0] : o[index+1];
    return  index+1 + text + ' choice is '+ item;
});
//console.log(newColors);

////////////////////////

//Write a JavaScript function to get the largest element from an unsorted array of Numbers

function getLarge(arr){
  
}

 getLarge([33,200,7,1,99,4,3])   // => 200



 //Write a JavaScript function to remove a specific item from an array
 function removeItem(arr,item){

 }

 removeItem([4,8,9],8) // => [4,9]

 removeItem(["red","magenta","blue"],"red") // => ["magenta","blue"]

 // filter function 

 