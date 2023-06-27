import React, { useEffect, useState } from 'react';
import { useParams, Link, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

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

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>Release Year: {movie.release_date}</p>
      <p>User Score: {movie.vote_average}</p>
      <p>Overview: {movie.overview}</p>
      <p>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>

      <div>
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
    </div>
  );
};



// import React, { useEffect, useState } from 'react';
// import { useParams, Link, Route, Routes } from 'react-router-dom';
// import axios from 'axios';

// const Cast = () => {
//   // Компонент Cast
//   return <h3>Cast Component</h3>;
// };

// const Reviews = () => {
//   // Компонент Reviews
//   return <h3>Reviews Component</h3>;
// };

// export const MovieDetails = () => {
//   const { movieId } = useParams();
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     // Викликати API TMDb для отримання детальної інформації про фільм
//     axios
//       .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=889c6c698b758e37f5a9c5b22a486a89`)
//       .then(response => {
//         setMovie(response.data);
//       })
//       .catch(error => {
//         console.error('Помилка при отриманні детальної інформації про фільм:', error);
//       });
//   }, [movieId]);

//   if (!movie) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{movie.title}</h2>
//       <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
//       <p>Release Year: {movie.release_date}</p>
//       <p>User Score: {movie.vote_average}</p>
//       <p>Overview: {movie.overview}</p>
//       <p>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>

//       <div>
//         <h3>Additional Information</h3>
//         <ul>
//           <li>
//             <Link to={`/movies/${movieId}/cast`}>Cast</Link>
//           </li>
//           <li>
//             <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
//           </li>
//         </ul>
//       </div>

//       <Routes>
//         <Route path="/movies/:movieId/cast" element={<Cast />} />
//         <Route path="/movies/:movieId/reviews" element={<Reviews />} />
//       </Routes>
//     </div>
//   );
// };


// import React, { useEffect, useState } from 'react';
// import { useParams, Link, Route, Routes } from 'react-router-dom';
// import axios from 'axios';
// import { Cast } from './Cast';
// import { Reviews } from './Reviews';


// export const MovieDetails = () => {
//   const { movieId } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [showCast, setShowCast] = useState(false);
//   const [showReviews, setShowReviews] = useState(false);

//   useEffect(() => {
//     // Викликати API TMDb для отримання детальної інформації про фільм
//     axios
//       .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=889c6c698b758e37f5a9c5b22a486a89`)
//       .then(response => {
//         setMovie(response.data);
//       })
//       .catch(error => {
//         console.error('Помилка при отриманні детальної інформації про фільм:', error);
//       });
//   }, [movieId]);

//   const handleCastClick = () => {
//     setShowCast(true);
//     setShowReviews(false);
//   };

//   const handleReviewsClick = () => {
//     setShowCast(false);
//     setShowReviews(true);
//   };

//   if (!movie) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{movie.title}</h2>
//       <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
//       <p>Release Year: {movie.release_date}</p>
//       <p>User Score: {movie.vote_average}</p>
//       <p>Overview: {movie.overview}</p>
//       <p>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>

//       <div>
//         <h3>Additional Information</h3>
//         <ul>
//           <li>
//             <button onClick={handleCastClick}>Cast</button>
//           </li>
//           <li>
//             <button onClick={handleReviewsClick}>Reviews</button>
//           </li>
//         </ul>
//       </div>

//       {showCast && <Cast />}
//       {showReviews && <Reviews />}
//     </div>
//   );
// };















// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// export const MovieDetails = () => {
//   const { movieId } = useParams();
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     // Викликати API TMDb для отримання детальної інформації про фільм
//     axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=889c6c698b758e37f5a9c5b22a486a89`)
//       .then(response => {
//         setMovie(response.data);
//       })
//       .catch(error => {
//         console.error('Помилка при отриманні детальної інформації про фільм:', error);
//       });
//   }, [movieId]);

//   if (!movie) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{movie.title}</h2>
//       <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
//       <p>Release Year: {movie.release_date}</p>
//       <p>User Score: {movie.vote_average}</p>
//       <p>Overview: {movie.overview}</p>
//       <p>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>

//       <div>
//         <h3>Additional Information</h3>
//         <ul>
//           <li>
//             <a href={`/movies/${movieId}/cast`}>Cast</a>
//           </li>
//           <li>
//             <a href={`/movies/${movieId}/reviews`}>Reviews</a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }





// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// export const MovieDetails = () => {
//   const { movieId } = useParams();
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     // Викликати API TMDb для отримання деталей фільму
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

