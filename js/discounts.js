document.addEventListener('DOMContentLoaded', () => {
    const discountCards = document.querySelectorAll('.discount-card');

    // Add click event to each discount card
    discountCards.forEach(card => {
        card.addEventListener('click', () => {
            showAlert(`You clicked on a discount: ${card.querySelector('p').textContent}`);
        });
    });
});