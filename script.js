// ---------- Terminal boot sequence ----------
const termBody = document.getElementById("termBody");

const bootLines = [
  { text: "$ system status --services", cls: "path" },
  { text: "resolving stack ..." },
  { text: "✓ node.js        online   12ms", cls: "ok" },
  { text: "✓ express        online    8ms", cls: "ok" },
  { text: "✓ postgresql     online   19ms", cls: "ok" },
  { text: "✓ mongodb        online   14ms", cls: "ok" },
  { text: "✓ redis          online    2ms", cls: "ok" },
  { text: "✓ typescript     compiled  0 errors", cls: "ok" },
  { text: " " },
  { text: "$ whoami" },
  { text: "samip poudel — backend-focused full stack dev", cls: "path" },
  { text: "$ cat focus.txt" },
  { text: "APIs · data modeling · auth · performance" },
];

function typeTerminal() {
  let lineIndex = 0;

  function nextLine() {
    if (lineIndex >= bootLines.length) {
      const cursor = document.createElement("span");
      cursor.className = "cursor-blink";
      termBody.appendChild(cursor);
      return;
    }

    const { text, cls } = bootLines[lineIndex];
    const lineEl = document.createElement("div");
    lineEl.className = "line" + (cls ? " " + cls : "");
    termBody.appendChild(lineEl);

    let charIndex = 0;
    const speed = text.startsWith("$") ? 35 : 8;

    function typeChar() {
      if (charIndex < text.length) {
        lineEl.textContent += text[charIndex];
        charIndex++;
        setTimeout(typeChar, speed);
      } else {
        lineIndex++;
        setTimeout(nextLine, text.trim() === "" ? 80 : 160);
      }
    }
    typeChar();
  }

  nextLine();
}

if (termBody) {
  typeTerminal();
}

// ---------- Dynamic footer year ----------
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ---------- Smooth scroll for anchor links ----------
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ---------- Scroll reveal ----------
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".project").forEach((el) => observer.observe(el));
