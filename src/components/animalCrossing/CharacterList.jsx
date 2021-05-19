import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterList = ({ characters }) => {
  return (

    <ul aria-label="characters">
      {!!characters.length && characters.map((character) => {
        return (
          <Link to={`characters/${character.id}`} key={character.id}>
            <li>
              <Character 
                name={character.name}
                image={character.image}
                species={character.species}
              />
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CharacterList;
