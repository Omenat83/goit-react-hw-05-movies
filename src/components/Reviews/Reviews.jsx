import React, { useEffect, useState } from 'react';
import fetchDetailsSection from 'fetch/filmDetailsSections';
import { useParams } from 'react-router-dom';
import { ReviewsAuthor, ReviewLi } from './Reviews.styled';

const Reviews = () => {
  const [review, setReview] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    async function foo() {
      const filmsReview = await fetchDetailsSection(movieId, 'reviews');
      if (filmsReview.results.length === 0)
        return setReview('We don`t have any reviews for this movie');
      setReview(filmsReview.results);
    }

    foo();
  }, [movieId]);

  return (
    <>
      {typeof review === 'string' && <p>{review}</p>}
      {typeof review !== 'string' && (
        <ul>
          {review.map(({ author, content, id }) => (
            <ReviewLi key={id}>
              <ReviewsAuthor>{author}</ReviewsAuthor>
              <p>{content}</p>
            </ReviewLi>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
