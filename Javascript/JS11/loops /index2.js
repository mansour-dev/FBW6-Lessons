// filter in js 

let cities = ['Hamburg', 'Berlin', 'Stuttgart','newyork' ,'london', 'paris'];

let filtered = cities.filter(function(item, index){
 // return item !== 'Hamburg'

   return index !== 0
     

});
cities = filtered;

console.log(cities);



