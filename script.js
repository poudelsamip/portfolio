// Custom cursor
const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX - 4 + "px";
  cursor.style.top = e.clientY - 4 + "px";

  setTimeout(() => {
    follower.style.left = e.clientX - 20 + "px";
    follower.style.top = e.clientY - 20 + "px";
  }, 100);
});

// Hide custom cursor on small screens
if (window.innerWidth <= 1024) {
  cursor.style.display = "none";
  follower.style.display = "none";
}

// Dark mode - Load theme preference from localStorage
const modeBtn = document.querySelector(".mode-menu");
const body = document.body;

const theme = localStorage.getItem("theme");
if (theme === "dark-mode") {
  body.classList.add("dark-mode");
}

modeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  localStorage.setItem(
    "theme",
    body.classList.contains("dark-mode") ? "dark-mode" : "light-mode"
  );
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Scroll reveal animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".project, .contact-content").forEach((el) => {
  observer.observe(el);
});
