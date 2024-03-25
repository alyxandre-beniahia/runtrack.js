function tri(array, order) {
  function compareItems(a, b) {
    return a - b;
  }
  if (order == "asc") {
    console.log(array.sort(compareItems));
  } else {
    console.log(array.sort(compareItems).reverse());
  }
}

tri([1, 2, 8, 10, 5], "desc");
