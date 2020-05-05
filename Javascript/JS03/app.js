//console.log('Hello World');
// const age = 65;
//console.log(typeof id);
// less than 18 
// 18 and more 
// 65 or more

// if(age < 18){
//     console.log(' you cant drive you are too young');

// }
// else if(age >= 65){
//     console.log('you cant drive you are too old');    
// }
// else{
//     console.log('you can drive yeah!! ');
// }


// function  greet(){

//     console.log('Hello');
//     }

//     greet();

// function  greet(){

//     return 'Hello';
// }
// let message  = greet();
// console.log(message);

//     function  greet(firstName , lastName ){


//         return  'Hello ' + lastName  +  ' ' +  firstName;

//     }
//   let msg = greet('Smith','Sara')
//    console.log(msg);


// function  greet(firstName='Sara' , lastName='Smith' ){


//     return  'Hello ' + firstName + ' ' + lastName;

//     } 

//     //let msg = greet() ;
//       let  msg = greet('John','Doe') ;
//     console.log(msg);

// function makeDiv(width,height,color,background,border,content,opacity){


// }
// makeDiv('200px','300px','red','yellow','1px solid #fff','This is the name','.8');


// function getTypeOfArgument(value){


//     return typeof value;


// }

// let myType = getTypeOfArgument(55);
// console.log('the type of your variable is : ',myType);

// function getSquare(num){
//     return num * num;
// }

// const getSquare = function(num){
//     return num * num;
// }

// console.log(getSquare(10));

// (function(){
//     console.log('the function started');

// })()

// (function(name){
//     console.log('hello ' + name);

// })('John');

const smartPhone = {

    brand: 'apple',
    color: 'white',
    model: 'iphone x',
    price: 500

}
// smartPhone.color='red';
//     //smartPhone = {  brand:'Samsung' ,   color:'white',  model:'iphone x' } ;
//     console.log('My Smartphone is : '+  smartPhone.brand + '  '+ ' the color is     :'+smartPhone.color + ' and the model is : ' + smartPhone.model );
//     let car= {     
//         name: "BMW",    
//         model: 'x7',   
//         year: 2019,
//         color:'Black'  
//       };
//    console.log('My car is' +'   '+ car.name + ' with model '+ car.model + 'form year ' + car.year + ' the color is ' + car.color);

const person = {
    firstName: 'Mansour',
    lastName: 'Tumeh',
    age: 25,
    address: {
        city: "Berlin",
        Street: 'Rennbanstr 14'
    },
    email: 'mansour@gmail.com'
}
const max = {
    firstName: 'Max',
    lastName: 'Smith',
    age: 45,
    address: {
        Street: 'Rennbanstr 14',
        city: "Köln"
    },
    email: 'max@gmail.com'
}

// console.log(person.firstName);

// console.log(person['firstName']); 

function getPersonInfo(personData) {
    return 'My name is ' + personData.firstName + ' ' + personData.lastName + ' i am  ' + personData.age + ' My city is ' + personData.address.city + ' my street is ' +
        personData.address.Street + ' my Email is ' + personData.email
}


const myInfo = getPersonInfo(person);
// console.log(myInfo);





// const weekDays = {
//     0 : "Sunday",
//     1 : "Monday",
//     2 : "Tuesday",
//     3 : "Wednesday",
//     4 : "Thursday",
//     5 : "Friday",
//     6 : "Saturday"    
//     }

// function getDay(num){



//     return weekDays[num]
// }

// console.log(weekDays);


// const day = getDay(1);
// console.log(day);

const person1 = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1988,
    address: {
        city: "Berlin",
        Street: 'Rennbanstr 14'
    },
    email: 'email@gmail.com',
    fullName: function () {
        return this.firstName + ' ' + this.lastName
    },
    fullAddress: function () {
        return this.address.city + ' ' + this.address.Street

    },
    getInfo: function () {
        return this.fullName() +' '+ this.getAge() + ' years old and live in ' + this.fullAddress()

    },
    getAge: function () {
        return 2020 - this.birthYear;
    }
};
// person1['birthYear'] = 1977;
// person1.birthYear= 1977;
// person1.address.city = 'Hamburg';

// console.log(person1.fullName());
// console.log(person1.fullAddress());
// console.log(person1.getInfo());
// console.log(person1.getAge());


