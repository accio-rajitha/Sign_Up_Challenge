// Email input validation function
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

emailInput.addEventListener('input', function () {
    const value = emailInput.value;
    const emailError = document.getElementById('email-error');
    
    if (value.length >= 3 && validateEmail(value)) {
        emailError.style.display = 'none';
    } else {
        emailError.style.display = 'inline';
    }
    updateAllGood();
});

passwordInput.addEventListener('input', function () {
    const value = passwordInput.value;
    const passwordError = document.getElementById('password-error');
    
    if (value.length >= 8) {
        passwordError.style.display = 'none';
    } else {
        passwordError.style.display = 'inline';
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
            
            document.querySelectorAll('p').forEach(element => {
                element.style.display = 'none';
            });
            allGood.style.display = 'none';
        }
    } else {
        alert('Please ensure all fields are valid.');
    }
});
