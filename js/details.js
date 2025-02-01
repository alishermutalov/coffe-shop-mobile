document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('name') || 'Default Product';
    const productPrice = urlParams.get('price') || '$XX.XX';

    const productInfo = document.querySelector('.product-info');
    const productImage = productInfo.querySelector('.product-image');
    const productNameElement = productInfo.querySelector('.product-name');
    const productPriceElement = productInfo.querySelector('.product-price');

    // Set default image based on product name
    let productImageSrc = './images/default.png'; // Default image
    if (productName === 'Espresso') {
        productImageSrc = './images/vecteezy_espresso-coffee-isolated-illustration_23434641.jpg';
    } else if (productName === 'Cappuccino') {
        productImageSrc = './images/vecteezy_cappuccino-cup-isolated-illustration_22989794.jpg';
    } else if (productName === 'Latte') {
        productImageSrc = './images/coffe.png';
    } else if (productName === 'Mocha') {
        productImageSrc = './images/coffe-2.png';
    }

    productImage.src = productImageSrc;
    productNameElement.textContent = productName;
    productPriceElement.textContent = productPrice;

    // Quantity Selector
    const decreaseBtn = productInfo.querySelector('.decrease-quantity');
    const increaseBtn = productInfo.querySelector('.increase-quantity');
    const quantityElement = productInfo.querySelector('.quantity');

    let quantity = 1;

    decreaseBtn.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
        }
    });

    increaseBtn.addEventListener('click', () => {
        quantity++;
        quantityElement.textContent = quantity;
    });

    // Add to Cart Button
    const addToCartBtn = productInfo.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', () => {
        showAlert(`Added ${quantity}x ${productName} to cart`);
    });
});