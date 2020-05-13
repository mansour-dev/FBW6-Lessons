let users  =  [ { name:"John", email: "john@gmail.com"  },
                { name:"Sara", email: "sara@gmail.com"  },
                { name:"Peter", email: "peter@gmail.com"  },
                { name:"Natalie", email: "natalie@gmail.com"  }

                ];

                delete users[0];
                // with for in loop 
                console.log('======== for in loop =============');

                 for(let i in users){
                     console.log( i  + ' : ' + users[i] );
                 }
                 console.log('=====================');
                 
                 console.log('========= for loop ============');
                 // with for loop 
                for(let i = 0 ; i < users.length ; i++){
                    console.log( i + ' : '+ users[i]);
                }
                
                console.log(users.length);
                


              
               