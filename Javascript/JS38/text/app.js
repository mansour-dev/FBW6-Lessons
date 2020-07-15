document.querySelector('#loadBtn').addEventListener('click',loadText)
function loadText(){
    // 1 
    const xhr = new XMLHttpRequest();

   // 2 
    xhr.open('GET','mytext.txt',true );

    // 3 
    xhr.send();

   // 4
    xhr.onload = ()=>{
        console.log(xhr.status);
        console.warn(xhr.response);
        if(xhr.status === 200){
            document.getElementById('output').innerHTML =`<h3>${xhr.responseText}</h3>` ;
        }
    }
    xhr.onerror = ()=>{
        console.error('Request Error');
    }
}