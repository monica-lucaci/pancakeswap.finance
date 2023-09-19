//apri modal e chiudi settings//

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelector(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//apre il modal e l'overlay del connect button

const modal2 = document.querySelector(".modal2");
const btnsOpenModal2 = document.querySelectorAll(".show-modal2");

const openModal2 = function () {
  modal2.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal2 = function () {
  modal2.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal2.forEach((btn) => {
  btn.addEventListener("click", openModal2);
});

overlay.addEventListener("click", closeModal2);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal2.classList.contains("hidden")) {
    closeModal2();
  }
});

//more button modal2

let itemCount = 8; // numero iniziale app
const maxItems = 13; // numero totale di app
const loadMoreBtn = document.getElementById("loadMoreBtn");

function showMoreItems() {
  const content = document.getElementById("modal2items");
  const hiddenItems = document.querySelectorAll(".item.hidden");
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  // controlla se ci sono piu app
  if (itemCount < maxItems) {
    // console.log(maxItems);
    //  vedere 5 app  in piu
    const itemsToShow = Math.min(maxItems - itemCount, 5);

    // iterate app e farle vedere
    hiddenItems.forEach((item, index) => {
      if (index < itemsToShow) {
        console.log(itemsToShow);
        item.style.display = "flex"; // display gli elementi hidden
        itemCount++;
      }
    });
    // console.log(itemCount,maxItems);
    if (itemCount >= maxItems) {
      content.removeChild(loadMoreBtn);
    }
  }
}

loadMoreBtn.addEventListener("click", showMoreItems);
