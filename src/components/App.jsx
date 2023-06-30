import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import { Home } from './home/Home';
import { Movies } from './movies/Movies';
const MovieDetails = lazy(() => import('./movies/MovieDetails'));
const Cast = lazy(() => import('./movies/Cast'));
const Reviews = lazy(() => import('./movies/Reviews'));
// import { Movies } from './movies/Movies';
// import { MovieDetails } from './movies/MovieDetails';
// import { Cast } from './movies/Cast';
// import { Reviews } from './movies/Reviews';


export const App = () => {
  return (
    <Router>
      <header>
        <nav>
          <ul className='header-list'>
            <li className='header-list_item'>
              <NavLink className="header-link" to="/" >Home</NavLink>
            </li>
            <li>
              <NavLink className="header-link" to="/movies" >Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        
        
      </Routes>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>  
    </Router>
  );
}



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

// import { Home } from './home/Home';
// import { Movies } from './movies/Movies';
// import { MovieDetails } from './movies/MovieDetails';
// import { Cast } from './movies/Cast';
// import { Reviews } from './movies/Reviews';


// export const App = () => {
//   return (
//     <Router>
//       <header>
//         <nav>
//           <ul className='header-list'>
//             <li className='header-list_item'>
//               <NavLink className="header-link" to="/" >Home</NavLink>
//             </li>
//             <li>
//               <NavLink className="header-link" to="/movies" >Movies</NavLink>
//             </li>
//           </ul>
//         </nav>
//       </header>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/movies" element={<Movies />} />
//         <Route path="/movies/:movieId" element={<MovieDetails />}>
//           <Route path="cast" element={<Cast />} />
//           <Route path="reviews" element={<Reviews />} />
//         </Route>  
        
//       </Routes>
//     </Router>
//   );
// }




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
