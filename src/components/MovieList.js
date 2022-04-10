import React from 'react';
import { Card, Col, Row } from 'antd';

const MovieList = ({ movies }) => {

  return (
    <div className='movie-list-container'>
        {movies.map((movie) => (
            <div className='image-container' key={movie.id}>
                <img 
                    className='movie-poster' 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt='movie' 
                >
                </img>
            </div>
        ))}
    </div>
  )
}

export default MovieList;