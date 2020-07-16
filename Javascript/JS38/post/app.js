document.getElementById('postBtn').addEventListener('click',sendData);

const data = {
    title: " Rami",
    body : "this is Rami Post ",
    userId: 522
}

function sendData(){
    const xhr = new XMLHttpRequest();

    xhr.open('POST' ,'https://jsonplaceholder.typicode.com/posts' ,true );
    
    xhr.setRequestHeader('Content-type', 'application/json');

    xhr.send(JSON.stringify(data));

    xhr.onload = function(){
        console.log(xhr.responseText);
    }

}

document.getElementById("formData").addEventListener('submit' ,sendFormData );
const title = document.getElementById('title');
const body = document.getElementById('body');

function sendFormData(e){
    e.preventDefault();

    const myData = {};

    myData.title = title.value ;

    myData.body = body.value;
    
    const xhr = new XMLHttpRequest();

    xhr.open('POST' ,'https://jsonplaceholder.typicode.com/posts' ,true );
    
    xhr.setRequestHeader('Content-type', 'application/json');

    xhr.send(JSON.stringify(myData));

    title.value = '';
    
    body.value='';

    xhr.onload = function(){
        console.log(xhr.responseText);
    }

}