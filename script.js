
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


function validatePassword(password) {
    return password.length >= 8;
}


const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const allGood = document.getElementById('all-good');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');


emailError.style.display = 'block';
passwordError.style.display = 'block';


emailInput.addEventListener('input', function () {
    const value = emailInput.value;
    
    if (value.length >= 3 && validateEmail(value)) {
        emailError.style.display = 'none';
    } else {
        emailError.style.display = 'block';
    }
    updateAllGood();
});


passwordInput.addEventListener('input', function () {
    const value = passwordInput.value;
    
    if (value.length >= 8) {
        passwordError.style.display = 'none';
    } else {
        passwordError.style.display = 'block';
    }
    updateAllGood();
});


function updateAllGood() {
    if (validateEmail(emailInput.value) && validatePassword(passwordInput.value)) {
        allGood.style.display = 'block';
    } else {
        allGood.style.display = 'none';
    }
}


const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', function (event) {
    event.preventDefault(); 
    
    if (validateEmail(emailInput.value) && validatePassword(passwordInput.value)) {
        const confirmation = confirm('Are you sure you want to login?');
        if (confirmation) {
            alert('Successful login!');
            
           
            emailInput.value = '';
            passwordInput.value = '';
            
           
            emailError.style.display = 'block';
            passwordError.style.display = 'block';
            allGood.style.display = 'none';
        }
    } else {
        alert('Please fix the errors before submitting!');
    }
});
