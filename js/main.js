// main.js
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Header scroll effect
  const header = document.querySelector('.header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.style.background = 'rgba(5, 5, 15, 0.95)';
      header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
      header.style.background = 'rgba(10, 10, 20, 0.9)';
      header.style.boxShadow = 'none';
    }
  });

  // Card hover effects
  const cards = document.querySelectorAll('.card, .service-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const x = e.clientX - this.getBoundingClientRect().left;
      const y = e.clientY - this.getBoundingClientRect().top;
      
      const centerX = this.offsetWidth / 2;
      const centerY = this.offsetHeight / 2;
      
      const angleX = (y - centerY) / 10;
      const angleY = (centerX - x) / 10;
      
      this.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
  });

  // Initialize particle background if needed
  // initParticles();
});

// Optional: Particle.js background
function initParticles() {
  // You would implement this with a library like particles.js
  // or your own implementation
}
// Add this to your existing main.js
document.addEventListener('DOMContentLoaded', function() {
  // Make login button pulse to attract attention
  const loginBtn = document.querySelector('.login-btn');
  if (loginBtn) {
    setTimeout(() => {
      loginBtn.classList.add('pulse');
    }, 2000);
    
    // Stop pulsing when hovered
    loginBtn.addEventListener('mouseenter', () => {
      loginBtn.classList.remove('pulse');
    });
    
    loginBtn.addEventListener('mouseleave', () => {
      setTimeout(() => {
        loginBtn.classList.add('pulse');
      }, 1000);
    });
  }
});
// Initialize particles
document.addEventListener('DOMContentLoaded', function() {
  particlesJS("particles-js", {
    "particles": {
      "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
      "color": { "value": "#00f0ff" },
      "shape": { "type": "circle" },
      "opacity": { "value": 0.5, "random": true },
      "size": { "value": 3, "random": true },
      "line_linked": { "enable": true, "distance": 150, "color": "#00f0ff", "opacity": 0.3, "width": 1 },
      "move": { "enable": true, "speed": 3, "direction": "none", "random": true, "straight": false, "out_mode": "out" }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": { "enable": true, "mode": "repulse" },
        "onclick": { "enable": true, "mode": "push" }
      }
    }
  });
});
// In main.js
const heroTitle = document.getElementById("hero-title");
if (heroTitle) {
  const heroText = "Transforming Digital Dreams into Reality";
  let i = 0;
  const typing = () => {
    if (i < heroText.length) {
      heroTitle.innerHTML += heroText.charAt(i);
      i++;
      setTimeout(typing, 100);
    }
  };
  typing();
}
// In main.js
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const target = +counter.getAttribute('data-target');
  const increment = target / 60;
  let current = 0;
  const updateCounter = () => {
    if (current < target) {
      current += increment;
      counter.innerText = Math.floor(current);
      setTimeout(updateCounter, 30);
    } else {
      counter.innerText = target; // Ensure final value is exact
    }
  };
  updateCounter();
});
