import React, { useState, useEffect } from 'react';
import CharacterList from '../components/animalCrossing/CharacterList';
import { fetchAllCharacters } from '../services/apiUtils';
import style from './main.css';


const AnimalCrossingContainer = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchAllCharacters(page)
      .then(setCharacters)
      .finally(() => setLoading(false));
  }, [page]);

  console.log(page);
  
  if(loading) return <h1>Loading...</h1>;
  
  return (
    <div className={style.characterWrapper}>
      <button onClick={() => {
        if(page === 1) return;
        else setPage((prevPage) => prevPage - 1);
      }}>Prev</button>
      <button onClick={() => setPage((prevPage) => prevPage + 1)}>Next</button>
      <CharacterList characters={characters}/>
    </div>
  );
};


export default AnimalCrossingContainer;
