const name = document.getElementById('name');
const zip = document.getElementById('zip');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

name.addEventListener('blur' ,validateName);
// email.addEventListener('blur' ,validateEmail);
// zip.addEventListener('blur' ,validateZip);
// phone.addEventListener('blur' ,validatePhone);

function validateName(e){
  const reg = /^[a-zA-Z]{2,15}$/;
  if(!reg.test(name.value)){
       // wrong
       name.classList.add('is-invalid');
       name.classList.remove('is-valid');
       
  }
  else{
      // all is fine between 2 and 10 
    name.classList.remove('is-invalid');
    name.classList.add('is-valid')
    
  }

  
}
