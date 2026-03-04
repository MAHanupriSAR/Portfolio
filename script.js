const hamburgerBtn = document.getElementById('hamburger_btn');
const navLinks = document.getElementById('section_links_area');

// Toggle menu visibility
hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu function for links
function closeMenu() {
    if (window.innerWidth <= 900) {
        navLinks.classList.remove('active');
    }
}