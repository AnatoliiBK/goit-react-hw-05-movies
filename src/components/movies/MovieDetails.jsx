import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Викликати API TMDb для отримання деталей фільму
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=889c6c698b758e37f5a9c5b22a486a89`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error('Помилка при отриманні деталей фільму:', error);
      });
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Overview: {movie.overview}</p>
      {/* Додаткова інформація про фільм */}
      {/* Наприклад, акторський склад, відгуки тощо */}
    </div>
  );
}

