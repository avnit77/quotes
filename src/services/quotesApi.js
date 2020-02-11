
export const getRonQuote = () => {
  return fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes/1')
    .then(res => res.json());
};

export const searchRonQuote = (searchTerm)=> {
  return fetch(`https://ron-swanson-quotes.herokuapp.com/v2/quotes/?${searchTerm}`)
    .then(res => res.json());
};

