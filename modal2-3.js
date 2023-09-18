// const div1 = document.getElementById('sliderConnectDiv');
// const div2 = document.getElementById('Web3WalletDiv');
// const btn1 = document.getElementById('sliderConnectBtn');
// const btn2 = document.getElementById('Web3WalletBtn');


// // Function to toggle between div1 and div2 and interchange button styles
// const toggleDivs = () => {
//   if (div1.style.display === 'block' || div1.style.display === 'flex') {
//     div1.style.display = 'none';
//     div2.style.display = 'flex';
//     btn1.classList.remove('modal2-slide1-btn1');
//     btn1.classList.add('modal2-slide1-btn2');
//     btn2.classList.remove('modal2-slide1-btn2');
//     btn2.classList.add('modal2-slide1-btn1');
//   } else {
//     div1.style.display = 'flex';
//     div2.style.display = 'none';
//     btn1.classList.remove('modal2-slide1-btn2');
//     btn1.classList.add('modal2-slide1-btn1');
//     btn2.classList.remove('modal2-slide1-btn1');
//     btn2.classList.add('modal2-slide1-btn2');
//   }
// };

// // Add click event listeners to the buttons
// btn1.addEventListener('click', toggleDivs);
// btn2.addEventListener('click', toggleDivs);

// const div1 = document.getElementById('sliderConnectDiv');
// const div2 = document.getElementById('Web3WalletDiv');
// const btn1 = document.getElementById('sliderConnectBtn');
// const btn2 = document.getElementById('Web3WalletBtn');

// // Function to toggle between div1 and div2 and interchange button styles
// const toggleDivs = () => {
//   if (div1.classList.contains('hidden')) {
//     div1.classList.remove('hidden');
//     div2.classList.add('hidden');
//     btn1.classList.toggle('modal2-slide1-btn1');
//     btn1.classList.toggle('modal2-slide1-btn2');
//     btn2.classList.toggle('modal2-slide1-btn1');
//     btn2.classList.toggle('modal2-slide1-btn2');
//   } else {
//     div1.classList.add('hidden');
//     div2.classList.remove('hidden');
//     btn1.classList.toggle('modal2-slide1-btn1');
//     btn1.classList.toggle('modal2-slide1-btn2');
//     btn2.classList.toggle('modal2-slide1-btn1');
//     btn2.classList.toggle('modal2-slide1-btn2');
//   }
// };

// // Add click event listeners to the buttons
// btn1.addEventListener('click', toggleDivs);
// btn2.addEventListener('click', toggleDivs);


// const div1 = document.getElementById('sliderConnectDiv');
// const div2 = document.getElementById('Web3WalletDiv');
// const btn1 = document.getElementById('sliderConnectBtn');
// const btn2 = document.getElementById('Web3WalletBtn');

// // Function to toggle button styles
// const toggleButtonStyles = () => {
//   // Toggle the button classes
//   btn1.classList.toggle('modal2-slide1-btn1');
//   btn1.classList.toggle('modal2-slide1-btn2');
//   btn2.classList.toggle('modal2-slide1-btn1');
//   btn2.classList.toggle('modal2-slide1-btn2');

//   // Check if btn2 should not show div1 and add/remove the class accordingly
//   if (btn2.classList.contains('never-show-div1')) {
//     div1.classList.add('hidden');
//   } else {
//     div1.classList.remove('hidden');
//   }
// };

// // Add click event listeners to the buttons
// btn1.addEventListener('click', toggleButtonStyles);
// btn2.addEventListener('click', toggleButtonStyles);





const div1 = document.getElementById('sliderConnectDiv');
const div2 = document.getElementById('Web3WalletDiv');
const btn1 = document.getElementById('sliderConnectBtn');
const btn2 = document.getElementById('Web3WalletBtn');

// Function to show div1 and hide div2, and toggle button styles
const showDiv1 = () => {
  div1.classList.remove('hidden');
  div2.classList.add('hidden');
  btn1.classList.add('modal2-slide1-btn1');
  btn1.classList.remove('modal2-slide1-btn2');
  btn2.classList.remove('modal2-slide1-btn1', 'never-show-div1');
  btn2.classList.add('modal2-slide1-btn2');
};

// Function to show div2 and hide div1, and toggle button styles
const showDiv2 = () => {
  div1.classList.add('hidden');
  div2.classList.remove('hidden');
  btn1.classList.remove('modal2-slide1-btn1');
  btn1.classList.add('modal2-slide1-btn2');
  btn2.classList.remove('modal2-slide1-btn2');
  btn2.classList.add('modal2-slide1-btn1', 'never-show-div1');
};

// Add click event listeners to the buttons
btn1.addEventListener('click', showDiv1);
btn2.addEventListener('click', showDiv2);




//THIS
//SHOULD
//MAKE IT
//AVAILABLE
//WEBSITE WIDE

// Function to toggle between divs and interchange button styles
const toggleDivsAndStyles = (divToShow, divToHide, btnToShow, btnToHide) => {
    return () => {
      divToShow.classList.remove('hidden');
      divToHide.classList.add('hidden');
      btnToShow.classList.add('modal2-slide1-btn1');
      btnToShow.classList.remove('modal2-slide1-btn2');
      btnToHide.classList.remove('modal2-slide1-btn1');
      btnToHide.classList.add('modal2-slide1-btn2');
    };
  };
  
  // Function to initialize the behavior for a specific section
  const initializeSection = (sectionId, div1Id, div2Id, btn1Id, btn2Id) => {
    const div1 = document.getElementById(div1Id);
    const div2 = document.getElementById(div2Id);
    const btn1 = document.getElementById(btn1Id);
    const btn2 = document.getElementById(btn2Id);
  
    // Set up the event listeners for this section
    btn1.addEventListener('click', toggleDivsAndStyles(div1, div2, btn1, btn2));
    btn2.addEventListener('click', toggleDivsAndStyles(div2, div1, btn2, btn1));
  };
  
  // Initialize the behavior for different sections on your website
  initializeSection('section1', 'sliderConnectDiv', 'Web3WalletDiv', 'sliderConnectBtn', 'Web3WalletBtn');
  initializeSection('section2', 'anotherDiv1', 'anotherDiv2', 'anotherBtn1', 'anotherBtn2');
  