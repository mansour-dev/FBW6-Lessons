const num1 = 50;
const num2 = 100;
let val;
// Simple Math with Numbers

val = num1 + num2;
val = num1 * num2;
val = num2 - num1;
val = num2 / num1;
val = num2 % num1;

// Math object 
val = Math.PI;
val = Math.E;
val = Math.round(2.6);
val = Math.ceil(2.4);
val = Math.floor(2.9);
val = Math.sqrt(64);
val = Math.abs(-2);
val = Math.pow(8,2) // => 8 * 8   
val = Math.min(3,-7,33,0,6,10);
val = Math.max(2,55,100,7);
val = Math.random();
val = Math.random() * 20 + 1 ;
val = Math.floor(Math.random() * 20  +1 )


console.log(val);

// function randomDString(length){
//     let result = '';
//     let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     const charactersLength = characters.length;
//     for(let i = 0 ; i< length;i++ ){
//         console.log('the random number is :' , Math.floor(Math.random() * charactersLength));
//         console.log(characters.charAt(Math.floor(Math.random() * charactersLength)));
        
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));

//     }

//     return result;
// }

// console.log(randomDString(5))





//val = Math.floor(Math.random() * 20  +1 )


// create a function to return random number between 1 and 30 

function getRandom(){
    return Math.floor(Math.random() * 30 +1);
} 

// console.log('the random number is : ',getRandom());

///////////////////////////////////////////////////////

// create function to return random color from this array 

const colors = ['red','gray','black','yellow','green','pink','magenta','orange'];
const myColors =['#ffcc00','#cc00ff','#ee22ff','#ccddff'];

function randomColor(arr){
    const length = arr.length; // getting the length of the array

    let i =   Math.floor( Math.random() * length ) // generating the random number between 0 and the length of the array

    return arr[i]; // getting the element form the array using the random index

}
// console.log('my random color is : ' , randomColor(colors))
document.body.style.background=randomColor(myColors);





for(let i =0 ; i < 50 ; i++){
    debugger;
    console.log(i);
    
}








// // generate random colors 
// let possibleDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
// let result = ""
// //random 
// indexes =>
// 0  => 0
// 3 => 3
// 5 => 5
// 12 => c 
// 13  => D
// 14 => E 
// // for loop 

// return result  // #035cde


