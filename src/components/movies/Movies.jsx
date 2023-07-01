import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Movies = () => {
  const [searchInput, setSearchInput] = useState('');
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
    if (searchInput.trim() === '') {
      return;
    }

    setSearchQuery(searchInput); // Зберегти введене значення у стані searchQuery

    // Викликати API TMDb для пошуку фільмів
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=889c6c698b758e37f5a9c5b22a486a89&query=${searchInput}`)
      .then(response => {
        setMovies(response.data.results);
        // Зберігати список фільмів у стані локації
        navigate('.', { state: { movies: response.data.results } });
      })
      .catch(error => {
        console.error('Error receiving movie list:', error);
      });
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      setSearchQuery(searchInput); // Зберегти введене значення у стані searchQuery
      handleSearch();
    }
  };

  return (
    <div>
      <h2>Movies</h2>
      <input
        type="text"
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearch}>Search</button>

      {searchQuery.trim() !== '' && movies.length === 0 ? (
        <p>
          No movie titled "{searchQuery}" found. Enter a different title, or{' '}
          <Link to="/">go to the Home page to select a movie</Link>
        </p>
      ) : movies.length > 0 ? (
        <div>
          <h3>Search results:</h3>
          {movies.map(movie => (
            <ul key={movie.id}>
              <li>
                <Link to={{ pathname: `/movies/${movie.id}`, state: { movies: movies } }}>
                  {movie.title}
                </Link>
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
