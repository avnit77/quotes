
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
    static propTypes = {
      text: PropTypes.text.isRequired
    }

    render() {
      const { text } = this.props;

      return (
        <>
          <button>{text}</button>
        </>
      );
    }
}
