const body = document.getElementById("body");
const secretCode =
  "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba";
var konami = "";

window.addEventListener("keydown", (event) => {
  konami += event.key;
  console.log(konami);
  if (konami.slice(-secretCode.length) === secretCode) {
    body.classList.add("active");
  }
});
