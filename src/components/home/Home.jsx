import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    
    axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=889c6c698b758e37f5a9c5b22a486a89')
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.error('Error receiving movie list:', error);
      });
  }, []);

  return (
    <div className='decor'>
      <h2>Trending today</h2>
      
      {movies.map(movie => (
        <ul key={movie.id}>
          <li>
             <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>          
        </ul>
      ))}
    </div>
  );
}
