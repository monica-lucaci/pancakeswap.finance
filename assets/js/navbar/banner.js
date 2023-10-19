//chiusura banner//

const bannerBtn = document.querySelector(".banner-button");
const bannerWrapper = document.querySelector(".banner-wrapper");
const heroSectionMarginSwitch = document.querySelector(".hero-section .inner ");

bannerBtn.addEventListener("click", () => {
  bannerWrapper.style.display = "none";
  heroSectionMarginSwitch.style.paddingTop = "57px";
});
