// WEB STORAGE
// - localStorage
// - sessionStorage
// WINDOW LOCATION

let username = document.getElementById('username');
let password = document.getElementById('password');

let form = document.getElementById('login__form');

let userinput = document.querySelector('.userinput');
let passinput = document.querySelector('.passinput');

// // Save data to sessionStorage 

// Get saved data from sessionStorage
// let data = sessionStorage.getItem('key');
// console.log(data)

function login(e) {
    e.preventDefault();
    let user = localStorage.getItem('user')
    user = JSON.parse(user)
    if (username.value === user.username && password.value === user.password){
        userinput.style.border = '2px solid #0cf03a';
        passinput.style.border = '2px solid #0cf03a';
        window.location.href = window.location.href.replace('login.html', 'profile.html');
    }
    else if (username.value === user.username || password.value !== user.password){
        userinput.style.border = '2px solid #0cf03a'
        passinput.style.border = '2px solid red'
    }
    else if (username.value !== user.username || password.value === user.password){
        passinput.style.border = '2px solid #0cf03a'
        userinput.style.border = '2px solid red'
    }
    else {
        userinput.style.border = '2px solid red'
        passinput.style.border = '2px solid red'
    }

    let login_data = {};

    login_data.username = user.username;
    login_data.password = user.password;
    login_data = JSON.stringify(login_data)

    
    sessionStorage.setItem('user', login_data);
    

}




form.addEventListener('submit', login);

