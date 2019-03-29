const hamburger = document.querySelector(".hamburger");
const menuOpen = document.querySelector(".open-menu-js");
const menuClose = document.querySelector(".close-menu-js")
const expandMenu = document.querySelector(".expand-js");
const menuItem = document.querySelector('.content-menu-js');

const routeWork = document.querySelector('.item-work-js');
const routeAbout = document.querySelector('.item-about-js');
const routeServices = document.querySelector('.item-services-js');
const routeContact = document.querySelector('.item-contact-js');
const routeHome = document.querySelector('.item-home-js');
const btnTranslateMobile = document.querySelector('.btn-translate');
const btnTranslateDesktop = document.querySelector('.btn-translate-d');
const translateEn = document.getElementsByClassName('translate-en');
const translateEs = document.getElementsByClassName('translate-es');
// Open Menu



menuOpen.addEventListener("click", () => {
    expandMenu.classList.add('menu-section-expand');
    expandMenu.classList.remove('hide');
    viewOption();

});

menuClose.addEventListener("click", () => {
    expandMenu.classList.remove('menu-section-expand');
    expandMenu.classList.add('hide');
    hideOption();
})


function viewOption() {
    menuItem.classList.remove('hide');
    menuItem.classList.add('menu-item');
}

function hideOption() {
    menuItem.classList.add('hide');
    menuItem.classList.remove('menu-item');
}


function translate() {

    let valueLanguage = getLanguage();
    if (valueLanguage == "es") {
        for (var i = 0; i < translateEn.length; i++) {
            translateEn[i].classList.remove("hide");
        }
        for (var i = 0; i < translateEs.length; i++) {
            translateEs[i].classList.add("hide");
        }
        localStorage.setItem('language', 'en');
    } else {
        for (var i = 0; i < translateEn.length; i++) {
            translateEn[i].classList.add("hide");
        }
        for (var i = 0; i < translateEs.length; i++) {
            translateEs[i].classList.remove("hide");
        }
        localStorage.setItem('language', 'es');
    }



}

function getLanguage() {
    let language = localStorage.getItem('language');
    return language;

}

btnTranslateMobile.addEventListener('click', () => {

    translate();

});

btnTranslateDesktop.addEventListener('click', () => {
    translate();

});

// Route
routeWork.addEventListener('click', () => {

    window.location.href = '../views/proyect.html';
    translate();

})

routeAbout.addEventListener('click', () => {
    window.location.href = '../views/about.html';
    translate();

})

routeContact.addEventListener('click', () => {
    window.location.href = '../views/contact.html';
    translate();

})

routeServices.addEventListener('click', () => {
    window.location.href = '../views/process.html';
    translate();
})

routeHome.addEventListener('click', () => {
    window.location.href = '../views/home.html';
    translate();
});

translate();