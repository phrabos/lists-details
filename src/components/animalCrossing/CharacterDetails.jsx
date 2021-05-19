import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetails = ({ character }) => (
  <div data-testid="character-div">
    <img src={character.image} alt={character.name} />
    <p>{character.name}</p>
    <p>{character.quote}</p>
    <p>{character.personality}</p>
    <p>{character.species}</p>
    <p>{character.skill}</p>
  </div>
);

CharacterDetails.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    personality: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    skill: PropTypes.string.isRequired
  }).isRequired
};

export default CharacterDetails;
