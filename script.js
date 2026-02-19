// Save scroll position before page unloads
window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('scrollPos', window.scrollY);
});

// Restore scroll position when page loads
window.addEventListener('load', () => {
    const scrollPos = sessionStorage.getItem('scrollPos');
    if (scrollPos) {
        window.scrollTo(0, parseInt(scrollPos));
    }
});

const navbar = document.getElementById("navigation");
navbar.style.display = "none"