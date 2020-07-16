document.querySelector("#getBtn").addEventListener('click',getText);

function getText(){
    // 1
    const xhr = new XMLHttpRequest();

    //2 
    xhr.open('GET','data.txt',true);

    // 3 
    xhr.send();

    //4 
    xhr.onload = function(){
        console.log(xhr.status);
        console.log(xhr.responseText);
        document.getElementById("output").innerHTML = `<h3> ${xhr.responseText}  </h3>`
    }


}