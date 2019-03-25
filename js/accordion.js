let section1 = document.querySelector(".item-1");
let section2 = document.querySelector(".item-2");
let section3 = document.querySelector(".item-3");
let section4 = document.querySelector(".item-4");
let contentSection1 = document.querySelector(".accordion-content-1");
let contentSection2 = document.querySelector(".accordion-content-2");
let contentSection3 = document.querySelector(".accordion-content-3");
let contentSection4 = document.querySelector(".accordion-content-4");
let title1 = document.querySelector(".title1-section-js");
section1.addEventListener('click', () => {
    expand(section1, contentSection1);
    remove(section2);
    hideContent(contentSection2);
    hideContent(contentSection3);
    hideContent(contentSection4);
    remove(section3);
    remove(section4);
    title1.classList.toggle('hide');

})
section2.addEventListener('click', () => {
    expand(section2, contentSection2);
    remove(section1);
    remove(section3);
    remove(section4);
    hideContent(contentSection1);
    hideContent(contentSection3);
    hideContent(contentSection4);
})
section3.addEventListener('click', () => {
    expand(section3, contentSection3);
    remove(section1);
    remove(section2);
    remove(section4);
    hideContent(contentSection2);
    hideContent(contentSection1);
    hideContent(contentSection4);
})
section4.addEventListener('click', () => {
    expand(section4, contentSection4);
    remove(section1);
    remove(section3);
    remove(section2);
    hideContent(contentSection2);
    hideContent(contentSection3);
    hideContent(contentSection1);

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