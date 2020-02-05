import { useState, useEffect } from 'react';
import { getRonQuote } from '../services/quotesApi';

export const getWord = searchTerm => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    if(!searchTerm) return;

    getRonQuote(searchTerm)
      .then(setQuotes);

  }, [searchTerm]);

  return quotes;
};
