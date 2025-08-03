// Initialize AOS
AOS.init({
  duration: 1200,
  once: true,
  offset: 100
});

// Single Page Navigation
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.page-section');
  
  // Update active navigation based on scroll position
  function updateActiveNav() {
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  // Smooth scroll to section
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Update navigation on scroll
  window.addEventListener('scroll', updateActiveNav);
  
  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // Add cosmic glow effect to planets on hover
  const planets = document.querySelectorAll('.planet');
  planets.forEach(planet => {
    planet.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.2)';
      this.style.boxShadow = '0 0 30px rgba(255,255,255,0.8)';
    });
    
    planet.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
      this.style.boxShadow = '';
    });
  });

  // Add cosmic typing effect to titles
  const titles = document.querySelectorAll('h1');
  titles.forEach(title => {
    if (title.classList.contains('cosmic-title')) {
      const words = title.querySelectorAll('.title-word');
      words.forEach((word, index) => {
        word.style.opacity = '0';
        setTimeout(() => {
          word.style.transition = 'opacity 0.5s ease-in-out';
          word.style.opacity = '1';
        }, index * 200);
      });
    }
  });

  // Add cosmic particle interaction on click
  document.addEventListener('click', function(e) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = e.clientX + 'px';
    particle.style.top = e.clientY + 'px';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = '#fff';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '9999';
    particle.style.animation = 'cosmicParticle 1s ease-out forwards';
    document.body.appendChild(particle);
    
    setTimeout(() => {
      document.body.removeChild(particle);
    }, 1000);
  });
});

