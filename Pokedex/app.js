const pokedex = document.getElementById("pokedex")
const pokeCache = {};
console.log(pokedex);


document.getElementById('searchField').addEventListener('keypress', function(event){
    if(event.key === "Enter"){
        document.getElementById('butoni').click();
    }
        
            
        
    
});
const searchPokemon = async (e) => {
    const input = document.getElementById('searchField');
    const name = input.value.toLowerCase();
    const url1 = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const res1 = await fetch(url1);
    const data1 = await res1.json();
    const type1 = data1.types.map (( type) =>
                    type.type.name).join(", ");
                    const image1 = data1.sprites['front_default'];
                    const htmlString1 = `
                <div class="popup">
    
                        <button id="closeBtn" onclick="closePopup()">Back</button>
                        <div class="card">
                        <img class="card-image" src="${image1}"</img>
                        <h2 class="card-title" >${data1.id}. ${data1.name}. </h2>
                        <p><small>Height: </small>${data1.height} | <small>Weight: </small>${data1.weight} | <small>Type: </small>${type1}
                        </p></div>
                    </div> 
                    `
                    pokedex.innerHTML = htmlString1 + pokedex.innerHTML;
                    console.log(htmlString1);
                    
                 ;
   
    console.log(data1);
}

const url = `https://api.wheretheiss.at/v1/satellites/25544`;
async function fetch1Pokemon()  {
    response = await fetch(url);
    data5 = await response.json();
    
    console.log(response);
    console.log(data5);
}

fetch1Pokemon();

const fetchPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=150`;
    const res = await fetch(url);
    const data = await res.json();
    const pokemon = data.results.map((result, index) =>({

        ...result,
        id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,

    }));
    console.log(data);
    console.log(data.results);
    displayPokemon(pokemon);
};

    
const displayPokemon = (pokemon) => {
    console.log(pokemon);

    const pokemonHTMLString = pokemon.map ((pokemons) => 

    
        
    `            
            <li class="card" onclick="selectPokemon(${pokemons.id})">
            <img class="card-image" src="${pokemons.image}"/>
            <h2 class="card-title" >${pokemons.id}. ${pokemons.name}. </h2>
            </li>
                `
            
            
                ).join('');
            pokedex.innerHTML = pokemonHTMLString;


        }; 

        const selectPokemon = async (id) =>{
            
            const url = `https://pokeapi.co/api/v2/pokemon/${id}`
            const res = await fetch(url);
            const pokemons = await res.json();
            pokeCache[id] = pokemons;

             displayPopup(pokemons);
        };

        const displayPopup =  (pokemons) => {
            const type = pokemons.types.map (( type) =>
                type.type.name).join(", ");
                const image = pokemons.sprites['front_default'];
                const htmlString = `
            <div class="popup">

                    <button id="closeBtn" onclick="closePopup()">Back</button>
                    <div class="card">
                    <img class="card-image" src="${image}"</img>
                    <h2 class="card-title" >${pokemons.id}. ${pokemons.name}. </h2>
                    <p><small>Height: </small>${pokemons.height} | <small>Weight: </small>${pokemons.weight} | <small>Type: </small>${type}
                    </p></div>
                </div> 
                `
                pokedex.innerHTML = htmlString + pokedex.innerHTML;
                console.log(htmlString);
                
            } ;
           
            const closePopup = () => { 
                fetchPokemon();
                
            };
            
            
        


            

fetchPokemon();