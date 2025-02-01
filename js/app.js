// Dark-Light Mode Toggle with Persistence
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Load saved theme from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        themeIcon.textContent = '🌙';
    } else {
        document.body.classList.remove('dark-mode');
        themeIcon.textContent = '☀️';
    }
});

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode);
    themeIcon.textContent = isDarkMode ? '🌙' : '☀️';
});

// Custom Alert Modal
const customAlert = document.getElementById('custom-alert');
const alertTitle = document.getElementById('alert-title');
const alertMessage = document.getElementById('alert-message');
const alertCloseBtn = document.getElementById('alert-close-btn');

// Show Alert Function
function showAlert(title, message) {
    alertTitle.textContent = title;
    alertMessage.textContent = message;
    customAlert.classList.remove('hidden');
}

// Hide Alert Function
function hideAlert() {
    customAlert.classList.add('hidden');
}

// Close Alert When Clicking the Close Button
alertCloseBtn.addEventListener('click', hideAlert);

// Close Alert When Clicking Outside the Box
customAlert.addEventListener('click', (event) => {
    if (event.target === customAlert) {
        hideAlert();
    }
});

// Export showAlert Function for Use in Other Scripts
window.showAlert = showAlert;