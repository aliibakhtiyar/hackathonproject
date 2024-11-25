const faqHeaders = document.querySelectorAll('.faq-header');

faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        // Toggle display of content
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const loaderWrapper = document.getElementById("loader-wrapper");
  
    setTimeout(() => {
      loaderWrapper.style.opacity = "0";
      loaderWrapper.style.transition = "opacity 0.5s ease-in-out";
      setTimeout(() => {
        loaderWrapper.style.display = "none";
      }, 500);
    }, 1500);
  });
  document.addEventListener("DOMContentLoaded", () => {
    const text = "Hack the limits";
    const container = document.getElementById("animatedText");  
    
    // Create spans for each letter
text.split("").forEach(char => {
const span = document.createElement("span");
span.className = "letter";
span.innerHTML = char === " " ? "&nbsp;" : char; // Use &nbsp; for spaces
container.appendChild(span);
});

    const letters = document.querySelectorAll(".letter");
    const totalLetters = letters.length;
    const delayIncrement = 100; // Delay in milliseconds

    function easeInOutQuart(t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
    }

    function animateLetters(forward = true) {
        letters.forEach((letter, index) => {
            // const delay = Math.max(index, totalLetters - index) * delayIncrement;
          
            const normalizedIndex = Math.max(index, totalLetters - 1 - index) / (totalLetters - 1);
            const easedDelay = easeInOutQuart(normalizedIndex);
            const delay = easedDelay * (totalLetters - 1) * delayIncrement;
          
            setTimeout(() => {
                letter.style.setProperty("--wght", forward ? 700 : 100);
                letter.style.setProperty("--wdth", forward ? 400 : 150);
                letter.style.setProperty("--opacity", forward ? 1 : 0.25);
                letter.style.setProperty("--letter-spacing", forward ? '0.05em' : '0em');
                // letter.style.setProperty("--font-size", forward ? '12vw' : '10vw');
            }, delay);
        });

      setTimeout(() => animateLetters(!forward), 4000);
    }

    animateLetters();
});