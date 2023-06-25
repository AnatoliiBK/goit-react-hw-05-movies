import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Викликати API TMDb для отримання відгуків про фільм
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=889c6c698b758e37f5a9c5b22a486a89`)
      .then(response => {
        setReviews(response.data.results);
      })
      .catch(error => {
        console.error('Помилка при отриманні відгуків:', error);
      });
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map(review => (
        <div key={review.id}>
          <h3>{review.author}</h3>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
}

