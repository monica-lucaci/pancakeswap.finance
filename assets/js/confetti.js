function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

document.addEventListener("click", function (event) {
  const x = event.clientX;
  const y = event.clientY;

  confetti({
    angle: randomInRange(55, 125),
    spread: randomInRange(50, 70),
    particleCount: randomInRange(50, 100),
    origin: { x: x / window.innerWidth, y: y / window.innerHeight },
  });
});
