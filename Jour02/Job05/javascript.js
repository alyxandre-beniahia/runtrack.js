const [initialRed, initialGreen, initialBlue] = [117, 253, 255];
const myFooter = document.getElementById("footer");

window.addEventListener("scroll", () => {
  const y = 1 + window.scrollY / 150;
  const [r, g, b] = [initialRed / y, initialGreen / y, initialBlue / y].map(
    Math.round
  );
  myFooter.style.backgroundColor = `rgb(${r},${g},${b})`;
});
