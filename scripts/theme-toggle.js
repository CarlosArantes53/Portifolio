const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved user preference in localStorage
const currentTheme = localStorage.getItem('theme') || 'dark-mode';
body.classList.add(currentTheme);

if (currentTheme === 'light-mode') {
  toggleButton.textContent = '🌚 Dark Mode';
}

// Toggle between light and dark mode
toggleButton.addEventListener('click', () => {
  const isDarkMode = body.classList.contains('dark-mode');
  if (isDarkMode) {
    body.classList.replace('dark-mode', 'light-mode');
    toggleButton.textContent = '🌚 Dark Mode';
    localStorage.setItem('theme', 'light-mode');
  } else {
    body.classList.replace('light-mode', 'dark-mode');
    toggleButton.textContent = '🌞 Light Mode';
    localStorage.setItem('theme', 'dark-mode');
  }
});
