const imgOrder = "14725836";
const emptyCase = $("#empty");
const taquinChildren = $("#taquin__container").children();
console.log(taquinChildren);

$(".case").click(function (event) {
  var clickedDiv = event.target;
  console.log(typeof clickedDiv);
});

function swapNodes(a, b) {
  const aparent = a.parentNode;
  const asibling = a.nextSibling === b ? a : a.nextSibling;
  b.parentNode.insertBefore(a, b);
  aparent.insertBefore(b, asibling);
}

function swapElemFromArray(list, index1, index2) {
  const temp = list[index1];
  list[index1] = list[index2];
  list[index2] = temp;
}
