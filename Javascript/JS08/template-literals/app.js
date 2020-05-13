const user ='Mansour';
let msg = "Hello " + user + " Good Morning" ;

msg = ` hello    ${user}     Good Morning `;

const name = 'Daniel';
const age = 36;
const job = 'Web Developer';
const city = 'Hamburg';

let info;
function greeting(){
    return 'Hello world';
}
// without template literal
info = '<ul> <li>Name: ' +name +   '</li><li>Age: ' +age +   '</li><li>Job: ' +job +   '</li><li>City: ' +city +   '</li> </ul>'

info = '<ul>'+
       '<li>Name: ' +name +   '</li>' +
       '<li>Age: ' +age +   '</li>' + 
       '<li>Job: ' +job +   '</li>' +
       '<li>City: ' +city +   '</li>' +
       '</ul>';

info =`<ul>
        <li>Name:  ${name}    </li>
        <li>Age:  ${age}   </li>
        <li>Job:  ${job}   </li>
        <li>City: ${city} </li>
        <li>     ${ 9 + 9 } </li>
        <li> ${greeting() } </li>
        <li>  ${msg}  </li>
        <li>  ${ age > 30 ? 'Over 30': 'Under 30' }  </li>
       </ul>`;






document.body.innerHTML = info;



function generatColor(){
let result =''




return result;
}