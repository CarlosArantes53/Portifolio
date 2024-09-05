const background = document.querySelector('.background');

function createShootingemoji() {
  const emojis = ['⚙️', '🖥️', '👾', '🧠', '📄', '🤖', '💾', '🦾'];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

  const emoji = document.createElement('div');
  emoji.classList.add('shooting-emoji');
  emoji.innerHTML = randomEmoji;
  
  emoji.style.left = `${Math.random() * 100}%`;
  emoji.style.top = `${Math.random() * 50}%`;
  
  const duration = Math.random() * 3 + 2;
  emoji.style.animationDuration = `${duration}s`; 
  
  background.appendChild(emoji);

  emoji.addEventListener('animationend', () => {
    emoji.remove(); 
  });
}

setInterval(createShootingemoji, 1000);
