const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSucces(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//function valid email checker

function isValidEmail(email){
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

//event listenr for form validator form
form.addEventListener('submit', function(e){
    e.preventDefault();

    if(username.value === ''){
        showError(username,'Username is required');
    }else{
        showSucces(username);
    }

    if(email.value === ''){
        showError(email,'Email is required');
    }else if(!isValidEmail(email.value)){
      showError(email, 'Please provide a valid email address');
    }
    else{
        showSucces(email);
    }
    if (password.value == '') {
      showError(password,'Password is required');
    } else {
      showSucces(password);
    }
    if (password2.value == '') {
      showError(password2,'Password is required');
    } else if (password.value != password2.value){
      showError(password, 'Password is not matched');
    }
     else {
      showSucces(password2);
    }
});