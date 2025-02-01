// Simulate Category List
const categories = ['Espresso', 'Cappuccino', 'Latte', 'Mocha', 'Tea', 'Categor 2', 'Category 3', 'Category 4', 'Espresso', 'Cappuccino', 'Latte', 'Mocha', 'Tea', 'Categor 2', 'Category 3', 'Category 4'];

document.addEventListener('DOMContentLoaded', () => {
    const categoryList = document.querySelector('.category-list');

    categories.forEach(category => {
        const categoryDiv = document.createElement('a');
        categoryDiv.href = '#';
        categoryDiv.textContent = category;
        categoryDiv.classList.add('category-item');
        categoryDiv.addEventListener('click', () => {
            showAlert(`Navigating to ${category} category`);
            // You can implement routing or filtering logic here
        });
        categoryList.appendChild(categoryDiv);
    });
});