
function convertToPokemon(pokemon) {
    return `
    <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                <li class="type grass">Grass</li>
                <li class="type poison">Poison</li>
            </ol>

            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" 
            alt="${pokemon.name}">
        </div>

    </li>
    `
}

const pokemonListHtml = document.getElementById("pokemonList")

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonListHtml.innerHTML = pokemons.map(convertToPokemon).join('');
})
