function randomColorRgb(){
    let red =Math.floor( Math.random() * 256 );
    let blue =Math.floor( Math.random() * 256 );
    let green =Math.floor( Math.random() * 256 );
    //rgb(red,blue,green)
    let result = `rgb(${red} , ${blue} , ${green})`;
   
    return result;

}



let randomColorRgba = function(){
    let red =Math.floor( Math.random() * 256 );
    let blue =Math.floor( Math.random() * 256 );
    let green =Math.floor( Math.random() * 256 );
    let opacity = Math.random().toFixed(1) ;
    //rgba(red,blue,green)
    let result = `rgba(${red} , ${blue} , ${green} ,${opacity})`;
   
    return result;

}

setInterval( function(){
    document.body.innerHTML =`<h1> ${randomColorRgba()} </h1>` ;
     document.body.style.background = randomColorRgba();
} ,2000 )


// create a function to generate random number within Range
// generateNumber(num1,num2)  => // the result should be between 20 and 100
// the range = the high - the low 

// // Math.random() * range 

// 100 , 30 


// // range = 100 - 30 = 70 

// Math.random() * 70   + low   
//randomWithRange(10 ,60)
function randomWithRange(min , max){
    let range =  Math.abs(min - max)  +1  ;    //  
    
    let randomNumber =  Math.floor( Math.random() * range + min  );  //10 --- 60
    return randomNumber;
    
}
console.log(randomWithRange(10, 60));