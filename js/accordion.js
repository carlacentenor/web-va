let section1 = document.querySelector(".item-1");
let section2 = document.querySelector(".item-2");
let section3 = document.querySelector(".item-3");
let section4 = document.querySelector(".item-4");
let contentSection1 = document.querySelector(".accordion-content-1");
let contentSection2 = document.querySelector(".accordion-content-2");
let contentSection3 = document.querySelector(".accordion-content-3");
let contentSection4 = document.querySelector(".accordion-content-4");
let title1 = document.querySelector(".title1-section-js");
let title2 = document.querySelector(".title2-section-js");
let title3 = document.querySelector(".title3-section-js");
let title4 = document.querySelector(".title4-section-js");
let navMenu = document.querySelector(".align-nav-menu-js");



section1.addEventListener('click', () => {
    expand(section1, contentSection1);
    remove(section2);
    hideContent(contentSection2);
    hideContent(contentSection3);
    hideContent(contentSection4);
    remove(section3);
    remove(section4);
    navMenu.classList.remove('w25');
    navMenu.classList.add('w5');
})
section2.addEventListener('click', () => {
    expand(section2, contentSection2);
    remove(section1);
    remove(section3);
    remove(section4);
    hideContent(contentSection1);
    hideContent(contentSection3);
    hideContent(contentSection4);
    navMenu.classList.remove('w25');
    navMenu.classList.add('w5');


})
section3.addEventListener('click', () => {
    expand(section3, contentSection3);
    remove(section1);
    remove(section2);
    remove(section4);
    hideContent(contentSection2);
    hideContent(contentSection1);
    hideContent(contentSection4);
    navMenu.classList.remove('w25');
    navMenu.classList.add('w5');


})
section4.addEventListener('click', () => {
    expand(section4, contentSection4);
    remove(section1);
    remove(section3);
    remove(section2);
    hideContent(contentSection2);
    hideContent(contentSection3);
    hideContent(contentSection1);
    navMenu.classList.remove('w5');
    navMenu.classList.add('w25');


})

const expand = (element, elementContent) => {
    element.classList.toggle("expand-section");
    element.classList.toggle("bg-white");
    elementContent.classList.toggle('hide');

}

const remove = (element) => {
    element.classList.remove("expand-section");
    element.classList.remove("bg-white");;
}

const hideContent = (element) => {
    element.classList.add("hide");

}

const showContent = (element) => {
    element.classList.add("show");
}