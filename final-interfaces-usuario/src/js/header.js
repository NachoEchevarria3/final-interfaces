const btnOpenMenu = document.getElementById('btn-open-menu')
const btnCloseMenu = document.getElementById('btn-close-menu')
const menuMobile = document.querySelector('.menu-mobile')
const body = document.body

btnOpenMenu.addEventListener('click', () => {
    menuMobile.classList.add('show')
    body.style.overflow = 'hidden'
})

btnCloseMenu.addEventListener('click', () => {
    menuMobile.classList.remove('show')
    body.style.overflow = ''
})

// Menu
const avatar = document.getElementById('header-avatar')
const menu = document.getElementById('user-menu')
avatar.addEventListener('click', () => {
    menu.classList.toggle('show')
})

// Mobile
const itemMenuMyAccount = document.getElementById('menu-item__my-account')
const submenu = document.querySelector('.menu-mobile__submenu')

itemMenuMyAccount.addEventListener('click', () => {
    submenu.classList.toggle('dropdown')
})
