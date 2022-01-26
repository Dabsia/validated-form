let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let othername = document.getElementById('othername');

let btn = document.querySelector('#logout')

let username = document.getElementById('username');
let uname = document.getElementById('uname')

let email = document.getElementById('email');
let phone = document.getElementById('phone');



    let user = localStorage.getItem('user')
    user = JSON.parse(user)
    firstname.innerHTML = user.firstname;
    lastname.innerHTML = user.lastname;
    othername.innerHTML = user.othername;

    username.innerHTML = user.username;
    uname.innerHTML = user.username;    

    email.innerHTML = user.email;
    phone.innerHTML = user.phone;

function clear(){
    sessionStorage.clear()
    window.location.href = window.location.href.replace('profile.html', 'index.html');
}


btn.addEventListener('click', clear)