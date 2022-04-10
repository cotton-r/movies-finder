import React, { useState, useEffect } from 'react';

import './App.css';

import MovieList from './components/MovieList';

const App = () => {

  const [movies, setMovies] = useState([]);
  const api_key = process.env.REACT_APP_MOVIE_DATABASE_API_KEY

  const getMoviesRequest = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;

    const response = await fetch(url);
    const responseJson = await response.json();
    
    if (responseJson.results) {
      setMovies(responseJson.results);
    }
  };

  useEffect(() => {
    getMoviesRequest();
  }, []);

  console.log(movies);

  return (
    <div className="App">
      <div className='row'>
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;