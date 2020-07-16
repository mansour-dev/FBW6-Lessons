
document.getElementById('getBtn').addEventListener('click', loadUser);
document.getElementById('getBtn2').addEventListener('click', loadAllUsers);
document.getElementById('getBtn3').addEventListener('click', loadUsers);

function loadUsers(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET','https://reqres.in/api/users/2' , true);

    // 3
    xhr.send();

    // 4
    xhr.onload = function(){
        console.log(xhr.responseText);
        const user = JSON.parse(xhr.responseText);
        console.log(user);
        
     

    }

}

function loadUser(){
    // 1 
    const xhr = new XMLHttpRequest();

    xhr.open('GET','data.json' , true);

    // 3
    xhr.send();

    // 4
    xhr.onload = function(){
        //console.log(xhr.responseText);
        const user = JSON.parse(xhr.responseText);
        console.log(user);
        const result = `
        <ul>
            <li> ${user.id}</li>
            <li> ${user.name}</li>
            <li> ${user.email}</li>
            <li> ${user.company}</li>
            <li> ${user.phone}</li>
        </ul>
        `

        document.getElementById('output').innerHTML = result;

    }

}

function loadAllUsers(){
     // 1 
     const xhr = new XMLHttpRequest();

     xhr.open('GET','allData.json' , true);
     
     xhr.send();
     
     xhr.onload = function(){
         console.log(xhr.status);
        if(xhr.status === 200){
        const users = JSON.parse(xhr.responseText);
        console.log(users);
        let result = '';
        users.forEach((element)=>{
             result += `
            <ul>
                <li> ${element.id}</li>
                <li> ${element.name}</li>
                <li> ${element.email}</li>
                <li> ${element.company}</li>
                <li> ${element.phone}</li>
            </ul>
            `
            
        });
        console.log(result);
        document.getElementById('output').innerHTML = result;
        }

     }
    
}