const users = [
    { name : 'Lara' , email: 'lara@gmail.com'},
    { name : 'Mike' , email: 'mike@gmail.com'}
];
function createUser(user){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        users.push(user);
        const myError = false;
        if(myError === false){
            resolve(' All is done !!!!!!')
        }
        else{
            reject(' we hav an error!!')
        }
       
    },2000)

   })
}

function getUser(){
    setTimeout(()=>{
    let output = '';
    users.forEach((item)=>{
        output += `<li> ${item.name} --> ${item.email} </li>`;
    });
    document.body.innerHTML = `<ul> ${output} </ul>` ;
    },1000)
}

//console.log(createUser({ name:"Alex" , email:"alex@gmail.com" }));

createUser({ name:"Alex" , email:"alex@gmail.com" })
.then((msg)=>{
    getUser();
    console.log('Done!!!');
    console.log(msg);
})
.catch((err)=>{
    console.log(err); 
   
})




