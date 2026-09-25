// -------------------------------------------------------------------------
// menu
const hamClose = document.querySelector(".navbar-clickable");
const menuShow = document.querySelector(".responsive-lap-mobile");

hamClose.addEventListener("click", function () {
    menuShow.classList.toggle("active");
    hamClose.classList.toggle("active");
});

// -------------------------------------------------------------------------
// services dropdown
// const servicesDropdown = document.querySelector(".services-dropdown");
// const servicesLink = document.querySelector(".services-link");

// if (servicesDropdown && servicesLink) {

//     servicesLink.addEventListener("click", function (e) {

//         // Only use click-to-open on mobile/tablet
//         if (window.innerWidth <= 1200) {
//             e.preventDefault();

//             servicesDropdown.classList.toggle("mobile-active");
//         }

//     });
// }

// -------------------------------------------------------------------------
// Register scroll event listener on the global window
window.addEventListener("scroll", () => {
    // Capture current pixels scrolled from top
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    // Calculate total scrollable window height minus client viewport height
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // Prevent division by zero if page is not scrollable
    const scrolledPercentage = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

    // Dynamically update progress bar width using DOM style manipulation
    document.getElementById("myProgressBar").style.width = `${scrolledPercentage}%`;
});

// -------------------------------------------------------------------------
// AOS
AOS.init();

// -------------------------------------------------------------------------
// Initialize Lenis
const lenis = new Lenis({
    duration: 4, // Speed of the animation in seconds (higher = slower/smoother)
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Linear deceleration curve
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
});
// Connect Lenis to the browser requestAnimationFrame loop
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


// ---------------------------------------
// faq
const faqItems = document.querySelectorAll(".q-a-div");

const isTouchDevice = window.matchMedia("(hover: none)").matches;

faqItems.forEach(item => {

    // Hover Open (Desktop only)
    if (!isTouchDevice) {

        item.addEventListener("mouseenter", () => {
            faqItems.forEach(el => {
                if (el !== item) {
                    el.classList.remove("active");
                }
            });

            item.classList.add("active");
        });


        item.addEventListener("mouseleave", () => {
            item.classList.remove("active");
        });

    }


    // Click Toggle (Desktop + Mobile)
    item.addEventListener("click", () => {

        const isActive = item.classList.contains("active");

        faqItems.forEach(el => {
            el.classList.remove("active");
        });

        if (!isActive) {
            item.classList.add("active");
        }

    });

});

// Cookies
const cookies = document.querySelector(".cookies");
const buttons = document.querySelectorAll(".cookies-cta a");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        cookies.classList.add("cookies-active");

        localStorage.setItem("cookiesSeen", "true");
    });
});

if (localStorage.getItem("cookiesSeen")) {
    cookies.classList.add("cookies-active");
}
