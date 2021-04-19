import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchAllMovies } from '../../../rest';
import { useHistory } from 'react-router-dom';
import './ByCategory.scss';
import CardMovie from 'components/common/CardMovie';
import useQuery from 'hooks/useQuery';
import Breadcrumb from 'components/common/Breadcrumb';

const ByCategory = () => {
  const history = useHistory();
  const { data, loading } = useFetchAllMovies(a => a.genres.includes(category));
  const query = useQuery();
  const category = query.get('category');

  return (
    <div className="p-5">
      <Breadcrumb
        showBackButton
        onBack={() => history.push(`/`)}
        subtitle={category}
      />
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