// Add cosmic particle animation
const style = document.createElement('style');
style.textContent = `
  @keyframes cosmicParticle {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0) translateY(-50px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Initialize particles.js
particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00ffe1",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});

// Audio Controls
const audioToggle = document.getElementById('audioToggle');
const backgroundAudio = document.getElementById('backgroundAudio');
let isAudioPlaying = false;

if (audioToggle && backgroundAudio) {
  audioToggle.addEventListener('click', () => {
    if (isAudioPlaying) {
      backgroundAudio.pause();
      audioToggle.innerHTML = '<i class="fas fa-music"></i>';
      isAudioPlaying = false;
    } else {
      backgroundAudio.play();
      audioToggle.innerHTML = '<i class="fas fa-pause"></i>';
      isAudioPlaying = true;
    }
  });
}

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu when clicking on a link
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// Breathing Exercise
const breathingCircle = document.getElementById('breathingCircle');
const breathingText = document.getElementById('breathingText');
const timer = document.getElementById('timer');
const startBreathingBtn = document.getElementById('startBreathing');

let breathingInterval;
let isBreathing = false;
let breathCount = 4;

if (startBreathingBtn && breathingCircle) {
  startBreathingBtn.addEventListener('click', () => {
    if (!isBreathing) {
      startBreathing();
      startBreathingBtn.textContent = 'Stop Breathing';
      isBreathing = true;
    } else {
      stopBreathing();
      startBreathingBtn.textContent = 'Start Breathing Exercise';
      isBreathing = false;
    }
  });
}

function startBreathing() {
  let inhale = true;
  breathCount = 4;
  
  breathingInterval = setInterval(() => {
    if (inhale) {
      breathingText.textContent = 'Breathe In';
      breathingCircle.style.transform = 'scale(1.2)';
      breathingCircle.style.borderColor = '#00ffe1';
      timer.textContent = breathCount;
      breathCount--;
      
      if (breathCount < 0) {
        inhale = false;
        breathCount = 4;
      }
    } else {
      breathingText.textContent = 'Breathe Out';
      breathingCircle.style.transform = 'scale(1)';
      breathingCircle.style.borderColor = '#ff9aff';
      timer.textContent = breathCount;
      breathCount--;
      
      if (breathCount < 0) {
        inhale = true;
        breathCount = 4;
      }
    }
  }, 1000);
}

function stopBreathing() {
  clearInterval(breathingInterval);
  breathingText.textContent = 'Breathe In';
  breathingCircle.style.transform = 'scale(1)';
  breathingCircle.style.borderColor = '#00ffe1';
  timer.textContent = '4';
}

// Meditation Timer
const timeDisplay = document.getElementById('timeDisplay');
const startTimerBtn = document.getElementById('startTimer');
const resetTimerBtn = document.getElementById('resetTimer');
const timeOptions = document.querySelectorAll('.time-option');

let timerInterval;
let selectedTime = 0;
let currentTime = 0;
let isTimerRunning = false;

if (timeOptions.length > 0) {
  timeOptions.forEach(option => {
    option.addEventListener('click', () => {
      timeOptions.forEach(opt => opt.classList.remove('active'));
      option.classList.add('active');
      selectedTime = parseInt(option.dataset.time) * 60;
      currentTime = selectedTime;
      updateTimeDisplay();
    });
  });
}

if (startTimerBtn && timeDisplay) {
  startTimerBtn.addEventListener('click', () => {
    if (selectedTime === 0) {
      alert('Please select a time first');
      return;
    }
    
    if (!isTimerRunning) {
      startTimer();
      startTimerBtn.textContent = 'Pause';
      isTimerRunning = true;
    } else {
      pauseTimer();
      startTimerBtn.textContent = 'Resume';
      isTimerRunning = false;
    }
  });
}

if (resetTimerBtn) {
  resetTimerBtn.addEventListener('click', () => {
    resetTimer();
  });
}

function startTimer() {
  timerInterval = setInterval(() => {
    currentTime--;
    updateTimeDisplay();
    
    if (currentTime <= 0) {
      clearInterval(timerInterval);
      alert('Meditation session complete!');
      resetTimer();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  currentTime = selectedTime;
  updateTimeDisplay();
  startTimerBtn.textContent = 'Start Timer';
  isTimerRunning = false;
}

function updateTimeDisplay() {
  const minutes = Math.floor(currentTime / 60);
  const seconds = currentTime % 60;
  timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Daily Quote Generator
const dailyQuote = document.getElementById('dailyQuote');
const quoteAuthor = document.getElementById('quoteAuthor');
const newQuoteBtn = document.getElementById('newQuoteBtn');

const quotes = [
  {
    text: "Everything in this universe is a reflection of you. Within you lies the energy of stars, galaxies, and infinite potential.",
    author: "The Cosmic Energy"
  },
  {
    text: "The moment you let go of resistance, life begins to flow effortlessly. The universe always has your back.",
    author: "Cosmic Wisdom"
  },
  {
    text: "Within silence, there is clarity. The cosmic voice whispers only to those who listen deeply.",
    author: "Ancient Wisdom"
  },
  {
    text: "You are not a drop in the ocean. You are the entire ocean in a drop.",
    author: "Rumi"
  },
  {
    text: "The universe is not outside of you. Look inside yourself; everything that you want, you already are.",
    author: "Cosmic Consciousness"
  },
  {
    text: "Energy flows where attention goes. Focus on the light, and the light will grow.",
    author: "Energy Healing"
  },
  {
    text: "In the vastness of space and the immensity of time, it is my joy to share a planet and an epoch with you.",
    author: "Carl Sagan"
  },
  {
    text: "The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself.",
    author: "Cosmic Connection"
  }
];

let currentQuoteIndex = 0;

if (newQuoteBtn && dailyQuote && quoteAuthor) {
  newQuoteBtn.addEventListener('click', () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === currentQuoteIndex && quotes.length > 1);
    
    currentQuoteIndex = newIndex;
    const quote = quotes[currentQuoteIndex];
    
    dailyQuote.style.opacity = '0';
    quoteAuthor.style.opacity = '0';
    
    setTimeout(() => {
      dailyQuote.textContent = quote.text;
      quoteAuthor.textContent = `- ${quote.author}`;
      dailyQuote.style.opacity = '1';
      quoteAuthor.style.opacity = '1';
    }, 300);
  });
}

// Chakra Healing Buttons
const healButtons = document.querySelectorAll('.heal-btn');

healButtons.forEach(button => {
  button.addEventListener('click', () => {
    const chakra = button.dataset.chakra;
    const chakraCard = button.closest('.chakra-card');
    
    // Add healing animation
    chakraCard.style.transform = 'scale(1.05)';
    chakraCard.style.boxShadow = '0 25px 50px rgba(255, 154, 255, 0.4)';
    
    setTimeout(() => {
      chakraCard.style.transform = 'translateY(-10px)';
      chakraCard.style.boxShadow = '0 20px 40px rgba(255, 154, 255, 0.2)';
    }, 500);
    
    // Show healing message
    const originalText = button.textContent;
    button.textContent = 'Healing...';
    button.disabled = true;
    
    setTimeout(() => {
      button.textContent = 'Healed!';
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
      }, 1000);
    }, 2000);
  });
});

// Energy Assessment
const startAssessmentBtn = document.getElementById('startAssessment');
const energyLevelSelect = document.getElementById('energyLevel');

if (startAssessmentBtn && energyLevelSelect) {
  startAssessmentBtn.addEventListener('click', () => {
    const energyLevel = energyLevelSelect.value;
    let recommendation = '';
    
    switch (energyLevel) {
      case 'high':
        recommendation = 'Your energy is flowing beautifully! Consider sharing your positive energy with others through meditation or community activities.';
        break;
      case 'balanced':
        recommendation = 'You are in perfect harmony! Maintain this balance through regular meditation and cosmic practices.';
        break;
      case 'low':
        recommendation = 'Your energy needs replenishment. Try our "Cosmic Alignment" meditation session and focus on grounding practices.';
        break;
      case 'blocked':
        recommendation = 'Energy blocks detected. We recommend our "Energy Healing" sessions and chakra clearing practices.';
        break;
    }
    
    alert(`Energy Assessment Complete!\n\nYour current energy level: ${energyLevel}\n\nRecommendation: ${recommendation}`);
  });
}

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  
  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    
    // Close all other FAQ items
    faqItems.forEach(otherItem => {
      otherItem.classList.remove('active');
    });
    
    // Toggle current item
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// Contact Form
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
      alert(`Thank you for your cosmic message, ${name}!\n\nWe have received your inquiry about "${subject}" and will respond to ${email} within 24 hours.\n\nMay the cosmic energy guide your journey! ✨`);
      
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      contactForm.reset();
    }, 2000);
  });
}

// Session Buttons
const sessionButtons = document.querySelectorAll('.session-btn');

sessionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const session = button.dataset.session;
    const sessionCard = button.closest('.session-card');
    
    // Add session start animation
    sessionCard.style.transform = 'scale(1.05)';
    sessionCard.style.boxShadow = '0 25px 50px rgba(255, 154, 255, 0.4)';
    
    setTimeout(() => {
      sessionCard.style.transform = 'translateY(-10px)';
      sessionCard.style.boxShadow = '0 20px 40px rgba(255, 154, 255, 0.2)';
    }, 500);
    
    // Show session starting message
    const originalText = button.textContent;
    button.textContent = 'Starting Session...';
    button.disabled = true;
    
    setTimeout(() => {
      alert(`Starting ${session.replace('-', ' ')} session...\n\nPlease find a comfortable position and close your eyes.\n\nLet the cosmic energy guide your journey. ✨`);
      
      button.textContent = originalText;
      button.disabled = false;
    }, 1000);
  });
});

// Join Community Form
const joinCommunityBtn = document.querySelector('.join-community-btn');
const joinInput = document.querySelector('.join-input');

if (joinCommunityBtn && joinInput) {
  joinCommunityBtn.addEventListener('click', () => {
    const email = joinInput.value.trim();
    
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }
    
    const originalText = joinCommunityBtn.textContent;
    joinCommunityBtn.textContent = 'Joining...';
    joinCommunityBtn.disabled = true;
    
    setTimeout(() => {
      alert(`Welcome to the Cosmic Community! ✨\n\nWe've sent a confirmation email to ${email}.\n\nYou now have access to our forums, events, and cosmic family!`);
      
      joinCommunityBtn.textContent = originalText;
      joinCommunityBtn.disabled = false;
      joinInput.value = '';
    }, 2000);
  });
}

