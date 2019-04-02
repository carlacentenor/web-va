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


section1.addEventListener("click", () => {
    let val1 = section1.getAttribute("data-value");

    if (val1 == "1") {
        section1.setAttribute("data-value", "0");
        section2.setAttribute("data-value", "1");
        section3.setAttribute("data-value", "1");
        section4.setAttribute("data-value", "1");
        remove(section2);
        remove(section3);
        remove(section4);
        expandadd(section1, contentSection1);
        hideContent(contentSection2);
        hideContent(contentSection3);
        hideContent(contentSection4);
        hideContent(title1);
        if (section2.getAttribute("data-value") == "1") {
            showContent(title2);
        }
        if (section3.getAttribute("data-value") == "1") {
            showContent(title3);
        }
        if (section4.getAttribute("data-value") == "1") {
            showContent(title4);
        }
    } else {
        section1.setAttribute("data-value", "1");
        expandhide(section1, contentSection1);
        showContent(title1);
    }
});
section2.addEventListener("click", () => {
    let val2 = section2.getAttribute("data-value");
    if (val2 == "1") {
        section1.setAttribute("data-value", "1");
        section2.setAttribute("data-value", "0");
        section3.setAttribute("data-value", "1");
        section4.setAttribute("data-value", "1");
        remove(section1);
        remove(section3);
        remove(section4);
        if (section4.getAttribute("data-value") == "1") {
            showContent(title4);
        }
        if (section3.getAttribute("data-value") == "1") {
            showContent(title3);
        }
        if (section1.getAttribute("data-value") == "1") {
            showContent(title1);
        }
        expandadd(section2, contentSection2);
        hideContent(title2);
        hideContent(contentSection3);
        hideContent(contentSection1);
        hideContent(contentSection4);
    } else {
        section2.setAttribute("data-value", "1");
        expandhide(section2, contentSection2);
        showContent(title2);
    }
});
section3.addEventListener("click", () => {
    let val3 = section3.getAttribute("data-value");
    if (val3 == "1") {
        section1.setAttribute("data-value", "1");
        section2.setAttribute("data-value", "1");
        section3.setAttribute("data-value", "0");
        section4.setAttribute("data-value", "1");
        remove(section1);
        remove(section2);
        remove(section4);
        expandadd(section3, contentSection3);
        hideContent(contentSection2);
        hideContent(contentSection1);
        hideContent(contentSection4);
        hideContent(title3);
        if (section2.getAttribute("data-value") == "1") {
            showContent(title2);
        }
        if (section4.getAttribute("data-value") == "1") {
            showContent(title4);
        }
        if (section1.getAttribute("data-value") == "1") {
            showContent(title1);
        }
    } else {
        section3.setAttribute("data-value", "1");
        expandhide(section3, contentSection3);
        showContent(title3);
    }
});
section4.addEventListener("click", () => {
    let val4 = section4.getAttribute("data-value");
    if (val4 == "1") {
        section1.setAttribute("data-value", "1");
        section2.setAttribute("data-value", "1");
        section3.setAttribute("data-value", "1");
        section4.setAttribute("data-value", "0");
        remove(section1);
        remove(section3);
        remove(section2);
        expandadd(section4, contentSection4);
        hideContent(contentSection2);
        hideContent(contentSection1);
        hideContent(contentSection3);
        hideContent(title4);
        if (section2.getAttribute("data-value") == "1") {
            showContent(title2);
        }
        if (section3.getAttribute("data-value") == "1") {
            showContent(title3);
        }
        if (section1.getAttribute("data-value") == "1") {
            showContent(title1);
        }
    } else {
        section4.setAttribute("data-value", "1");
        expandhide(section4, contentSection4);
        showContent(title4);
    }
});

const expand = (element, elementContent) => {
    element.classList.toggle("expand-section");
    element.classList.toggle("bg-white");
    elementContent.classList.toggle("hide");
};

const expandadd = (element, elementContent) => {
    element.classList.add("expand-section");
    element.classList.add("bg-white");
    elementContent.classList.remove("hide");
};

const expandhide = (element, elementContent) => {
    element.classList.remove("expand-section");
    element.classList.remove("bg-white");
    elementContent.classList.add("hide");
};

const remove = element => {
    element.classList.remove("expand-section");
    element.classList.remove("bg-white");
};


const hideContent = element => {
    element.classList.add("hide");
};

const showContent = element => {
    element.classList.remove("hide");
};

const toggle = element => {
    element.classList.toggle("hide");
};