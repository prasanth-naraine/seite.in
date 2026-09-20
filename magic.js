// -------------------------------------------------------------------------
// menu
const hamClose = document.querySelector(".navbar-clickable");
const menuShow = document.querySelector(".responsive-lap-mobile");

hamClose.addEventListener("click", function () {
    menuShow.classList.toggle("active");
    hamClose.classList.toggle("active");
});


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