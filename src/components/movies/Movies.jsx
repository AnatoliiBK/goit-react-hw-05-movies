import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Перевірка, чи є наявний список фільмів у стані локації
    if (location.state && location.state.movies) {
      setMovies(location.state.movies);
    }
  }, [location.state]);

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      return;
    }

    // Викликати API TMDb для пошуку фільмів
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=889c6c698b758e37f5a9c5b22a486a89&query=${searchQuery}`)
      .then(response => {
        setMovies(response.data.results);
        // Зберігати список фільмів у стані локації
        navigate('.', { state: { movies: response.data.results } });
      })
      .catch(error => {
        console.error('Помилка при отриманні списку фільмів:', error);
      });
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <h2>Movies</h2>
      <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} onKeyPress={handleKeyPress} />
      <button onClick={handleSearch}>Search</button>

      {movies.length > 0 ? (
        <div>
          <h3>Search results:</h3>
          {movies.map(movie => (
            <ul key={movie.id}>
              <li>
                <Link to={{ pathname: `/movies/${movie.id}`, state: { movies: movies } }}>{movie.title}</Link>
              </li>
            </ul>
          ))}
        </div>
      ) : (
        <p>
          Enter a movie title to search or{' '}
          <Link to="/">go to the Home page to select a movie</Link>
        </p>
      )}
    </div>
  );
};



// export const Movies = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [movies, setMovies] = useState([]);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Перевірка, чи є наявний список фільмів у стані локації
//     if (location.state && location.state.movies) {
//       setMovies(location.state.movies);
//     }
//   }, [location.state]);

//   const handleSearch = () => {
//     if (searchQuery.trim() === '') {
//       return;
//     }

//     // Викликати API TMDb для пошуку фільмів
//     axios
//       .get(`https://api.themoviedb.org/3/search/movie?api_key=889c6c698b758e37f5a9c5b22a486a89&query=${searchQuery}`)
//       .then(response => {
//         setMovies(response.data.results);
//         // Зберігати список фільмів у стані локації
//         navigate('.', { state: { movies: response.data.results } });
//       })
//       .catch(error => {
//         console.error('Помилка при отриманні списку фільмів:', error);
//       });
//   };

//   return (
//     <div>
//       <h2>Movies</h2>
//       <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
//       <button onClick={handleSearch}>Search</button>

//       {movies.length > 0 ? (
//         <div>
//           <h3>Search results:</h3>
//           {movies.map(movie => (
//             <ul key={movie.id}>
//               <li>
//                 <Link to={{ pathname: `/movies/${movie.id}`, state: { movies: movies } }}>{movie.title}</Link>
//               </li>
//             </ul>
//           ))}
//         </div>
//       ) : (
//         <p>
//           Enter a movie title to search or{' '}
//           <Link to="/">go to the Home page to select a movie</Link>
//         </p>
//       )}
//     </div>
//   );
// };



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link, useLocation, useNavigate } from 'react-router-dom';

// export const Movies = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [movies, setMovies] = useState([]);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Перевірка, чи є наявний список фільмів у стані локації
//     if (location.state && location.state.movies) {
//       setMovies(location.state.movies);
//     }
//   }, [location.state]);

//   const handleSearch = () => {
//     if (searchQuery.trim() === '') {
//       return;
//     }

//     
//     axios
//       .get(`https://api.themoviedb.org/3/search/movie?api_key=889c6c698b758e37f5a9c5b22a486a89&query=${searchQuery}`)
//       .then(response => {
//         setMovies(response.data.results);
//         // Зберігати список фільмів у стані локації
//         navigate('.', { state: { movies: response.data.results } });
//       })
//       .catch(error => {
//         console.error('Помилка при отриманні списку фільмів:', error);
//       });
//   };

//   return (
//     <div>
//       <h2>Movies</h2>
//       <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
//       <button onClick={handleSearch}>Search</button>

//       {movies.length > 0 ? (
//         <div>
//           <h3>Search results:</h3>
//           {movies.map(movie => (
//             <ul key={movie.id}>
//               <li>
//                 <Link to={{ pathname: `/movies/${movie.id}`, state: { movies: movies } }}>{movie.title}</Link>
//               </li>
             
//             </ul>
//           ))}
//         </div>
//       ) : (
//         <p>Enter a movie title to search</p>
//       )}
//     </div>
//   );
// };









// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// export const Movies = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {

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

