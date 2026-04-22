// ── Typing Effect ────────────────────────────────────────────
const roles = ["Programmer", "Developer", "Problem Solver"];
let i = 0, j = 0, del = false;

function type() {
    const el = document.querySelector(".typing");
    if (!el) return;
    const text = roles[i];
    el.textContent = text.substring(0, j);
    if (!del && j < text.length)       j++;
    else if (del && j > 0)             j--;
    else { del = !del; if (!del) i = (i + 1) % roles.length; }
    setTimeout(type, del ? 60 : 110);
}
type();

// ── Particles (Hero only) ────────────────────────────────────
if (typeof particlesJS !== 'undefined' && document.getElementById("particles-js")) {
    particlesJS("particles-js", {
        particles: {
            number:      { value: 55, density: { enable: true, value_area: 900 } },
            color:       { value: "#7dd3fc" },
            shape:       { type: "circle" },
            opacity:     { value: 0.35, random: false },
            size:        { value: 2.5, random: true },
            line_linked: { enable: true, distance: 140, color: "#7dd3fc", opacity: 0.18, width: 1 },
            move:        { enable: true, speed: 1.6, direction: "none", out_mode: "out" }
        },
        interactivity: {
            detect_on: "canvas",
            events:    { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
            modes:     { grab: { distance: 130, line_linked: { opacity: 0.5 } }, push: { particles_nb: 3 } }
        },
        retina_detect: true
    });
}

// ── AOS Init ─────────────────────────────────────────────────
if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 750, once: false, mirror: true });
}

// ── Active Nav Highlight on Scroll ───────────────────────────
const sections  = document.querySelectorAll("section[id]");
const navLinks  = document.querySelectorAll("nav#navbar .nav-link");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Update active nav link
    sections.forEach(section => {
        const top    = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;
        if (scrollY >= top && scrollY < bottom) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === "#" + section.id) {
                    link.classList.add("active");
                }
            });
        }
    });

    // Header bg on scroll
    const header = document.querySelector("header");
    if (header) {
        header.classList.toggle("scrolled", scrollY > 50);
    }
});
