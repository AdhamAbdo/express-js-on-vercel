// script.js

// Toggles the mobile menu open and closed
function toggleMobile() {
  document.getElementById('mobile-menu').classList.toggle('open');
}

// Toggles between dark and light themes
function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  body.setAttribute('data-theme', newTheme);
  
  // Update the button icon
  document.getElementById('theme-btn').innerText = newTheme === 'dark' ? '☀️' : '🌙';
}

// Toggles the page language between Arabic and English
function toggleLang() {
  const html = document.documentElement;
  const currentLang = html.getAttribute('lang');
  
  if (currentLang === 'ar') {
    html.setAttribute('lang', 'en');
    html.setAttribute('dir', 'ltr');
    document.getElementById('lang-btn').innerText = 'AR';
  } else {
    html.setAttribute('lang', 'ar');
    html.setAttribute('dir', 'rtl');
    document.getElementById('lang-btn').innerText = 'EN';
  }
}

// Handles simple navigation/scrolling
function showPage(pageId) {
  // Assuming a single-page scrolling setup based on your HTML structure
  const element = document.getElementById(pageId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Gathers form data and sends it via WhatsApp
function sendViaWhatsApp() {
  const name = document.getElementById('f-name').value;
  const service = document.getElementById('f-service').value;
  const msg = document.getElementById('f-msg').value;
  
  // Format the text for the WhatsApp URL
  const text = `الاسم / Name: ${name}%0Aالخدمة / Service: ${service}%0Aالرسالة / Message: ${msg}`;
  
  // Open WhatsApp in a new tab
  window.open(`https://wa.me/201119690838?text=${text}`, '_blank');
}

// Intersection Observer to handle the ".reveal" scroll animations you set up in CSS
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach((el) => {
    observer.observe(el);
  });
});