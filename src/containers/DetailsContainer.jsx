import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CharacterDetails from '../components/animalCrossing/CharacterDetails';
import { fetchSingleCharacter } from '../services/apiUtils';

const DetailsContainer = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetchSingleCharacter(match.params.id)
      .then(setCharacter)
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <h1>Loading...</h1>;
  return (
    <CharacterDetails character={character}/>
  );
};

DetailsContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired
};

export default DetailsContainer;
