class Employee {
	constructor (firstname, firstname) {
		this.firstname = firstname;
        this.lastname = firstname;
        this.fullName = this.firstname + this.lastname;
        
		// Complete the code!
	}
}

//Create the  properties fullname and email in the Employee class. Given a person's first and last names:
// Form the fullname by simply joining the first and last name together, separated by a space.
// Form the email by joining the first and last name together with a . in between, and follow it with @company.com at the end. Make sure everything is in lowercase.


let developer = new Employee('John','Doe');
console.log(developer.fullName);
console.log(developer.email);


////////////////////////////////////////////////////////
 // Write functions to add(), subtract(), multiply() and divide()
    /* 
    Create functions for the Calculator class that can do the following:
    Add two numbers.
    Subtract two numbers.
    Multiply two numbers.
    Divide two numbers.
    The functions should return the result of the calculation.
        
    */
class Calculator {
    constructor(){

    }
   
   add(firstNumber,lastNumber){
       return firstNumber + lastNumber ;

   }
   subtract(){

   }
   multiply(){

   }
   divide(){

   }
}
let calculator = new Calculator();
calculator.add(10, 5) // 15
calculator.subtract(10, 5) // 5
calculator.multiply(10, 5) // 50
calculator.divide(10, 5) // 2



// create a class Car 
//property : brand
// methode  : printInfo about the care 


// Create a class named "Model 
// which will inherit the methods from the "Car" class:
// property : photo ->  string 
// methode to print all info about the care 
