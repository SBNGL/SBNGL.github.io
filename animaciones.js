
const elementsToReveal = document.querySelectorAll("[data-animacion]");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.15
});

elementsToReveal.forEach(el => {
    el.classList.add("reveal");
    revealObserver.observe(el);
});

function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
        document.getElementById("typing-text").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true" class="cursor">|</span>';
        setTimeout(function () {
            typeWriter(text, i + 1, fnCallback)
        }, 100);
    } else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
    }
}

const progressBar = document.getElementById("scroll-progress");
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";

    if (winScroll > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    typeWriter("Sebastian", 0);
});
