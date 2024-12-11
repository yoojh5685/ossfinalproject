import React, { useState } from 'react';

export default function ResultPokeList() {
  const [selectedType, setSelectedType] = useState('');
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPokemonByType = async (type) => {
    setLoading(true);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      if (!response.ok) throw new Error('Failed to fetch data');
      
      const data = await response.json();

      // Extract Pokemon URLs to fetch individual details
      const pokemons = await Promise.all(
        data.pokemon.slice(0, 10).map(async (p) => {
          const pokemonResponse = await fetch(p.pokemon.url);
          const pokemonData = await pokemonResponse.json();
          return {
            name: pokemonData.name,
            image: pokemonData.sprites.front_default, // Default front-facing image
          };
        })
      );

      setPokemonList(pokemons);
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleFetch = () => {
    if (selectedType) {
      fetchPokemonByType(selectedType);
    }
  };

  return (
    <div>
      <h1>Pokemon by Type</h1>
      <label htmlFor="type-select">Select a Type:</label>
      <select id="type-select" value={selectedType} onChange={handleTypeChange}>
        <option value="">-- Select a Type --</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
        {/* Add more types as needed */}
      </select>
      <button onClick={handleFetch} disabled={!selectedType || loading}>
        {loading ? 'Loading...' : 'Fetch Pokemon'}
      </button>
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
        {pokemonList.map((pokemon) => (
          <div
            key={pokemon.name}
            style={{
              margin: '10px',
              textAlign: 'center',
              border: '1px solid #ccc',
              padding: '10px',
              borderRadius: '10px',
            }}
          >
            <img
              src={pokemon.image}
              alt={pokemon.name}
              style={{ width: '100px', height: '100px' }}
            />
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
