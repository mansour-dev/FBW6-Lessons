// filter in js 

let cities = ['Hamburg', 'Berlin', 'Stuttgart','newyork' ,'london', 'paris'];

let filtered = cities.filter(function(item, index){
 // return item !== 'Hamburg'

   return index !== 0
     

});
cities = filtered;

//console.log(cities);


//////////////////////////////////////////
const words = ['one','book','laptop','javascript','php','visual basic'];


const result = words.filter(word => { return word.length > 6 } );

console.log(result);
