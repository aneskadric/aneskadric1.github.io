// features.js
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('darkModeToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      toggleBtn.textContent = document.body.classList.contains('dark-mode')
        ? '☀️ Light Mode'
        : '🌙 Dark Mode';
    });
  }

  const typingEl = document.getElementById('typingText');
  if (typingEl) {
    const textArray = ["C++ Developer", "Web Enthusiast", "Soccer Player"];
    let ti = 0, ci = 0;
    function type() {
      if (ci < textArray[ti].length) {
        typingEl.textContent += textArray[ti].charAt(ci);
        ci++;
        setTimeout(type, 100);
      } else {
        setTimeout(erase, 1500);
      }
    }
    function erase() {
      if (ci > 0) {
        typingEl.textContent = textArray[ti].substring(0, ci - 1);
        ci--;
        setTimeout(erase, 50);
      } else {
        ti = (ti + 1) % textArray.length;
        setTimeout(type, 300);
      }
    }
    type();
  }

  const quoteBtn = document.getElementById('quoteBtn');
  const quoteBox = document.getElementById('quoteBox');
  if (quoteBtn && quoteBox) {
    const quotes = [
      "Stay focused and never give up.",
      "WIN EVERYDAY!",
      "Code, eat, sleep, Repeat.",
      "Dream big, work hard."
    ];
    quoteBtn.addEventListener('click', () => {
      const q = quotes[Math.floor(Math.random() * quotes.length)];
      quoteBox.textContent = q;
    });
  }

  const clockEl = document.getElementById('clock');
  if (clockEl) {
    function updateClock() {
      const now = new Date();
      clockEl.textContent = now.toLocaleTimeString() + " | " + now.toLocaleDateString();
    }
    setInterval(updateClock, 1000);
    updateClock();
  }

  const colorPicker = document.getElementById('colorPicker');
  if (colorPicker) {
    colorPicker.addEventListener('input', e => {
      document.documentElement.style.setProperty('--accent', e.target.value);
    });
  }

  const topBtn = document.getElementById('scrollTopBtn');
  if (topBtn) {
    window.addEventListener('scroll', () => {
      topBtn.style.display = window.scrollY > 200 ? "block" : "none";
    });
    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
