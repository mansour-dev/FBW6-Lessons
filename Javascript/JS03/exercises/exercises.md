// create a function to get the day of the week
// day number as argument


//











































function returnSquare(x) {
  if (typeof x !== 'number') {
    return 'The action you are trying to perform is not possible!';
  } else {
    return x**2;
  }
}

const squareOfNine = returnSquare(9);
console.log(squareOfNine);




function getDay(num){
    const weekDays = {
        0 : "Sunday",
        1 : "Monday",
        2 : "Tuesday",
        3 : "Wednesday",
        4 : "Thursday",
        5 : "Friday",
        6 : "Saturday"
    }
    return weekDays[num];
}