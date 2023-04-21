import React from 'react';
import PropTypes from 'prop-types';
import { DetailsContainer, FilmTitle, FilmInfo } from './MovieDetails.styled';

const MovieDetails = ({
  poster,
  title,
  date,
  average,
  overview,
  genresObj,
}) => {
  const year = new Date(date).getUTCFullYear();
  const averageInPercent = Math.round(average * 10);
  const genres = genresObj.map(gen => gen.name).join(', ');

  return (
    <DetailsContainer>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster}`}
        alt="poster"
        // width="480"
      />
      <div>
        <FilmTitle>
          {title} ({year})
        </FilmTitle>
        <FilmInfo>User Score: {averageInPercent}%</FilmInfo>
        <h3>Owerview</h3>
        <FilmInfo>{overview}</FilmInfo>
        <h3>Genres</h3>
        <FilmInfo>{genres}</FilmInfo>
      </div>
    </DetailsContainer>
  );
};

MovieDetails.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  average: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genresObj: PropTypes.array,
};

export default MovieDetails;
