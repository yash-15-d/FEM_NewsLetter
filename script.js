let btn = document.getElementsByClassName('btn');
let Sectionone = document.querySelector('.first');
let submit_btn = document.getElementById('submit');
let sectionTwo = document.querySelector('.second');

let btn2 = document.getElementById('btn2');
function valid() {

}

submit_btn.addEventListener('submit', function (e) {
    e.preventDefault();
    if (validate(emailval)) {

        Sectionone.classList.add('hidden');
        sectionTwo.classList.remove('hidden');
    }
    else {
        Sectionone.classList.remove('hidden');
        sectionTwo.classList.add('hidden');

    }

})

let error = document.getElementById('error-msg');
let email = document.getElementById('email');
let ip = document.getElementById('input');
let emailval = email.value;
console.log(emailval);
function validate(emailValue) {
    e.preventDefault();
    if (emailValue.includes('@gmail.com')) {
        error.innerHTML = "";
        return true;
    }
    else {
        error.innerHTML = "Not a valid email address";
        ip.style.borderColor = "red";
        ip.style.backgroundColor = "pink";
        return false;
    }
}

