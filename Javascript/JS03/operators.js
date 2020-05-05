// const id = '200';

// Equal to 
// if(id === 100){
//     console.log('correct');    
// }
// else{
//     console.log('incorrect');
    
// }

//Not Equal //value
// if(id != 200){
//     console.log('incorrect');    
// }
// else{
//     console.log('correct');
    
// }

// //Not Equal To VAlue and Type 
// if(id !== 200){
//     console.log('incorrect');    
// }
// else{
//     console.log('correct');
    
// }
// test if undefined

// if(typeof id !== 'undefined'){
//     console.log('the id is ',id);    
// }
// else{
//     console.log('incorrect');
    
// }

// Logical Operators
const name = 'Sara';
const age = 67;

// AND  &&
// if(age > 0 && age <=12){
//     console.log(name + ' is a child');    
// } else if(age >= 13 && age <=19){
//     console.log(name + ' is a teenager');    
// }
// else{
//     console.log(name + ' is an adult');    
    
// }
// console.log(age >= 13 && age <=20);

// OR || 
// if(age < 16 || age > 65){
//     console.log(name +' can not run in race');    
// }
// else{
//     console.log(name +' is registered for the race');
// }

// console.log(false || true);


//Ternary Operator the short if
let city = 'Hamburg';
city = 'Köln';

// console.log( (city === 'Hamburg' ? 'Correct' : 'Incorrect' ) );


// if(city == 'Hamburg'){
//     console.log('Correct');    
// }
// else{
//     console.log('Incorrect');
    
// }


let id = '5000';


// console.log( (id === 5000 ? true : false ) );



//Write a JavaScript function to check two given numbers and return true if one of the number is 50 or if their sum is 50.

//function check(50,0) => true
//function check(40,10) => true
//function check(20,10) => false

//function check(a , b){
//     if(a === 50 || b === 50 || a + b === 50 ){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// function check(a , b){
//     if(a === 50 || b === 50 ){
//         return true;
//     }
//     else if( a + b === 50){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
function check(a,b){
    return ( (a===50 || b===50 || a+b===50)? true : false )

}
console.log(check(40,0));


//Write a JavaScript function to get the difference between a given number and 22, if the number is greater than 22 return double the absolute difference.


//difference(10) =>  22 - 10 = 12
//difference(50) => (50 - 22) * 2 

//Write a JavaScript function to check the ability to drive a car for a given age, if the age between 18 and 65 print you can drive otherwise print sorry you can't drive 

