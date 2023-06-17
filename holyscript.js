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

function timercountdown(){
    timevar = setTimeout(showstart, 3000);
}

function showstart(){
    let start_btn = document.querySelector(".start-btn")
    let loader = document.querySelector(".loader")
    show(start_btn)
    hide(loader)
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

    let start_btn = document.querySelector(".start-btn")

    let sound_btn_on = document.querySelector(".sound-button.on")
    let sound_btn = document.querySelector(".sound-button")
    let sound_btn_off = document.querySelector(".sound-button.off")

    let nav = document.querySelector(".nav")

    let nav_btn = document.querySelector(".nav-btn")

    let bgm = document.getElementById("bgm")

    home_btn.addEventListener('click', function() {
        show(home)
        hide(about)
        hide(contact)
        hide(projlist)
    }, false)

    start_btn.addEventListener('click', function () {
        show(home)
        show(nav)
        hide(start_btn)
        bgm.play()
    }, false)

    // sound_btn.addEventListener('click', function () {
    //     if (sound_btn_on) {
    //         sound_btn_on.classList.remove("on")
    //         sound_btn.classList.add("off")
    //         bgm.pause()
    //         bgm.currentTime = 0;
    //     } if (sound_btn_off) {
    //         sound_btn_off.classList.remove("off")
    //         sound_btn.classList.add("on")
    //         bgm.play()
    //     }
        
    // })

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

    nav_btn.addEventListener('click', function() {
        document.querySelector('.nav-menu').classList.toggle('toggled');
    })

})