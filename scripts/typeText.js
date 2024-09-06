const loadingText = document.getElementById('loading-text');
    const textToType = "PORTIFÓLIO EM CARREGAMENTO...";
    let charIndex = 0;

    function typeText() {
      if (charIndex < textToType.length) {
        loadingText.innerHTML += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
      }
    }

    typeText(); 