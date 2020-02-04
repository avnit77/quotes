import React, { Component } from 'react';
import { getRonQuote } from '../services/quotesApi';
import Quote from '../components/quotes/Quote';
import Button from '../components/commons/button/Button';

const quoteProviderFactory = {
  ron: getRonQuote
};

export default class QuoteFetcher extends Component {
  state = {
    quoteProvider: 'ron',
    quote: { text: '', name: '', img: '' }
  }

  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    return quoteProviderFactory[this.state.quoteProvider]()
      .then(quote => this.setState({ quote }));
  }

  render() {
    const { quote } = this.state;

    return (
      <>
        <Quote {...quote} />
        <Button text="Get a new one" onClick={this.fetch} />
      </>
    );
  }
}