// Optional JavaScript for additional interactivity
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    
    menuToggle.addEventListener('change', () => {
        const navLinks = document.querySelector('.nav-links');
        if (menuToggle.checked) {
            navLinks.style.display = 'flex';
        } else {
            navLinks.style.display = 'none';
        }
    });
});
