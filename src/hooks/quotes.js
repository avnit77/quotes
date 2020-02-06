import { useState, useEffect } from 'react';
import { getRonQuote } from '../services/quotesApi';

export const useQuotes = () => {
  const [url, setUrl] = useState('');
  const [numQuotes, setNumQuotes] = useState(2);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    getRonQuote(url)
      .then(quotes => setQuotes(quotes));
  }, [url]);

  const handleNumQuotesChange = (numQuotes) => {
    setNumQuotes(numQuotes);
  };

  const searchQuotes = (searchTerm) => {
    setQuotes(quotes);
    setUrl(`https://ron-swanson-quotes.herokuapp.com/v2/quotes/${searchTerm}/1`);
  };

  const handleClick = (url) => {
    setUrl(url);
  };

  return { quotes, handleClick, handleNumQuotesChange, searchQuotes, numQuotes };
};
