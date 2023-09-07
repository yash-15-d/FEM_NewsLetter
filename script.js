const form=document.querySelector('form');
const first=document.querySelector('.first'); //select section one
const second=document.querySelector('.second'); //select section two
const error=document.getElementById('error-msg')
const input_box=document.querySelector('#email');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(valid()){
        first.classList.add('hidden');
        second.classList.remove('hidden');
    }
    
})
function valid(){
    const email = document.getElementById('email');
    const emailValue = email.value;
    let my_name=document.querySelector('#my_name');
    my_name.innerText = emailValue;
    my_name.classList.add('font-bold')
    //what makes an email valid
    //case 1 -> when it includes @gmail.com
    if(emailValue.includes('@gmail.com') && emailValue.length>10){
        input_box.classList.add('border-gray-500');
        input_box.classList.remove('border-red-500');
        console.log(emailValue);
        return true;
    }
    else{
        error.innerHTML="Valid email required";
        input_box.classList.add('border-red-500');
        input_box.classList.remove('border-gray-500');
        return false;
    }
}

