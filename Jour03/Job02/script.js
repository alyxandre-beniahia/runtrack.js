function shuffle(array) {
  var actualIndex = array.length,
    tempValue,
    randIndex;
  while (0 !== actualIndex) {
    randIndex = Math.floor(Math.random() * actualIndex);
    actualIndex -= 1;
    tempValue = array[actualIndex];
    array[actualIndex] = array[randIndex];
    array[randIndex] = tempValue;
  }
  return array;
}
function compareLists(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`item list 1 ${arr1[i]}}`);
      console.log(`item list 2 ${arr2[i]}}`);
      return false;
    }
  }
  return true;
}
var images = $("#img__container").children("img");
var originalOrder = images.toArray().map((img) => img.id);
$("#shuffle").click(function () {
  var shuffledImgs = shuffle(images.toArray());
  $("#img__container").empty();
  $("#img__container").append(shuffledImgs);
  $("#img__container img").draggable({
    revert: "invalid",
    containment: "document",
    helper: "clone",
  });
  $("#drag-area").droppable({
    drop: function (event, ui) {
      var draggable = ui.draggable;
      console.log(draggable);
      var target = $(event.target);
      target.append(draggable);
      var currentOrder = $("#drag-area").children("img").toArray();
      currentOrder = currentOrder.map((img) => img.id);
      console.log(`original order : ${originalOrder}`);
      console.log(`current order : ${currentOrder}`);
      if (compareLists(currentOrder, originalOrder)) {
        console.log(compareLists(currentOrder, originalOrder));
        $("#result").text("“Vous avez gagné”");
      } else {
        $("#result").text("“Vous avez perdu”");
      }
    },
  });
});
