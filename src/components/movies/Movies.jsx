import React, { useState } from 'react';
import axios from 'axios';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      return;
    }

    // Викликати API TMDb для пошуку фільмів
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=889c6c698b758e37f5a9c5b22a486a89&query=${searchQuery}`)
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.error('Помилка при отриманні списку фільмів:', error);
      });
  };

  return (
    <div>
      <h2>Movies</h2>
      <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>

      {movies.length > 0 ? (
        <div>
          <h3>Search results:</h3>
          {movies.map(movie => (
            <div key={movie.id}>
              <h4>{movie.title}</h4>
              <p>Overview: {movie.overview}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Enter a movie title to search</p>
      )}
    </div>
  );
}




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// export const Movies = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     // Викликати API TMDb для отримання списку фільмів
//     axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=889c6c698b758e37f5a9c5b22a486a89')
//       .then(response => {
//         setMovies(response.data.results);
//       })
//       .catch(error => {
//         console.error('Помилка при отриманні списку фільмів:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Movies</h2>
//       {movies.map(movie => (
//         <div key={movie.id}>
//           <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
//         </div>
//       ))}
//     </div>
//   );
// }

