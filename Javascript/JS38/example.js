// 1 
const xhr = new XMLHttpRequest();

// 2 
xhr.open('GET' ,'https://reqres.in/api/users/2' ,true )

// 3 
xhr.send()


// 4 

xhr.onload = function(){
    console.log(xhr.status);

    // 200  ok
    // 403 Forbidden
    // 404 Not Found 
}

xhr.onerror = function(){
    console.log(' Request Error!!');
}