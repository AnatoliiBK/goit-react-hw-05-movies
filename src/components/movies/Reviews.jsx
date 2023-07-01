import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=889c6c698b758e37f5a9c5b22a486a89`)
      .then(response => {
        setReviews(response.data.results);
      })
      .catch(error => {
        console.error('Error receiving feedback:', error);
      });
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <ul key={review.id} className="review-list">
            <li className="review-link">Author: {review.author}</li>
            <p>{review.content}</p>
          </ul>
        ))
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
};

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Reviews;
