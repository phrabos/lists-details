import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ image, name, species }) => (
  <>
    <img 
      src={image} 
      alt={name}
      style={{ height:'200px' }}
    />
    <p>{name}</p>
    <p>{species}</p>
  </>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};

export default Character;
