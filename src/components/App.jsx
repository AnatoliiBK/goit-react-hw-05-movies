import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import { Home } from './home/Home';
import { Movies } from './movies/Movies';
import { MovieDetails } from './movies/MovieDetails';
import { Cast } from './movies/Cast';
import { Reviews } from './movies/Reviews';

// export const App = () => {
//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li>
//             <NavLink exact to="/" activeClassName="active">Home</NavLink>
//           </li>
//           <li>
//             <NavLink to="/movies" activeClassName="active">Movies</NavLink>
//           </li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/movies/*" element={<Movies />} />
//         <Route path="/movies/:movieId" element={<MovieDetails />} />
//         <Route path="/movies/:movieId/cast" element={<Cast />} />
//         <Route path="/movies/:movieId/reviews" element={<Reviews />} />
//       </Routes>
//     </Router>
//   );
// }


export const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies" activeClassName="active">Movies</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
      </Routes>
    </Router>
  );
}




















// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
