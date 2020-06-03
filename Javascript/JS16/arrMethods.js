
let person = [
                { name: "Anna", work: "doctor" },
                { name: "Eric", work: "Hair Dresser" },
                { name: "David", work: "web developer" },
                { name: "Mansour", work: "web developer" }

             ];
// find return the first elemet when the test is passed

let result = person.find( function(item){
    return item.work ==="web developer";
});
//console.log(result);

// filter return array when the test is passed

// findIndex return the first index when the test is passed


// Reverse Function 
const fruit = [ 'Banana', 'Orange', 'Pear','Apple'];
fruit.reverse();

//console.log(fruit);

// sort
const numbers = [1,43,56,33,23,44,36,5,4];
numbers.sort();
//console.log(numbers);

let val;
// use compare function
val = numbers.sort( function(x,y){
    return x - y ;
} );

//console.log(val);


//reverse sort
val = numbers.sort( function(x,y){
    return x - y;
} );

//console.log(val);

//console.log(fruit.sort());



/////////////////////////////////////////
// reduce 
let cities = [
    {
        city: " Hamburg",
        population: 500
    },
    {
        city: " Berlin",
        population: 200
    },
    {
        city: " stuttgart",
        population: 700
    }

];
let value = 0;
for( let i = 0 ; i< cities.length ; i++){
    value += cities[i].population;

}
//console.log(value);

 let sum = cities.reduce( function( total , num ){   return total + num.population   },500)
 //console.log(sum);


 let myNumbers = [4,3,3,10];
 myNumbers.push(100)
 const sumNumbers = myNumbers.reduce(function( sum , item){
     return sum + item;
 },0);
 //console.log(sumNumbers);
 ///////////////////////////////////////////////////////////////////
// map function 


let arr = [2,4,8,10];
let newArr = arr.map( function(item){
   
   
    return item * 2;
} )
console.log(newArr)

let persons = [ 
    { name : "Max" , job : "web developer"  },
    { name : "Carl" , job : "artist"  },
    { name : "Dan" , job : "web designer"  }
];
let newPersons = persons.map(function(item){
    let info = ` ${item.name} is working as   ${item.job} `;
   // let info = item.name + ' is working as     ' + item.job;

    document.write('<h1>' +info + '</h1>')
    return info;
})

