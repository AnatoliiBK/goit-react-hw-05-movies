import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Викликати API TMDb для отримання списку фільмів
    axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=889c6c698b758e37f5a9c5b22a486a89')
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.error('Помилка при отриманні списку фільмів:', error);
      });
  }, []);

  return (
    <div>
      <h2>Movies</h2>
      {movies.map(movie => (
        <div key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </div>
      ))}
    </div>
  );
}

