const inputNameElement = document.getElementById("name_input");
const inputIdElement = document.getElementById("id_input");
const selectTypeElement = document.getElementById("type_select");
const pokemonContainer = document.getElementById("pokemon_container");
const filterForm = document.getElementById("pokemon_filter_form");

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
/**
 * Retrieves data from a JSON file named "pokemon.json" using the fetch API.
 * If the pokemonData variable is null, it makes a request to fetch the JSON file.
 * It then converts the response to JSON format and assigns it to the pokemonData variable.
 * Finally, it returns the pokemonData array.
 * @returns {Promise<Array>} A Promise that resolves to the pokemonData array.
 */
async function getAllPokemons() {
  try {
    if (!pokemonData) {
      const response = await fetch("./pokemon.json");
      pokemonData = await response.json();
      return pokemonData;
    }
  } catch (error) {
    console.error("Error:", error);
    return Promise.reject(error);
  }
}

/**
 * Filters an array of pokemons based on their id, name, and type.
 * @param {Array} pokemons - An array of pokemons.
 * @param {string|boolean} id - The id to filter by. Defaults to false.
 * @param {string|boolean} name - The name to filter by. Defaults to false.
 * @param {string|boolean} type - The type to filter by. Defaults to false.
 * @returns {Array} - An array of pokemons that match the specified filters.
 */
function filterPokemons(pokemons, id = false, name = false, type = false) {
  return pokemons.filter((pokemon) => {
    const matchId = !id || pokemon.id.toString() === id;
    const matchName =
      !name || pokemon.name.french.toLowerCase().includes(name.toLowerCase());
    const matchType = !type || pokemon.type.includes(type);
    return matchId && matchName && matchType;
  });
}
getAllPokemons().then((data) => {
  let name = "";
  let id = "";
  let type = "";

  const updatePokemonList = () => {
    const filteredPokemons = filterPokemons(data, id, name, type);
    pokemonContainer.innerHTML = "";
    filteredPokemons.forEach((pokemon) => {
      const pokeCard = document.createElement("div");
      pokeCard.setAttribute("class", "pokemon__card");
      const pokeName = document.createTextNode(pokemon.name.french);
      const nameElement = document.createElement("h3");
      const statsElement = document.createElement("ul");
      nameElement.appendChild(pokeName);
      for (const [key, value] of Object.entries(pokemon.base)) {
        const liElement = document.createElement("li");
        // add class so color of h3 matchs Type
        const statP = document.createTextNode(`${key}: ${value}`);
        liElement.appendChild(statP);
        statsElement.appendChild(liElement);
      }
      pokeCard.appendChild(nameElement);
      pokeCard.appendChild(statsElement);
      pokemonContainer.appendChild(pokeCard);
    });
  };

  inputNameElement.addEventListener("input", (event) => {
    name = event.target.value.trim();
    updatePokemonList();
  });

  inputIdElement.addEventListener("input", (event) => {
    id = event.target.value.trim();
    updatePokemonList();
  });

  selectTypeElement.addEventListener("change", (event) => {
    type = event.target.value;
    updatePokemonList();
  });

  updatePokemonList();
});
