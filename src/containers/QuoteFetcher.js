import React, { useState, useEffect } from 'react';
import { getRonQuote } from '../services/quotesApi';
import Quote from '../components/Quotes/Quote';
import Button from '../components/Button/Button';

const QuoteFetcher = () => {
  // [state, setState]
  const [quote, setQuote] = useState({ quote: '', name: '', image: '' });
  useEffect(() => {
    getRonQuote()
      .then(quote => setQuote(quote));
  }, []);

  const handleClick = () => {
    return getRonQuote()
      .then(quote => setQuote(quote));
  };


  return (
    <>
      <Quote {...quote} />
      <Button text="Get a new one" onClick={handleClick} />
    </>
  );
};

export default QuoteFetcher;
