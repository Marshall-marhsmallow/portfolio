console.log("Script loaded!");

// Save scroll position
window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('scrollPos', window.scrollY);
});

// Restore scroll position - using multiple methods
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

const savedPos = sessionStorage.getItem('scrollPos');
if (savedPos) {
    // Try immediately
    window.scrollTo(0, parseInt(savedPos));
    
    // Try after DOM loads
    document.addEventListener('DOMContentLoaded', () => {
        window.scrollTo(0, parseInt(savedPos));
    });
    
    // Try after everything loads
    window.addEventListener('load', () => {
        window.scrollTo(0, parseInt(savedPos));
    });
}

// Rest of your code (smooth scroll, cursor, etc.)
const navbar = document.getElementById("navigation");
navbar.style.display = "none"