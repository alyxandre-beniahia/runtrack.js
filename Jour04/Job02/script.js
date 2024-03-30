function jsonValueKey(data, key) {
  try {
    const parsedData = JSON.parse(data);
    const value = parsedData[key];
    console.log(value);
  } catch (error) {
    console.error("Error parsing JSON data:", error);
  }
}

// prettier-ignore
const myJson = '{"name": "Beniahia", "adress": "7 rue de la prison","city": "Marseille","age": "8"}'
jsonValueKey(myJson, "city");
