// const modal2 = document.querySelector('.modal2');
// const overlay2 = document.querySelector('.overlay');

// const btnsOpenModal2 = document.querySelector('.show-modal2');

// const openModal2 = function () {
//   modal2.classList.remove('hidden');
//   overlay2.classList.remove('hidden');
// };

// const closeModal2 = function () {
//   modal2.classList.add('hidden');
//   overlay2.classList.add('hidden');
// };


// btnsOpenModal2.addEventListener('click', openModal2);
// console.log("button clicked")

// overlay2.addEventListener('click', closeModal2);

// document.addEventListener('keydown', function (e) {
//   // console.log(e.key);

//   if (e.key === 'Escape' && !modal2.classList.contains('hidden')) {
//     closeModal2();
//   }
// });


const modal2 = document.querySelector('.modal2'); 
const overlay2 = document.querySelector('.overlay');
const btnsOpenModal2 = document.querySelectorAll('.show-modal2');



const openModal2 = function () {
  modal2.classList.remove('hidden');
  overlay2.classList.remove('hidden');
};

const closeModal2 = function () {
  modal2.classList.add('hidden');
  overlay2.classList.add('hidden');
};

btnsOpenModal2.forEach((btn) => {
  btn.addEventListener('click', openModal2);
});

// closeModal2Buttons.forEach((btn) => {
//   btn.addEventListener('click', closeModal2);
// });

overlay2.addEventListener('click', closeModal2);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal2.classList.contains('hidden')) {
    closeModal2();
  }
});




