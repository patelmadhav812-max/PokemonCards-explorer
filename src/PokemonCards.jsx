import { Pokemon } from "./Pokemon"

export const PokemonCards =({Pokemondata})=>{

    return(
      <li className="pokemon-card">
        <figure>
            <img src={Pokemondata.sprites.other.dream_world.front_default} alt={Pokemondata.name} 
            className="pokemon-image"/>
        </figure>
        <h1 className="pokemon-name">{Pokemondata.name}</h1>
        <div className="pokemon-info pokemon-highlight">
            <p>

              {
                Pokemondata.types.map((curType)=>
                   curType.type.name).join(", ")}
            </p>
        </div>
        <div className="grid-three-cols">
            <p className="pokemon-info">
                <span>Height:</span>{Pokemondata.height}
            </p>
            <p>
                <span>Weight:</span>{Pokemondata.weight}
            </p>
            <p>
                <span>Speed:</span>{Pokemondata.stats[1].base_stat}
            </p>
        </div>

        <div className="grid-three-cols">
           <div className="pokemon-info">
            <p>{Pokemondata.base_experience}</p>
            <span>Experience :</span>
           </div>
           <div className="pokemon-info">
            <p>{Pokemondata.stats[1].base_stat}</p>
            <span>Attack :</span>
           </div>
        <div className="pokemon-info">
            <p>
                {
                    Pokemondata.abilities
                    .map((abilityInfo)=>abilityInfo.ability.name)
                    .slice(0 , 1)
                    .join(", ")
                }
            </p>
            <span>Abilities :</span>
        </div>
            
        </div>
      </li>
    )
    
}