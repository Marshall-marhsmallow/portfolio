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
const trigger = document.getElementById("heronavlist");
const obsorver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            navbar.classList.add("visible");
            navbar.classList.remove("hidden");
        }
        if (entry.isIntersecting) {
            navbar.classList.remove("visible");
            navbar.classList.add("hidden");
        }
    })
})
obsorver.observe(trigger);
const Bannertxt = document.getElementById("bannertxt");
/*const WinWidth = window.innerWidth;
console.log(WinWidth)
if(WinWidth <= 1025 ){
Bannertxt.innerText = "N T"}*/
window.addEventListener('resize', () => {
    const Winwidth = window.innerWidth;
    if (Winwidth <= 1371) {
        Bannertxt.innerText = "N T"
    }
    else{
        Bannertxt.innerText = "Nour Talmasani";
    }
})