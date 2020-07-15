
 function iWillGetYouFlowers(flowersAreInSeason) {
         return new Promise((resolve, reject) => {
                     if(flowersAreInSeason) {
                        resolve(' we are in the  Flower Season :)');        
                    } else { 
                         reject(' we are not in Flower Season :(');       
                    }                               
                });
  }

 iWillGetYouFlowers(true)
  .then((msg)=>{
      console.log(msg);
      
    console.log('💗');
  })
  .catch((err)=>{
      console.log('💔');
      console.log(err);
      
  })
  