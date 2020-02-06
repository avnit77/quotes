import React from 'react';
import styles from './Quote.css';
import { useQuotes } from '../../hooks/quotes';

const Quotes = () => {
  const { handleClick, handleNumQuotesChange, searchQuotes, numQuotes, quotes } = useQuotes();

  return (
    <>
      <div className={styles.Quote}>
        <button onClick={() => handleClick('https://ron-swanson-quotes.herokuapp.com/v2/quotes/1')}>Get Random Quote</button>
        <div>
          <input onChange={({ target }) => searchQuotes(target.value)} name="searchTerm" >
            <button onClick={() => handleClick(`https://ron-swanson-quotes.herokuapp.com/v2/quotes/${searchTerm}/1`)}>Search Quotes</button>
          </input>
        </div>
        <div>
          <button onClick={() => handleClick(`https://ron-swanson-quotes.herokuapp.com/v2/quotes/${numQuotes}`)}>Get {numQuotes} Quotes</button>
          <input className='numQuotes' onChange={({ target }) => handleNumQuotesChange(parseInt(target.value))} type='range' min='2' max='100' value={numQuotes}></input>
        </div>


        { quotes.length ?
          quotes.map(({ text, name }) => {
            return <>
              <p>&quot;{text} {name} &quot;</p>
              <img src={'https://www.boredteachers.com/wp-content/uploads/2018/02/Ron_Swanson_Teacher_Life_cover_Bored_Teachers.jpeg'}/>
            </>;}) : null
        }
      </div>
    </>


  );
};

export default Quotes;
