process.stdout.write("\n");
//process.stdout.write("\n");


function draw(stars , rows){
   
    for(let i = 0 ;i < rows;i++){        // to make rows          
        
        for(let a = 0; a < stars;a++){ // to make stars  
               if( i === 0 || a === 0 || a + i === rows -1 )           
                process.stdout.write(" *"); 
                
                else
                process.stdout.write("  "); 


        }

        process.stdout.write('\n'); // new line
        
    }
    
}


//process.stdout.write("\n");
//console.log(draw(5,5));

function draw3(stars , rows){
   
    for(let i = 0 ;i < rows;i++){        // to make rows          
        
        for(let a = 0; a < stars;a++){ // to make stars  
               if( i === 0 || a === 0 || a + i === stars -1 )           
                process.stdout.write(" "+a); 
                
                else
                process.stdout.write("  "); 


        }

        process.stdout.write('\n'); // new line
        
    }
    
}
console.log(draw3(8,8));

//////////////////////////////

function draw4(stars , rows){
   
    for(let i = 0 ;i < rows;i++){        // to make rows          
        
        for(let a = 0; a < stars;a++){ // to make stars  
               if( i === 0 || a === stars -1 || a === i )           
                process.stdout.write(" *"); 
                
                else
                process.stdout.write("  "); 


        }

        process.stdout.write('\n'); // new line
        
    }
    
}
console.log(draw4(8,8));

