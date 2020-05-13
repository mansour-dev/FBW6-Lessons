const person = {
    firstName : "Sara",
    lastName: "Smith",
    1: 'web developer',
    2: 'Hamburg',
    age : 39
};


// const names = ['Sara','Jack'];

// names.forEach( function(item){
//    console.log(item);
   
// } );

for( i in person){

    console.log(  i + ' : '+    person[i]);
    
}

console.log(person.lastName);
console.log('my Name is : ',person['firstName'] + ' ' + person['lastName']);
console.log('Im working as ',person[1]);
console.log('Im living in  ', person[2]);


let colors = ['red','blue','green'];

// with for loop
for(let i = 0 ; i < colors.length ; i++){
    console.log('with for loop',colors[i]);    
}
// with forEach

colors.forEach(function(color){
    console.log('with forEach loop ', color);
});

// with for in loop 
for( let i in colors ){
    console.log('with for in loop ',colors[i]);
    
}