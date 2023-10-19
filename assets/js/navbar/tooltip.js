//TOOLTIP -aggiunge info al svg on hover

const containers = document.querySelectorAll(
  ".modal-content-item_textsvg_svgbox"
);
const tooltips = document.querySelectorAll(".tooltip");

containers.forEach((container, index) => {
  container.addEventListener("mouseenter", () => {
    tooltips[index].style.display = "flex";
  });

  container.addEventListener("mouseleave", () => {
    tooltips[index].style.display = "none";
  });
});
