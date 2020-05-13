let users  =  [ { name:"John", email: "john@gmail.com"  },
                { name:"Sara", email: "sara@gmail.com"  },
                { name:"Peter", email: "peter@gmail.com"  },
                { name:"Natalie", email: "natalie@gmail.com"  }

                ];

                delete users[0];
                

                 for(let i in users){
                     console.log( i  + ' : ' + users[i] );
                 }
                 console.log('=====================');
                 

                for(let i = 0 ; i < users.length ; i++){
                    console.log( i + ' : '+ users[i]);
                }
                
                console.log(users.length);
                


              
               