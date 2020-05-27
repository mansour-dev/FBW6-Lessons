
// parent class 
class Person {

    constructor(firstName,lastName ,birthday ,address,isMarried) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthday = birthday;
      this.address = address;
      this.isMarried = isMarried;
    }
  
    sayHi() {
      console.log(` Hello  ${this.firstName} ${this.lastName}` );
    }
  
  }
  let person = new Person('Sara','Smith','01.06.2000' ,'Hamburg',false);
  person.firstName = 'Gülcin '
  person.sayHi();  
  
  // sub class
  class Student extends Person {
    constructor(firstName,lastName ,birthday ,address,isMarried,id , university) {
      super(firstName,lastName ,birthday ,address,isMarried);
      
      this.id = id;
      this.university = university;
    }
      sayHi() {
      return(` Hello  ${this.firstName} ${this.lastName} from your university ${this.university}` );
    }
    
  }
  
  let student = new Student('Rania','Smith','22.06.1990','Berlin ',false , 24888 , 'TU Berlin' );
  console.log(student.sayHi()); 
  
  
  
  
  // sub class
  class Employee extends Person{
    constructor(firstName,lastName ,birthday ,address,isMarried, company , position) {
      super(firstName,lastName ,birthday ,address,isMarried);
      
      this.company = company;
      this.position = position;
    }
    sayHapppyBirthday(){
      return ` Happy Birthday to you ${this.firstName} ${this.lastName} `;
    }
    
  }
    let developer = new Employee('Daniel','dan','01.02.1985' , 'Hamburg ' , true , 'Blue Sky', 'Fullstack developer');
    console.log(developer.sayHapppyBirthday());
  