document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelectorAll('.cart-item');

    cartItems.forEach(cartItem => {
        const decreaseBtn = cartItem.querySelector('.decrease-quantity');
        const increaseBtn = cartItem.querySelector('.increase-quantity');
        const quantityElement = cartItem.querySelector('.quantity');
        const deleteIcon = cartItem.querySelector('.delete-icon');

        let quantity = parseInt(quantityElement.textContent);

        // Decrease Quantity
        decreaseBtn.addEventListener('click', () => {
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
            }
        });

        // Increase Quantity
        increaseBtn.addEventListener('click', () => {
            quantity++;
            quantityElement.textContent = quantity;
        });

        // Delete Item
        deleteIcon.addEventListener('click', () => {
            cartItem.remove();
            console.log(`Removed item from cart`);
        });
    });
});