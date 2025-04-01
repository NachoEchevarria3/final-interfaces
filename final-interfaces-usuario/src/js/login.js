const formLogin = document.getElementById('login-form')

formLogin.addEventListener('submit', (e) => {
    e.preventDefault()

    formLogin.innerHTML = `
        <div class='progress-bar-container'>
            <div class='progress-bar'></div>
        </div>
    `

    setTimeout(() => {
        window.location.href = 'home.html'
    }, 2000)
})