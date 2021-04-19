import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchAllMovies } from '../../../rest';
import { useHistory } from 'react-router-dom';
import './ByCategory.scss';
import CardMovie from 'components/common/CardMovie';
import useQuery from 'hooks/useQuery';

const ByCategory = () => {
  const history = useHistory();
  const { data, loading } = useFetchAllMovies(a => a.genres.includes(category));
  const query = useQuery();
  const category = query.get('category');

  const onViewDetails = id => {
    history.push(`/details/${id}`);
  };

  return (
    <div className="p-5">
      <p className="m-0">Movies</p>
      <h2>Browse All</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="movies-container d-flex justify-content-between flex-wrap">
          {data.map(movie => (
            <CardMovie
              onViewDetails={() => onViewDetails(movie.id)}
              {...movie}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ByCategory;
