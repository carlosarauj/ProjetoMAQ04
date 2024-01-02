let loginBtn = document.querySelector('#loginBtn')

loginBtn.addEventListener('click', () => {
    let email = document.querySelector('#email').value
    let senha = document.querySelector('#senha').value
    
    if(email === 'admin' && senha === 'admin'){
        alert('Login sucess')
        location.href = 'html/index.html'
        /* return false */
    } else {
        alert('Email ou senha incorretos')
    }
})
