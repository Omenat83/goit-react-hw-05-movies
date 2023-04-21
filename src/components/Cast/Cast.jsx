/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import fetchDetailsSection from 'fetch/filmDetailsSections';
import { useParams } from 'react-router-dom';
import { CastContainer } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    async function foo() {
      const filmsCast = await fetchDetailsSection(movieId, 'credits');
      setCast(filmsCast.cast);
    }

    foo();
  }, [movieId]);

  return (
    <>
      {cast && (
        <CastContainer>
          {cast.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={`Sorry, we haven't photo of ${name} `}
                width="150"
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </CastContainer>
      )}
    </>
  );
};

export default Cast;
