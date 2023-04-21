import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import fetchPopular from 'fetch/popular';
import { FilmLink, FilmsComtainer } from './HomeMoviePages.styled';
import { BiCameraMovie } from 'react-icons/bi';

const HomePage = () => {
  const [popularFilms, setPopularFilms] = useState('');
  const location = useLocation();

  // запит на популярні фільми тижня
  useEffect(() => {
    async function foo() {
      const films = await fetchPopular();
      setPopularFilms(films.results);
    }
    foo();
  }, []);

  return (
    <div>
      <h1>Popular this week</h1>
      {popularFilms && (
        <FilmsComtainer>
          {popularFilms.map(film => (
            <li key={film.id}>
              <FilmLink to={`movies/${film.id}`} state={{ from: location }}>
                <BiCameraMovie size="12px" />
                {film.title}
              </FilmLink>
            </li>
          ))}
        </FilmsComtainer>
      )}
    </div>
  );
};

export default HomePage;
