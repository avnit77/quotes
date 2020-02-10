import React from 'react';
import styles from './Quote.css';
import { useQuotes, searchQuotes } from '../../hooks/quotes';

const Quotes = () => {
  const { handleClick, handleNumQuotesChange, numQuotes, quotes } = useQuotes();

  return (
    <>
      <div className={styles.Quote}>
        <button onClick={() => handleClick('https://ron-swanson-quotes.herokuapp.com/v2/quotes/1')}>Get Random Quote</button>
      </div>
      <div>
        <input type="text" name="searchTerm" >
        </input>
        <button onClick={({ target }) => searchQuotes(target.value)}>Search Quotes</button>
      </div>
      <div>
        <button onClick={() => handleClick(`https://ron-swanson-quotes.herokuapp.com/v2/quotes/${numQuotes}`)}>Get {numQuotes} Quotes</button>
        <input className='numQuotes' onChange={({ target }) => handleNumQuotesChange(parseInt(target.value))} type='range' min='2' max='100' value={numQuotes}></input>
      </div>

      <ul>
        { quotes.length ?
          quotes.map(({ text, name, id }) => {
            return <li key={id}>
              <p>&quot;{text} {name} &quot;</p>
              <img src={'https://www.boredteachers.com/wp-content/uploads/2018/02/Ron_Swanson_Teacher_Life_cover_Bored_Teachers.jpeg'}/>
            </li>;}) : null
        }
      </ul>
    </>


  );
};

export default Quotes;
