import React from 'react';
import PropTypes from 'prop-types';
import styles from './Quote.css';

const Quote =  ({ text, name, img }) => (
  <figure className={styles.Quote}>
    <img src={img} />
    <figcaption>&quot;{text}&quot;{name ? ` -- by ${name}` : ''}</figcaption>
  </figure>
);

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string
};

export default Quote;
