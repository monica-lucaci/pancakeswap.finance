//modal2-> cambia div con bottoni sopra

const div1 = document.getElementById("sliderConnectDiv");
const div2 = document.getElementById("Web3WalletDiv");
const btn1 = document.getElementById("sliderConnectBtn");
const btn2 = document.getElementById("Web3WalletBtn");

// div1 compare  div2 scompare and intercambia stili btn
const showDiv1 = () => {
  div1.classList.remove("hidden");
  div2.classList.add("hidden");
  btn1.classList.add("modal2-slide1-btn1");
  btn1.classList.remove("modal2-slide1-btn2");
  btn2.classList.remove("modal2-slide1-btn1", "never-show-div1");
  btn2.classList.add("modal2-slide1-btn2");
};

// div2 compare  div1 scompare and intercambia stili btn
const showDiv2 = () => {
  div1.classList.add("hidden");
  div2.classList.remove("hidden");
  btn1.classList.remove("modal2-slide1-btn1");
  btn1.classList.add("modal2-slide1-btn2");
  btn2.classList.remove("modal2-slide1-btn2");
  btn2.classList.add("modal2-slide1-btn1", "never-show-div1");
};

btn1.addEventListener("click", showDiv1);
btn2.addEventListener("click", showDiv2);

const divA = document.getElementById("divA");
const divB = document.getElementById("divB");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
let currentSlide = divA;

const showDivA = () => {
  divA.classList.remove("hidden");
  divB.classList.add("hidden");
  currentSlide = divA;
};

const showDivB = () => {
  divA.classList.add("hidden");
  divB.classList.remove("hidden");
  currentSlide = divB;
};

const nextSlide = () => {
  if (currentSlide === divA) {
    showDivB();
  } else {
    showDivA();
  }
};

const prevSlide = () => {
  if (currentSlide === divA) {
    showDivB();
  } else {
    showDivA();
  }
};

// Set an interval to automatically switch slides every 5 seconds
const interval = setInterval(nextSlide, 5000);

// Add event listeners to the previous and next buttons
prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

// Ensure one slide is displayed initially
showDivA();

// Clear the interval when needed (e.g., when switching to another section)
// clearInterval(interval);
