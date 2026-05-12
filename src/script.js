// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('menu-close');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
  });
}

if (mobileMenuClose) {
  mobileMenuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
}

// Close mobile menu on link click
const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});

// WhatsApp link configuration
const WHATSAPP_NUMBER = '8801700000000'; // Update with actual number
const WHATSAPP_MESSAGE = 'আমি রাহমানিয়া স্কিলস সেন্টারের সম্পর্কে জানতে চাই।';

const whatsappButtons = document.querySelectorAll('[data-whatsapp]');
whatsappButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const message = btn.getAttribute('data-message') || WHATSAPP_MESSAGE;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}
