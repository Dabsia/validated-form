// Assignment of variables

let firstname = document.getElementById('first_name');
let lastname = document.getElementById('last_name');
let othername = document.getElementById('other_name');
let username = document.getElementById('user_name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let password = document.getElementById('password');
let confirm_password = document.getElementById('confirm_password');

let Form = document.getElementById('myform');

let password_input = document.querySelector('.pass_input');
let confirm_pass_input = document.querySelector('.confirm_pass_input');

let success__message = document.querySelector('.success__message');
let sign__up__page = document.querySelector('.sign__up__details')

let image__container = document.querySelector('.image__container')

let chk = document.getElementById('chk')

function validatePassword(e){
    e.preventDefault()
    if (password.value === confirm_password.value){
        getUserDetails()
        password_input.style.border = '1px solid black'
        confirm_pass_input.style.border = '1px solid black'
        image__container.style.display = 'none'
        sign__up__page.style.display = 'none'
        success__message.style.display = 'block'
        
    }

    else{
        password_input.style.border = '2px solid red'
        confirm_pass_input.style.border = '2px solid red'
    }
}

function getUserDetails(){
    
    let data = {};

    data.firstname = firstname.value;
    data.lastname = lastname.value;
    data.othername = othername.value;
    data.username = username.value;
    data.email = email.value;
    data.phone = phone.value;
    data.password = password.value;
    data.confirm_password = confirm_password.value;
    data = JSON.stringify(data);

    localStorage.setItem('user', data);

}

function togglepassword(){
    if (chk.checked === true){
        password.type = 'text'
    }
    else{
        password.type = 'password'
    }
}
Form.addEventListener('submit', validatePassword)

chk.addEventListener('change', togglepassword)
