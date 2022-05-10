import React, {useState} from 'react'

const Fetch = (props) => {

    const getPokemon = ()=> {fetch("https://pokeapi.co/api/v2/pokemon?limit=898")
    .then(response =>{
        return response.json();
    }).then(response => {
        console.log(response);
        props.newPokemon(response.results)
    }).catch(err=>{
        console.log(err);
    })
}


  return (
    <div>
        <button onClick={getPokemon}>Fetch Pokemon</button>
    </div>
  )
}

export default Fetch