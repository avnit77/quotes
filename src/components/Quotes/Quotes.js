import React from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import { findWord } from '../../hooks/locations';

const Locations = ({ searchTerm, selectLocation }) => {
  const locations = findWord(searchTerm);

  const locationElements = locations.map(location => (
    <li key={location.woeid} onClick={() => selectLocation(location.woeid)}>
      <Location {...location} />
    </li>
  ));

  return (
    <ul>
      {locationElements}
    </ul>
  );
};

Locations.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  selectLocation: PropTypes.func.isRequired
};

export default Locations;
