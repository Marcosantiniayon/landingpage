const menuHamburger = document.querySelector('.menuHamburger');
let menuOpen = false;
menuHamburger.addEventListener('click', () => {
    if(!menuOpen) {
        menuHamburger.classList.add('open')
        menuOpen = true;
    }else{
        menuHamburger.classList.remove('open');
        menuOpen = false;
    }
})