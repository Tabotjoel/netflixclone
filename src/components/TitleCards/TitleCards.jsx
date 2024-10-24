import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data';

// Define your OMDb API key
const API_KEY = '72051e4f';

// Define a function to fetch movie data from the OMDb API
const fetchMovies = async (query) => {
  const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
  const data = await response.json();
  return data.Search || [];
};

const TitleCards = ({ title, category }) => {
  const cardsRef = useRef();
  const [movies, setMovies] = useState([]);

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    const fetchData = async () => {
      // Fetch movies based on the category (or any query you want to use)
      const movieData = await fetchMovies(category || 'action');
      setMovies(movieData);
    };

    fetchData();

    cardsRef.current.addEventListener('wheel', handleWheel);

    return () => {
      // Cleanup event listener on component unmount
      cardsRef.current.removeEventListener('wheel', handleWheel);
    };
  }, [category]);

  return (
    <div className='title-cards'>
      <h2>{title || "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {movies.map((movie, index) => (
          <div className="card" key={index}>
            <img src={movie.Poster} alt={movie.Title} />
            <p>{movie.Title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TitleCards;
