document.addEventListener("DOMContentLoaded", function () {
  // Seleziona tutti gli elementi con classe .num
  let valueDisplays = document.querySelectorAll(".animated-num");
  let duration = 1000; // Durata in millisecondi

  // Itera su tutti gli elementi con classe .num
  valueDisplays.forEach(function (valueDisplay) {
    let integerValue = parseInt(valueDisplay.getAttribute("data-value"));
    let startTimestamp;

    function animateValue(timestamp) {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const decimalValue = Math.floor(Math.random() * 100) + 900; // Numeri decimali casuali tra 900 e 999
      const animatedValue = integerValue + decimalValue / 1000; // Aggiungiamo la parte decimale al numero
      valueDisplay.textContent =
        "$" + animatedValue.toFixed(3).replace(".", ","); // Formatta il numero come "$31,981"

      if (progress < 1) {
        requestAnimationFrame(animateValue);
      }
    }

    requestAnimationFrame(animateValue);
  });
});
