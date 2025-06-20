// script.js

// 🌗 Basculer thème clair/sombre
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  body.classList.toggle('dark-mode');
});

// Par défaut, le thème sombre est appliqué
body.classList.add('dark-mode');

// 🌍 Gestion langue FR / EN
const languageSwitcher = document.getElementById('language-switcher');
const translations = {
  fr: {
    home: 'Accueil',
    about: 'À propos',
    projects: 'Projets',
    skills: 'Compétences',
    contact: 'Contact',
    download_cv: 'Télécharger CV',
    welcome: 'Bienvenue sur mon portfolio',
    intro: 'Je suis étudiant en BUT informatique passionné par le développement.',
    about_title: 'À propos de moi',
    about_text: '(Ajoute ici ton texte personnalisé)',
    projects_title: 'Mes projets',
    skills_title: 'Mes compétences',
    socialmedia_title: 'Mes reseaux sociaux',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      twitter: 'Twitter',
    contact_title: 'Contact',
    send: 'Envoyer'
  },
  en: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
    download_cv: 'Download CV',
    welcome: 'Welcome to my portfolio',
    intro: 'I am a computer science student passionate about development.',
    about_title: 'About Me',
    about_text: 'My name is Maksen Mouhou, I am currently studying for a BUT in Computer Science at the IUT d"Orsay of the University of Paris Saclay. Since my childhood, I have been passionate about new technologies and video games. It was in high school, while taking a bac STI2D, that I truly became aware of my passion for computer science.',
    projects_title: 'My Projects',
    skills_title: 'My Skills',
    socialmedia_title: 'My Social Media',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      twitter: 'Twitter',
    contact_title: 'Contact',
    send: 'Send'
  }
};

languageSwitcher.addEventListener('change', (e) => {
  const lang = e.target.value;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
});

// --------------------
// Smooth scroll on nav links
// --------------------
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});
// 📄 Télécharger le CV (remplacer par ton vrai lien)
const cvButton = document.getElementById('cv-button');
cvButton.addEventListener('click', () => {
  window.open('./assets/mon-cv.pdf', '_blank'); // Change ce chemin si nécessaire
});
