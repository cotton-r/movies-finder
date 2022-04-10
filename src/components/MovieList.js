import React from 'react';

const MovieList = (props) => {

  return (
    <div className='movie-list-container'>
        {props.movies.map((movie, index) => (
            <div className='image-container'>
                <img src={movie.Poster} alt='movie'></img>
            </div>
        ))}
    </div>
  )
}

export default MovieList;