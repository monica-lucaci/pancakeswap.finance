//chiusura banner//

const bannerBtn = document.querySelector(".banner-button");
const bannerWrapper = document.querySelector(".banner-wrapper");


bannerBtn.addEventListener("click", () => {

bannerWrapper.style.display = "none";
})


//apri modal e chiudi//


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});





//confetti

// script.js
// document.addEventListener("DOMContentLoaded", function () {
//     const confettiContainer = document.getElementById("confetti-container");

//     // Function to create a confetti element and add it to the container
//     function createConfetti(x, y) {
//         const confetti = document.createElement("div");
//         confetti.className = "confetti";
//         confetti.style.left = x + "px";
//         confetti.style.top = y + "px";
//         confettiContainer.appendChild(confetti);

//         // Remove the confetti element after the animation is complete
//         confetti.addEventListener("animationend", () => {
//             confetti.remove();
//         });
//     }

//     // Function to handle the click event and generate confetti at the click location
//     document.addEventListener("click", function (event) {
//         const x = event.clientX;
//         const y = event.clientY;
//         createConfetti(x, y);
//     });
// });


// function randomInRange(min, max) {
//     return Math.random() * (max - min) + min;
//   }
  
//   confetti({
//     angle: randomInRange(55, 125),
//     spread: randomInRange(50, 70),
//     particleCount: randomInRange(50, 100),
//     origin: { y: 0.6 },
//   });

//   document.addEventListener('click',randomInRange);

// function randomInRange(min, max) {
//     return Math.random() * (max - min) + min;
// }

// document.addEventListener('click', function () {
//     confetti({
//         angle: randomInRange(55, 125),
//         spread: randomInRange(50, 70),
//         particleCount: randomInRange(50, 100),
//         origin: { y: 0.6 },
//     });
// });


function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

document.addEventListener('click', function (event) {
    const x = event.clientX;
    const y = event.clientY;

    confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { x: x / window.innerWidth, y: y / window.innerHeight },
    });
});


 
   