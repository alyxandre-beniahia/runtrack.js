const myTextArea = document.getElementById("keylogger");

document.addEventListener("keydown", (event) => {
  var isFocused = document.activeElement === myTextArea;
  if (isFocused) {
    console.log("if");
    myTextArea.value += event.key;
  } else {
    console.log("else");
    myTextArea.value += event.key;
  }
});
