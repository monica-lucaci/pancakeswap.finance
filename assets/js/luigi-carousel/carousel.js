document.addEventListener("DOMContentLoaded", () => {
  // Select all the bullets
  const bullets = document.querySelectorAll(".bullet");

  // Select all the cards
  let cards = [];
  for (let i = 0; i < bullets.length; i++) {
    let card = document.querySelector(`.swiper-slide-${i + 1}`);
    if (card) {
      cards.push(card);
    }
  }

  let currentIndex = 0; // Start from the first card

  function rotateCarousel() {
    // Remove "active" class from all cards
    cards.forEach((card) => card.classList.remove("active"));

    // Set the opacity of all bullets to 0.2
    bullets.forEach((bullet) => (bullet.style.opacity = 0.2));

    // Add "active" class to the current card
    if (cards[currentIndex]) {
      cards[currentIndex].classList.add("active");
    }

    // Set the opacity of the current bullet to 1
    if (bullets[currentIndex]) {
      bullets[currentIndex].style.opacity = 1;
    }

    currentIndex++; // Move to the next card

    // If we've gone past the last card, go back to the first one
    if (currentIndex === cards.length) {
      currentIndex = 0;
    }
  }

  rotateCarousel(); // Call rotateCarousel immediately to show the first card

  // Then start the interval
  setInterval(rotateCarousel, 6000);

  // Add an event listener for click to each bullet
  bullets.forEach((bullet, index) => {
    bullet.addEventListener("click", function () {
      // Set currentIndex to the index of the clicked bullet
      currentIndex = index;

      // Call rotateCarousel to update the current card and bullet
      rotateCarousel();
    });
  });
});
