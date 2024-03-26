function showhide() {
  var myArticle = document.querySelector("article");
  console.log(myArticle);
  if (myArticle) {
    myArticle.remove();
  } else {
    var element = document.createElement("article");
    var textNode = document.createTextNode(
      "L'important n'est pas la chute, mais l'atterrissage."
    );
    element.appendChild(textNode);
    document.body.appendChild(element);
  }
}
