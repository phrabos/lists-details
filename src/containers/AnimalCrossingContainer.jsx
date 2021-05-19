import React, { useState, useEffect } from 'react';
import CharacterList from '../components/animalCrossing/CharacterList';
import { fetchAllCharacters } from '../services/apiUtils';


const AnimalCrossingContainer = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchAllCharacters(1)
      .then(setCharacters)
      .finally(() => setLoading(false));
    console.log(characters);
  }, []);

  if(loading) return <h1>Loading...</h1>;

  return (
    <CharacterList characters={characters}/>
  );
};


export default AnimalCrossingContainer;
