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
        console.error('Помилка при отриманні списку фільмів:', error);
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

// export const Home = () => {
//     const [movies, setMovies] = useState([]);
  
//     useEffect(() => {

//       axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=889c6c698b758e37f5a9c5b22a486a89')
//         .then(response => {
//           setMovies(response.data.results);
//         })
//         .catch(error => {
//           console.error('Помилка при отриманні списку фільмів:', error);
//         });
//     }, []);
  
//     return (
//       <div>
//         <h2>Home</h2>
//         {movies.map(movie => (
//           <div key={movie.id}>
//             <h3>{movie.title}</h3>
//             <p>Overview: {movie.overview}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }


// export const Home = () => {
//   return (
//     <div>
//       <h2>Home</h2>
//       <p>Welcome to the home page!</p>
//       <Link to="/movies">Go to Movies</Link>
//     </div>
//   );
// }

