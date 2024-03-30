async function fetchQuote() {
  const response = await fetch("./expression.txt");
  const quote = await response.text();
  return quote;
}
const myButton = document.getElementById("button");
myButton.addEventListener("click", async function addQuote() {
  const myQuote = await fetchQuote();
  var textNode = document.createTextNode(myQuote);
  var myP = document.createElement("p");
  myP.appendChild(textNode);
  document.body.appendChild(myP);
});
