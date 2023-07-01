import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=889c6c698b758e37f5a9c5b22a486a89`)
      .then(response => {
        setCast(response.data.cast);
      })
      .catch(error => {
        console.error('Mistake in getting cast:', error);
      });
  }, [movieId]);

  return (
    <div className='decor'>
      <h2>Actors Cast</h2>
      {cast.map(actor => (
        <div key={actor.id}>
          <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} width={200} />
          <p className='actor-name'>
            {actor.name}
          </p>
          <p className='actor-character'>Character: {actor.character}</p>
        </div>
      ))}
    </div>
  );
}

export default Cast;
