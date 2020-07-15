let reg = /world/i;

// Metacharacter Symbols
reg = /^h/i;     // Must start with  
reg = /d$/i     // Must end with 
 reg = /^hello$/i // Must start with and end with
// reg = /h.llo/i  // Matches any single character
 reg = /h*llo/i  // Matches 0 character or more
reg = /gre?a?y/i // optional character
// reg = /he?a?llo\./i // Escape character

// Brackets
reg = /gr[ae]y/i // Must be a or e 
reg = /[GF]ray/i  // Must be G or F
reg = /[^GF]ray/i // Match anything except G or F 
reg = /[A-Z]ray/ // Match any Uppercase
reg = /[a-z]ray/ //Match any lowercase 
reg = /[A-Za-z]ray/ //Match any letter
reg = /[0-9]ray/

// Braces 
reg = /Gr{2}y/i // Must occur exactly 2 time of r 
reg = /Gr{2,5}y/i // Must occur between 2 and 5 time of r
reg = /Gr{2,}y/i // Must occur at least 2

// () - grouping 
reg = /^([0-9]gray){3}$/

reg = /gr+y/ // at least one r or more 
reg = /gr.y/

reg = /\w/; // character or  number or _
const str = ''; // any charachter in the . place 


function regTest(reg,str){ 
    if(reg.test(str)){

        console.log(` we found ${reg.source} in ${str} `);
        
    }
    else {
        console.warn(`  ${reg.source} not found in  ${str} `);
        
    }
}


regTest(reg,str);

const result = reg.exec(str);
console.log(result);
