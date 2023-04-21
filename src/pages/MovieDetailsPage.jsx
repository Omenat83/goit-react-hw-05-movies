import MovieDetails from 'components/MovieDetails/MovieDetails';
import React, { useEffect, useState, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import fetchMovieDetails from 'fetch/filmDetails';
import { BsFillSkipBackwardFill } from 'react-icons/bs';
import {
  BackLink,
  SectionsContainer,
  SectionLink,
  Section,
} from './MovieDetailsPage.styled';
import { Suspense } from 'react';

const MovieDetailsPage = () => {
  const [usersFilm, setUsersFilm] = useState('');
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    foo(movieId);

    async function foo(movieId) {
      const details = await fetchMovieDetails(movieId);
      setUsersFilm(details);
    }
  }, [movieId]);

  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = usersFilm;

  return (
    <div>
      <BackLink to={backLink.current}>
        <BsFillSkipBackwardFill />
        Go back
      </BackLink>

      {usersFilm && (
        <>
          <MovieDetails
            poster={poster_path}
            title={original_title}
            date={release_date}
            average={vote_average}
            overview={overview}
            genresObj={genres}
          />
          <SectionsContainer>
            <h3>Additional information:</h3>
            <Section>
              <SectionLink to="cast">Cast</SectionLink>
            </Section>
            <Section>
              <SectionLink to="reviews">Reviews</SectionLink>
            </Section>
          </SectionsContainer>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
