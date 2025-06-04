document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#form');
    const email = document.querySelector('#value1');
    const username = document.querySelector('#value2');
   

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        validateInputs();
    });

    function validateInputs() {
        const usernameVal = username.value.trim();
        const emailVal = email.value.trim();

        if (usernameVal === '') 
        {
            setError(username, 'This field is required');
        } 
        else if (usernameVal.length < 8)
        {
            setError(username, 'Minimum 8 characters');
        } 
        else
        {
            setSuccess(username);
        }
        

        if (emailVal === '') {
            setError(email, 'This field is required');
        } else if (!validateEmail(emailVal)) {
            setError(email, 'Email is not valid');
        } else {
            setSuccess(email);
        }
    }

    function setError(element, message) {
        const inputGroup = element.parentElement;
        const errorElement = inputGroup.querySelector('.error');
        errorElement.innerText = message;
        inputGroup.classList.add('error');
        inputGroup.classList.remove('success');
    }

    function setSuccess(element) {
        const inputGroup = element.parentElement;
        const errorElement = inputGroup.querySelector('.error');
        errorElement.innerText = '';
        inputGroup.classList.add('success');
        inputGroup.classList.remove('error');
    }

    const validateEmail = (emailVal) => {
        return String(emailVal)
            .toLowerCase()
            .match(
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/
            );
    };
});
// var a1 = document.getElementById("v1");
// a1.addEventListener("mouseover", a);

// function a() {
//     a1.style.backgroundColor = "tomato";
// }

