const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const error = document.querySelector('error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submitted');
    checkInputs();
});

function checkInputs() {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    if (nameValue === '') {
        setErrorFor(name, 'Name cannot be empty');
    } else {
        setSuccessFor(name);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be empty')
    }  else if (!isEmail(emailValue)){
        setErrorFor(email, 'Sorry, invalid format here');
    }
    else {
        setSuccessFor(email)
    }

    if (messageValue === '') {
        setErrorFor(message, 'Message cannot be empty')
    } else {
        setSuccessFor(message);
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector('.error-message');
    errorMessage.innerText = message;
    const errorIcon = formControl.querySelector('.i-error');
    errorIcon.setAttribute("style", "display:block");
    errorMessage.setAttribute("style", "display:block");
    formControl.className = 'form-control error';     
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector('.error-message');
    errorMessage.innerText = '';
    formControl.className = 'form-control success';
    const errorIcon = formControl.querySelector('.i-error');
    errorIcon.setAttribute("style", "display:none");
      
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