// Event Join Buttons
const joinEventButtons = document.querySelectorAll('.join-btn');

joinEventButtons.forEach(button => {
  button.addEventListener('click', () => {
    const eventCard = button.closest('.event-card');
    const eventTitle = eventCard.querySelector('h3').textContent;
    
    const originalText = button.textContent;
    button.textContent = 'Joining...';
    button.disabled = true;
    
    setTimeout(() => {
      alert(`You've successfully joined "${eventTitle}"! ✨\n\nWe'll send you a reminder 30 minutes before the event.\n\nPrepare to connect with cosmic energy!`);
      
      button.textContent = 'Joined';
      button.style.background = 'linear-gradient(45deg, #00ffe1, #00ccb3)';
      button.style.color = '#0d0d1f';
    }, 1000);
  });
});

// Support Buttons
const supportButtons = document.querySelectorAll('.support-btn');

supportButtons.forEach(button => {
  button.addEventListener('click', () => {
    const supportCard = button.closest('.support-card');
    const supportTitle = supportCard.querySelector('h3').textContent;
    
    const originalText = button.textContent;
    button.textContent = 'Connecting...';
    button.disabled = true;
    
    setTimeout(() => {
      alert(`Connecting you to ${supportTitle}...\n\nOur cosmic guides are ready to assist you.\n\nPlease wait while we establish the connection. ✨`);
      
      button.textContent = originalText;
      button.disabled = false;
    }, 1500);
  });
});

