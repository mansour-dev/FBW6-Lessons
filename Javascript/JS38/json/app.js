document.getElementById("btn1").addEventListener('click' , loadUser);
document.getElementById("btn2").addEventListener('click' , loadUsers);


// load Single User 
function loadUser(){
    // 1
    const xhr = new XMLHttpRequest();

    // 2
    xhr.open('GET','user.json' , true);

    // 3
    xhr.send();

    // 4
    xhr.onload = function(){
        if(xhr.status === 200 ){
            console.log(xhr.responseText);
            const user = JSON.parse(xhr.responseText);
            const output = `
            <ul>
                <li> ID : ${user.id}</li>
                <li> Name : ${user.name}</li>
                <li> Email : ${user.email}</li>
                <li> Company : ${user.company}</li>
                <li> Phone : ${user.phone}</li>
            </ul>
            `;
            document.getElementById("user").innerHTML = output;
        }
    }


}

// laod users 
function loadUsers(){
     // 1
     const xhr = new XMLHttpRequest();

     // 2
     xhr.open('GET','users.json' , true);
 
     // 3
     xhr.send();
 
     // 4
     xhr.onload = function(){
         if(xhr.status === 200 ){
             console.log(xhr.responseText);
             const users = JSON.parse(xhr.responseText);
             let  output =''
             users.forEach(function(user){
                output += `
                <ul>
                    <li> ID : ${user.id}</li>
                    <li> Name : ${user.name}</li>
                    <li> Email : ${user.email}</li>
                    <li> Company : ${user.company}</li>
                    <li> Phone : ${user.phone}</li>
                </ul>
                `;
                document.getElementById("users").innerHTML = output;

             })
         }
     }

}