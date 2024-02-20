function scrollToElement(elementSelector) {  
    const element = document.querySelector(elementSelector);

    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const link1 = document.getElementById("link1");
    const link2 = document.getElementById("link2");
    const link3 = document.getElementById("link3");

    link1.addEventListener('click', () => {
        scrollToElement('.about');
    });

    link2.addEventListener('click', () => {
        scrollToElement('.experiences');
    });

    link3.addEventListener('click', () => {
        scrollToElement('.box');
    });
});
