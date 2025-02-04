// Floating messages
const messages = document.querySelectorAll('.message');
messages.forEach((message, index) => {
  message.style.left = `${Math.random() * 100}%`;
  message.style.top = `${Math.random() * 100}%`;
  message.style.animationDuration = `${Math.random() * 3 + 2}s`;
});

// Floating flowers
const flowersContainer = document.querySelector('.flowers');
for (let i = 0; i < 20; i++) {
  const flower = document.createElement('div');
  flower.classList.add('flower');
  flower.style.left = `${Math.random() * 100}%`;
  flower.style.top = `${Math.random() * 100}%`;
  flower.style.animationDuration = `${Math.random() * 4 + 3}s`;
  flowersContainer.appendChild(flower);
}

// No button movement
const noButton = document.getElementById('no-btn');
noButton.addEventListener('click', () => {
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.position = 'absolute';
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});

// Play background music
const music = document.getElementById('background-music');
music.play();
