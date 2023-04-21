import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import fetchFormQuery from 'fetch/formInput';
import { toast } from 'react-toastify';
import { BiCameraMovie } from 'react-icons/bi';
import {
  FilmLink,
  FilmsComtainer,
  SearchForm,
  FormInput,
  FormButton,
} from './HomeMoviePages.styled';

const MoviesPage = () => {
  const [queryCollections, setQueryCollecrions] = useState('');
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useSearchParams();
  const filmUrl = searchQuery.get('query') ?? '';

  // запит на апі по назві фільму
  useEffect(() => {
    async function foo() {
      const films = await fetchFormQuery(filmUrl);
      setQueryCollecrions(films.results);
    }

    if (!filmUrl) return;
    foo();
  }, [filmUrl]);

  // зміна пошукового запиту після сабміту форми
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    if (form.filmInput.value.trim() === '') {
      toast.warn('Enter correct query');
    } else setSearchQuery({ query: form.filmInput.value });
    form.reset();
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit}>
        <FormInput type="text" name="filmInput" />
        <FormButton type="submit">Search </FormButton>
      </SearchForm>
      {queryCollections && (
        <FilmsComtainer>
          {queryCollections.map(film => (
            <li key={film.id}>
              <FilmLink to={`${film.id}`} state={{ from: location }}>
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

export default MoviesPage;
