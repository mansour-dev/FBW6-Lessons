let students1 =['John','Daniel','Mara','Alfred'] ;
let students2 =['Steven','Amit'] ;
students2 = [...students2 , ...students1]
console.log(students2);


let person = {
    name:"Sara",
    age:40,
    job:"web developer"
}

let { name , age , job } = person ;

console.log(name + ' ' ,age + ' ' + job);
name ="John";
console.log(person);
