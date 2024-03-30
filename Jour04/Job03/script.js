function removeDuplicates(data) {
  return data.filter((value, index) => data.indexOf(value) == index);
}
function isNumber(char) {
  return /\d/.test(char);
}
async function getPokeType() {
  try {
    const response = await fetch("./pokemon.json");
    const data = await response.json();
    const types = removeDuplicates(data.map((pokemon) => pokemon.type).flat());
    var mySelect = document.getElementById("type_select");
    for (var i = 0; i < types.length; i++) {
      var type = types[i];
      var ele = document.createElement("option");
      ele.textContent = type;
      ele.value = type;
      mySelect.appendChild(ele);
    }
    return types;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
getPokeType();

let pokemonData = null;

async function getAllPokemons(filterName = "", filterId = "") {
  try {
    if (!pokemonData) {
      const response = await fetch("./pokemon.json");
      pokemonData = await response.json();
    }

    const container =
      document.querySelector(".pokemon-container") ||
      document.body.appendChild(document.createElement("div"));
    container.classList.add("pokemon-container");
    container.textContent = "";

    const filteredData = pokemonData.filter((item) => {
      const nameMatch = item.name.french
        .toLowerCase()
        .includes(filterName.toLowerCase());
      const idMatch = String(item.id) == filterId;

      return (filterName === "" || nameMatch) && (filterId === "" || idMatch);
    });

    filteredData.forEach((item) => {
      const pokemonHTML = `<div>${JSON.stringify(item.name.french)}</div>`;
      container.insertAdjacentHTML("beforeend", pokemonHTML);
    });
  } catch (error) {
    console.error("Error:", error);
    return Promise.reject(error);
  }
}

const inputNameElement = document.getElementById("name_input");
const inputIdElement = document.getElementById("id_input");
inputIdElement.addEventListener("input", (event) => {
  console.log(event.target.value);
  getAllPokemons((filterId = inputIdElement.value));
});
inputNameElement.addEventListener("input", (event) => {
  console.log(event.target.value);
  getAllPokemons((filterName = inputNameElement.value));
});
