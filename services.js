const URL="https://pokeapi.co/api/v2/pokemon/"
const searchInput = document.getElementById("search");
const pokedexContainer = document.getElementById("pokedex");

function showError(msg){
    pokedexContainer.innerHTML=`<p>${msg}</p>`;
}

async function searchPokemon(){
    //var a=1
    const searchedPokemon = searchInput.value.toLowerCase();
    try {
        const response = await fetch(URL + searchedPokemon);     

        if(!response.ok){
            showError (`No se encontro el Pokemon llamado  "${searchedPokemon}"`);
        return;
        }
        const data= await response.json();
        pokedexContainer.innerHTML=
        `
        <h2>${data.name.toUpperCase()} </h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p>Numero:${data.id}</p>
        <p>Altura:${data.height /10}m</p>
        <p>Peso: ${data.weight /10} Kg</p>
        `;
        
    } catch (error) {
        
        showError('Ha ocurrido un error al buscar el Pokemon'); 
        console.error(error);
    }

}

document.getElementById("btn-search").addEventListener('click',searchPokemon);