// Read More Buttons
const readButtons = document.querySelectorAll('.read-btn');

readButtons.forEach(button => {
  button.addEventListener('click', () => {
    const textCard = button.closest('.text-card');
    const title = textCard.querySelector('h3').textContent;
    
    const originalText = button.textContent;
    button.textContent = 'Loading...';
    button.disabled = true;
    
    setTimeout(() => {
      alert(`Loading "${title}"...\n\nThis sacred text contains ancient cosmic wisdom.\n\nPrepare to expand your consciousness! ✨`);
      
      button.textContent = originalText;
      button.disabled = false;
    }, 1000);
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Parallax effect for particles
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const particles = document.getElementById('particles-js');
  if (particles) {
    particles.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Auto-hide navigation on scroll down, show on scroll up
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    // Scrolling down
    navbar.style.transform = 'translateY(-100%)';
  } else {
    // Scrolling up
    navbar.style.transform = 'translateY(0)';
  }
  
  lastScrollTop = scrollTop;
});

// Add cosmic glow effect to interactive elements
const interactiveElements = document.querySelectorAll('button, .cta-btn, .session-btn, .heal-btn, .join-btn, .support-btn, .read-btn');

interactiveElements.forEach(element => {
  element.addEventListener('mouseenter', () => {
    element.style.boxShadow = '0 0 20px rgba(0, 255, 225, 0.5)';
  });
  
  element.addEventListener('mouseleave', () => {
    element.style.boxShadow = '';
  });
});

// Cosmic typing effect for titles
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Initialize typing effect on page load
document.addEventListener('DOMContentLoaded', () => {
  const pageTitle = document.querySelector('.page-header h1');
  if (pageTitle && !pageTitle.classList.contains('typed')) {
    pageTitle.classList.add('typed');
    const originalText = pageTitle.textContent;
    typeWriter(pageTitle, originalText, 150);
  }
});

// Cosmic particle interaction
document.addEventListener('click', (e) => {
  const particle = document.createElement('div');
  particle.className = 'cosmic-particle';
  particle.style.cssText = `
    position: fixed;
    left: ${e.clientX}px;
    top: ${e.clientY}px;
    width: 4px;
    height: 4px;
    background: #00ffe1;
    border-radius: 50%;
    pointer-events: none;
    z-index: 10000;
    animation: cosmicParticle 1s ease-out forwards;
  `;
  
  document.body.appendChild(particle);
  
  setTimeout(() => {
    particle.remove();
  }, 1000);
});

// Add CSS for cosmic particle animation
const style = document.createElement('style');
style.textContent = `
  @keyframes cosmicParticle {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(20);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

console.log('✨ Cosmic Energy Website Loaded Successfully! ✨');
console.log('May the cosmic forces guide your journey through this digital realm.'); 
