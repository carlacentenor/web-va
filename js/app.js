const hamburger = document.querySelector(".hamburger");
const menuOpen = document.querySelector(".open-menu-js");
// const menuOpenAcordion = document.querySelector(".open-menu-acordion-js");
const menuClose = document.querySelector(".close-menu-js");
// const menuCloseAcordion = document.querySelector(".close-menu--accordion-js");
const expandMenu = document.querySelector(".expand-js");
// const expandMenuAcordion = document.querySelector(".expand-accordion-js");
const menuItem = document.querySelector('.content-menu-js');
// const menuItemAcordion = document.querySelector('.content-menu-accordion-js');
const routeWork = document.querySelector('.item-work-js');
const routeAbout = document.querySelector('.item-about-js');
const routeServices = document.querySelector('.item-services-js');
const routeContact = document.querySelector('.item-contact-js');
const routeHome = document.querySelector('.item-home-js');
const btnTranslateMobile = document.querySelector('.btn-translate');
const btnTranslateDesktop = document.querySelector('.btn-translate-d');

// Open Menu


function viewOption() {
    menuItem.classList.remove('hide');
    menuItem.classList.add('menu-item');
}



function hideOption() {
    menuItem.classList.add('hide');
    menuItem.classList.remove('menu-item');
}




// Route


routeWork.addEventListener('click', () => {

    window.location.href = '../views/proyect.html';


})

routeAbout.addEventListener('click', () => {
    window.location.href = '../views/about.html';
 

})

routeContact.addEventListener('click', () => {
    window.location.href = '../views/contact.html';
    

})

routeServices.addEventListener('click', () => {
    window.location.href = '../views/process.html';
   
})

routeHome.addEventListener('click', () => {
    window.location.href = '../views/home.html';
    
});
