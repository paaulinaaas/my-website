import style from './scss/style.scss';

const inputs = document.querySelectorAll('.input');
const buttons = document.querySelectorAll('.btn');

const toggleForm = () => {
    inputs.forEach(input => {
        input.classList.remove('warning')
    })
    buttons.forEach(btn => {
        buttons.forEach(btn => {
            btn.classList.remove('btn--active')
        })
        event.target.classList.add('btn--active')
        if(event.target.classList.contains('btn__signup')) {
            document.getElementById('logIn').classList.remove('active')
            document.getElementById('signUp').classList.add('active')
        } else if (event.target.classList.contains('btn__login')) {
            document.getElementById('signUp').classList.remove('active')
            document.getElementById('logIn').classList.add('active') // let login = true to let signup = false
        }
    })
}


const formValidate = () => {
    for (let i = 0; i <inputs.length; i++) {
        inputs[i].classList.remove('warning');
        if (!inputs[i].value) {
            console.log(inputs[i])
            console.log('a')
            inputs[i].classList.add('warning')
        }
        let inputType = inputs[i].getAttribute('type')
        if (inputType == 'email') {
            validateEmail(inputs[i])
        }
    }
}

//EMAIL VALIDATION (for adding extra 'warning' class when not valid)
const validateEmail = (email) => {
    if (/\S+@\S+\.\S+/.test(email.value)) {
        return (true)
    } else {
        email.classList.add('warning')
        return (false)
    }
}

buttons.forEach((btn) => {
    btn.addEventListener('click', toggleForm)
})
document.querySelectorAll('.input__submit').forEach((submit) => {
    submit.addEventListener('click', formValidate)
})