const person = {
    name : "Peter",
    age : 43,
    job : 'Javascript developer',
    city : 'Hamburg',
    'current address' :'wandalenweg 30'
};
let person2 = {};

console.log(person['current address']);
console.log(person.age);
person.lastName = 'Smith';

console.log(person.length);

person.birthYear = function(){
    return 2020 - this.age;

}

console.log(person.birthYear());
// print the object with for in loop 

// for(let i in person){
//     if( i === 'age' && person[i] >  30 )
//     {
//         console.log(' over 30 ');
        
//     }
   
//     console.log( i + ': '+ person[i]);
    
// }
// person.email = "peter@gmail.com";
person['email'] = "peter@gmail.com";

person.getInfo = function(){
    return ` my name is ${this.name} Im ${this.age} and im living in  ${this.city} in   ${this["current address"]} and Im working as 
    ${this.job} and my birthYear is ${this.birthYear()}
    `
    
}

console.log(person.getInfo());


// for( key in person){

//     console.log( key + ': '+ person[key]);

// }

delete person.city; // to remove property


console.log(person);

 for( key in person){

     console.log( key + ': '+ person[key]);

 }
