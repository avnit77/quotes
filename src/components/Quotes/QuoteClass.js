
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Quote extends Component {
    static propTypes = {
      name: PropTypes.name.isRequired,
      img: PropTypes.img.isRequired,
      text: PropTypes.text.isRequired
    }

    render() {
      const { img, text } = this.props;
      return (
        <>
          <h1>{name}</h1>
          <img src={img} />
          <p>{text}</p>
        </>
      );
    }
}
