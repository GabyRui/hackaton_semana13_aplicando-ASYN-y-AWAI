
//----------------------------------------------------------
//Obtención de información.

const container = document.querySelector('.contenedor');
const details = document.querySelector('.pokemon-details');

const readPokemon = async () => {

for (let i = 1; i <= 20; i++) {
    const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${i}`);
    const data = await response.json();
    printPokemon(data); 
    };
};

//----------------------------------------------------------
//Mostrando la información.

const printPokemon = (pokemon) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <p class="id">${pokemon.id}</p>
    <p class="name_pokemon">${pokemon.name}</p>
    <img src="${pokemon.sprites.other['official-artwork'].front_default}" class="imagen_pokemon">
    <button class="button_pokemon"> Ver detalles </button>     
`
    container.appendChild(card);
};

    console.log(container);
    readPokemon();

    container.addEventListener = ('click', (e) => {
        console.log(e.target);
    });

    const readPokemon1 = async (e) => {

        for (let i = 1; i <= 20; i++) {
            const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${i}`);
            const data = await response.json();
            console.log(e.target);    
        };   
    };


