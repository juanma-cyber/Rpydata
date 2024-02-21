document.addEventListener('DOMContentLoaded', function () {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navLinks = document.getElementById('nav-links');

    navbarToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});
