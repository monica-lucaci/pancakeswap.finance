//apri modal e chiudi settings/connect

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const $btnsShowModal = document.querySelectorAll(".show-modal");
const modal2 = document.querySelector(".modal2");

const showModal = (event) => {
  const target = event.target.dataset.target;
  const modal = document.querySelector(target);

  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

$btnsShowModal.forEach(($btn) => {
  $btn.addEventListener("click", showModal);
});

const closeModal = () => {
  modal.classList.add("hidden");
  modal2.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    (!modal.classList.contains("hidden") ||
      !modal2.classList.contains("hidden"))
  ) {
    closeModal();
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
    //  vedere 5 app  in piu
    const itemsToShow = Math.min(maxItems - itemCount, 5);

    // iterate app e farle vedere
    hiddenItems.forEach((item, index) => {
      if (index < itemsToShow) {
        item.style.display = "flex"; // display gli elementi hidden
        itemCount++;
      }
    });
    if (itemCount >= maxItems) {
      content.removeChild(loadMoreBtn);
    }
  }
}

loadMoreBtn.addEventListener("click", showMoreItems);

const $wrappers = document.querySelectorAll(".navbar-mq-content_item_wrapper");
const $dropdown = document.querySelectorAll(".navbar-mq-content_item_links");

for (let index = 1; index < $wrappers.length; index++) {
  const wrapper = $wrappers[index];

  wrapper.addEventListener("click", () => {
    if ($dropdown[index]) {
      $dropdown[index].classList.remove("hidden");
      overlay.classList.remove("hidden");
    }
  });
}
