import { toast } from 'react-toastify';

const API_KEY = '8565520cd492abb719a0c7276e0ff11e';
const API_URL = 'https://api.themoviedb.org/3/search/movie';

async function fetchFormQuery(filmQuery) {
  try {
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}&query=${filmQuery}&page=1`
    );
    if (!response.ok) throw new Error('Sorry. Try again later :(');
    const data = await response.json();
    return data;
  } catch (error) {
    toast.error(error.message);
  }
}

export default fetchFormQuery;
