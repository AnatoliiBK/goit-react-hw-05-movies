import React, { useEffect, useState } from 'react';
import { useParams, Link, Route, Routes, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Викликати API TMDb для отримання детальної інформації про фільм
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=889c6c698b758e37f5a9c5b22a486a89`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error('Помилка при отриманні детальної інформації про фільм:', error);
      });
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  
  const releaseYear = movie.release_date.split('-')[0];

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className='decor'>
      <div className='card'>
        <div className='card-first'>
          <button onClick={handleGoBack}>Go back</button>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width={300}/>
        </div>
        <div className='card-four'>
          <div className='card-sec'>
            <h2>{movie.title}</h2>
            <p className='releaseYear'>({releaseYear})</p>
          </div>
          <div className='card-th'>
            <p className='user-score'>User Score: {movie.vote_average}</p>
            <p><span className='overview'>Overview:</span><br></br> {movie.overview}</p>
            <p className='genres'>Genres: <br></br><span className='genres-list'>{movie.genres.map(genre => genre.name).join(', ')}</span></p>
          </div>
        </div>
      </div>

      <div className='decor'>
        <h3>Additional Information</h3>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route
          path="/movies/:movieId/cast"
          element={
            <div>
              <Cast />
              <MovieDetails />
            </div>
          }
        />
        <Route
          path="/movies/:movieId/reviews"
          element={
            <div>
              <Reviews />
              <MovieDetails />
            </div>
          }
        />
      </Routes>
      <Outlet />
    </div>
  );
};






// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// export const MovieDetails = () => {
//   const { movieId } = useParams();
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {

//     axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=889c6c698b758e37f5a9c5b22a486a89`)
//       .then(response => {
//         setMovie(response.data);
//       })
//       .catch(error => {
//         console.error('Помилка при отриманні деталей фільму:', error);
//       });
//   }, [movieId]);

//   if (!movie) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{movie.title}</h2>
//       <p>Overview: {movie.overview}</p>
//       {/* Додаткова інформація про фільм */}
//       {/* Наприклад, акторський склад, відгуки тощо */}
//     </div>
//   );
// }

