// Toggle Mode Gelap/Terang
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});


document.querySelectorAll('.project-card, .profile-img').forEach(element => {
  element.addEventListener('mouseenter', () => {
    element.style.transform = 'translateY(-8px)';
    element.style.transition = 'transform 0.3s ease';
  });

  element.addEventListener('mouseleave', () => {
    element.style.transform = 'translateY(0)';
  });
});
