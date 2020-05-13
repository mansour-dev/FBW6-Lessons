function greeting(name,index ,array){
    
    console.log('Hello ' + name + ' your index is ' + index + ' in the array : '+ array);
    return 'Hi';
    
}



const names = ["Daniel", "Sara", "Nazgul"];

names.forEach( greeting  );


// ["Daniel", "Sara", "Nazgul"].forEach(function(item, index, array){
//     console.log(`${item} is at index ${index} in ${array}`);
//   });