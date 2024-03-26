let myButton = document.getElementById("button");
let counter = 0;
console.log(counter);
myButton.addEventListener("click", function addOne() {
  counter++;
  document.querySelector("#compteur").textContent = counter;
});
