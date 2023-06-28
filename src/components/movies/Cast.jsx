import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    // Викликати API TMDb для отримання акторського складу фільму
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=889c6c698b758e37f5a9c5b22a486a89`)
      .then(response => {
        setCast(response.data.cast);
      })
      .catch(error => {
        console.error('Помилка при отриманні акторського складу:', error);
      });
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
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


// export const Cast = () => {
//   const { movieId } = useParams();
//   const [cast, setCast] = useState([]);

//   useEffect(() => {
//     // Викликати API TMDb для отримання акторського складу фільму
//     axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=889c6c698b758e37f5a9c5b22a486a89`)
//       .then(response => {
//         setCast(response.data.cast);
//       })
//       .catch(error => {
//         console.error('Помилка при отриманні акторського складу:', error);
//       });
//   }, [movieId]);

//   return (
//     <div>
//       <h2>Cast</h2>
//       {cast.map(actor => (
//         <div key={actor.id}>
//           {actor.name} as {actor.character}
//         </div>
//       ))}
//     </div>
//   );
// }

