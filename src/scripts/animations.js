import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const themeToggles = document.querySelectorAll("#theme-toggle, #darkModeToggle");
const themeLabel = document.querySelector("[data-theme-label]");
const heroThemeToggle = document.querySelector("#darkModeToggle");

const updateThemeToggles = () => {
    const isDark = document.documentElement.classList.contains("dark");

    themeToggles.forEach((toggle) => {
        toggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
        toggle.setAttribute("aria-pressed", String(isDark));
    });

    if (themeLabel) {
        themeLabel.textContent = isDark ? "Light mode" : "Dark mode";
    }

    if (heroThemeToggle) {
        heroThemeToggle.textContent = isDark ? "Toggle Light Mode" : "Toggle Dark Mode";
    }
};

themeToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        const isDark = document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        updateThemeToggles();
    });
});

updateThemeToggles();

const introTimeline = gsap.timeline({ paused: true });
const heroIntroElements = document.querySelectorAll("#home > p, #home > h1");

if (heroIntroElements.length > 0) {
    introTimeline.from(heroIntroElements, {
        y: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
    });
    introTimeline.play();
}

document.querySelector("#replayBtn")?.addEventListener("click", () => {
    introTimeline.restart();
});

gsap.utils.toArray(".reveal").forEach((section) => {
    gsap.from(section, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
    });
});

if (document.querySelector("#progressBar")) {
    gsap.fromTo(
        "#progressBar",
        { scaleX: 0 },
        {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
                trigger: document.documentElement,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            },
        },
    );
}

document.querySelector("#contactForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    window.alert("Thanks for your message! The form is not connected to a backend yet.");
});
