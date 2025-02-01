// Advertisement Image Slider
const adImages = document.querySelectorAll('.ad-image');
let currentImageIndex = 0;

function showNextAd() {
    adImages[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % adImages.length;
    adImages[currentImageIndex].classList.add('active');
}

setInterval(showNextAd, 3000); // 3 seconds interval

// Add to Cart Button Functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const productCard = event.target.closest('.product-card');
        const productName = productCard.querySelector('.card-details h3').textContent;
        const productPrice = productCard.querySelector('.card-details p').textContent;
        console.log(`Added to Cart: ${productName} - ${productPrice}`);
        showAlert(`Added to Cart: ${productName} - ${productPrice}`);
    });
});