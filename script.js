function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Show selected section
    document.getElementById(sectionId).classList.add('active');

    // Add active class to clicked tab
    event.target.closest('.nav-tab').classList.add('active');
}

// Add smooth scrolling and animations
document.addEventListener('DOMContentLoaded', function () {
    // Add entrance animation to cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Add typing effect to profile name
    const profileName = document.querySelector('.profile-name');
    const originalText = profileName.textContent;
    profileName.textContent = '';

    let i = 0;
    const typeEffect = setInterval(() => {
        if (i < originalText.length) {
            profileName.textContent += originalText.charAt(i);
            i++;
        } else {
            clearInterval(typeEffect);
        }
    }, 100);
});

// Add parallax effect to background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('body');
    const speed = scrolled * 0.5;
    parallax.style.backgroundPosition = `center ${speed}px`;
});