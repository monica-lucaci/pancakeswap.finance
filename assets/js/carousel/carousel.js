document.addEventListener("DOMContentLoaded", () => {
  /**
   * ROTATE CAROUSEL SECTION
   */

  const bullets = document.querySelectorAll(".bullet");

  let cards = [];

  for (let i = 0; i < bullets.length; i++) {
    let card = document.querySelector(`.swiper-slide-${i + 1}`);
    if (card) {
      cards.push(card);
    }
  }

  let currentIndex = 0;

  function rotateCarousel() {
    cards.forEach((card) => card.classList.remove("active"));
    bullets.forEach((bullet) => (bullet.style.opacity = 0.2));

    if (cards[currentIndex]) {
      cards[currentIndex].classList.add("active");
    }

    if (bullets[currentIndex]) {
      bullets[currentIndex].style.opacity = 1;
    }

    currentIndex++;

    if (currentIndex === cards.length) {
      currentIndex = 0;
    }
  }

  rotateCarousel();

  setInterval(rotateCarousel, 6000);

  bullets.forEach((bullet, index) => {
    bullet.addEventListener("click", function () {
      currentIndex = index;

      rotateCarousel();
    });
  });

  /**
   * UPDATE CAROUSEL CONTENT SECTION
   */

  const updateContent = () => {
    const textSlide1 = document.querySelector("#textSlide1");
    const imgSlide2 = document.querySelector("#imgSlide2");
    const textSlide4 = document.querySelector("#textSlide4");
    const textSlide5 = document.querySelector("#textSlide5");
    const textSlide6 = document.querySelector("#textSlide6");
    const imgSlide6 = document.querySelector("#imgSlide6");
    const textSlide7 = document.querySelector("#textSlide7");
    const textSlide8 = document.querySelector("#textSlide8");
    const imgSlide8 = document.querySelector("#imgSlide8");
    const textSlide9 = document.querySelector("#textSlide9");
    const text2Slide9 = document.querySelector("#text2Slide9");
    const textSlide10 = document.querySelector("#textSlide10");

    if (window.innerWidth <= 360) {
      textSlide1.textContent = "Now Live on linea!";
      imgSlide2.srcset = "./assets/img/carousel/perpetualMobile.webp";
      textSlide4.textContent = "Now Live on zkSync Era!";
      textSlide5.textContent = "Now Live on Arbitrum One!";
      textSlide6.textContent = "Traverse the Treasure Islands!";
      imgSlide6.srcset = "./assets/img/carousel/galxeTraverseMobile.png";
      textSlide7.textContent = "Base is LIVE!";
      textSlide8.textContent = "opBNB is LIVE!";
      imgSlide8.srcset = "./assets/img/carousel/opbnb-bg-mobile.webp";
      textSlide9.textContent = "WBETH Liquid Staking";
      text2Slide9.textContent = "Receive WBETH";
      textSlide10.textContent = "Now Live on Polygon zkEVM!";
    } else {
      textSlide1.textContent = "PancakeSwap Now Live on Linea!";
      imgSlide2.srcset =
        "https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperpetual.fd0aa080.png&w=640&q=75";
      textSlide4.textContent = "PancakeSwap Now Live on zkSync Era!";
      textSlide5.textContent = "PancakeSwap Now Live on Arbitrum One";
      textSlide6.textContent = "Traverse the Treasure Islands on Galxe now!";
      imgSlide6.srcset =
        "https://pancakeswap.finance/_next/static/media/galxe-traverse-bg.fcab2d26.png";
      textSlide7.textContent = "PancakeSwap Now Live on Base!";
      textSlide8.textContent = "PancakeSwap Now Live on opBNB!";
      imgSlide8.srcset =
        "https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fopbnb-bg.f1741c10.png&w=3840&q=75";
      textSlide9.textContent = "Liquid Staking Integration for WBETH:";
      text2Slide9.textContent =
        "ETH to WBETH conversion and earn ETH staking rewards!";
      textSlide10.textContent = "PancakeSwap Now Live on Polygon zkEVM!";
    }
  };

  window.addEventListener("resize", updateContent);
  updateContent();
});
