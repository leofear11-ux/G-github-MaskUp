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
});
