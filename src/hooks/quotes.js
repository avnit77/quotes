import { useState, useEffect } from 'react';
import { getRonQuote, searchRonQuote } from '../services/quotesApi';

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

  const handleClick = (url) => {
    setUrl(url);
  };

  return { quotes, handleClick, handleNumQuotesChange, searchQuotes, numQuotes };
};

export const searchQuotes = searchTerm => {
  const [quotes, setQuotes] = useState({});

  useEffect(() => {
    searchRonQuote(searchTerm)
      .then(quote => setQuotes(quote));
  }, [quotes]);

  return { quotes };
};

