// Pokemon API

const resultContainer = document.getElementById("result");

let currentId = 1;

async function getPokemon(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  console.log(data);

  currentId = id;

  resultContainer.innerHTML = `
    <div className="pokemon">
        <img src="${data.sprites.front_default}"/>
        <h3>Name: ${data.name}</h3>
        <p>ID: ${data.id}</p>
    </div>
  `;
}

function incrementID() {
  currentId++;
  getPokemon(currentId);
}

function decrementID() {
  if (currentId <= 1) {
    return;
  }
  currentId--;
  getPokemon(currentId);
}

const pokemonSearchForm = document.getElementById("pokemonSearch");

pokemonSearchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const idInput = pokemonSearchForm.querySelector("#pokemonId");
  getPokemon(idInput.value);
  idInput.value = "";
});
