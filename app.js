const username = document.querySelector('#username');
const password = document.querySelector('#password');
const submit = document.querySelector('#submit');

submit.addEventListener('click',(event)=>{
    event.preventDefault();

    //USERNAME VALDATION
    if(username.value.trim() == ''){
        error(username,'username cannot be empty');
       }else{
        sucess(username);
       }

    // Password  Validation
    if(password.value.trim() == ''){
        error(password,'password can not be empty');
    }else{
        sucess(password);
    }
    
});


function error(element,msg) {
    element.style.border = '3px red solid';
    const parent = element.parentElement;
    const p = parent.querySelector('p');
    p.textContent = msg;
    p.style.visibility = 'visible';

}

function sucess(element){
    element.style.border = '3px green solid';
    const parent = element.parentElement;
    const p = parent.querySelector('p');
    p.style.visibility = 'hidden';

}