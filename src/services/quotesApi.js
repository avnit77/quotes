
export const getRonQuote = () => {
  return fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes/1')
    .then(res => res.json())
    .then(([text]) => ({
      text,
      img: 'https://www.boredteachers.com/wp-content/uploads/2018/02/Ron_Swanson_Teacher_Life_cover_Bored_Teachers.jpeg'
    }));
};

