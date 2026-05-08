document.addEventListener('DOMContentLoaded', () => {
    // 1. DUPLICATION DU CARROUSEL DE COMPÉTENCES POUR LA BOUCLE INFINIE
    const track = document.getElementById('skill-track');
    if (track) {
        const slides = Array.from(track.children);
        slides.forEach(slide => {
            const clone = slide.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true');
            track.appendChild(clone);
        });
    }

    // 2. ANIMATION D'APPARITION AU DÉFILEMENT (FADE IN)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeSections = document.querySelectorAll('.fade-in');
    fadeSections.forEach(section => {
        observer.observe(section);
    });
});
