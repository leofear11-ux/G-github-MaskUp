
document.addEventListener('DOMContentLoaded', () => {
    const allQuantitySelectors = document.querySelectorAll('.quantity-selector');
    allQuantitySelectors.forEach(selector => {
        const minusBtn = selector.querySelector('.minus-btn');
        const plusBtn = selector.querySelector('.plus-btn');
        const quantityValueSpan = selector.querySelector('.quantity-value');

        plusBtn.addEventListener('click', () => {
            let currentValue = parseInt(quantityValueSpan.textContent, 10);
            currentValue++;
            quantityValueSpan.textContent = currentValue;
        });

        minusBtn.addEventListener('click', () => {
            let currentValue = parseInt(quantityValueSpan.textContent, 10);
            if (currentValue > 1) {
                currentValue--;
                quantityValueSpan.textContent = currentValue;
            }
        });
    });
    // Variable global
    const header = document.querySelector("header")
    const ul = document.querySelector("ul")
    const info = document.querySelector(".info")
    const humb = document.querySelector(".humberger")
    const cl = document.querySelector(".close")
    //Event to scroll the header 
    document.addEventListener('scroll', () => {
        header.style.opacity = (window.scrollY > 420) ? "0" : "100"
        header.style.background = (window.scrollY > 420) ? "none" : "#fff"
    })
    //Event to toggle the menu
    humb.addEventListener('click', () => {
        ul.classList.toggle("collapse")
    })
    //Event to close the menu
    cl.addEventListener('click', () => {
        ul.classList.toggle("toggle_collapse")
    })
});
