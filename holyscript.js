function show(desc) {

    if (desc.classList.contains('hidden')) {
        desc.classList.add('vaguelyhidden');
        desc.classList.remove('hidden');
        setTimeout(function () {
            desc.classList.remove('vaguelyhidden');
        }, 20)
    }
    
}

function hide(desc) {
    if (!desc.classList.contains('hidden')) {
        desc.classList.add('hidden');
    }
}

document.addEventListener('DOMContentLoaded', () => {

    let home = document.querySelector('.home-desc');
    let home_btn = document.querySelector('.home-btn');

    let about = document.querySelector('.about-desc');
    let about_btn = document.querySelector('.about-btn');

    let contact = document.querySelector('.contact-desc')
    let contact_btn = document.querySelector('.contact-btn')

    let projlist = document.querySelector('.project-list')
    let proj_btn = document.querySelector('.archive-btn')

    home_btn.addEventListener('click', function() {
        show(home)
        hide(about)
        hide(contact)
        hide(projlist)
    }, false)

    about_btn.addEventListener('click', function() {
        show(about)
        hide(home)
        hide(contact)
        hide(projlist)
    }, false)

    contact_btn.addEventListener('click', function() {
        show(contact)
        hide(home)
        hide(about)
        hide(projlist)
    }, false)

    proj_btn.addEventListener('click', function() {
        show(projlist)
        hide(home)
        hide(about)
        hide(contact)
    }, false)

})