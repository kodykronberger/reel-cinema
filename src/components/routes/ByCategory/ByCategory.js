import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchAllMovies } from '../../../rest';
import { useHistory } from 'react-router-dom';
import './ByCategory.scss';
import CardMovie from 'components/common/CardMovie';
import useQuery from 'hooks/useQuery';
import Breadcrumb from 'components/common/Breadcrumb';
import SortDropdown from 'components/common/SortDropdown';

const ByCategory = () => {
  const [currentSort, setCurrentSort] = useState(null);
  const history = useHistory();
  const { data, loading } = useFetchAllMovies(a => a.genres.includes(category));
  const query = useQuery();
  const category = query.get('category');

  let sortedData = currentSort ? data?.sort(currentSort.compareFn) : data;

  return (
    <div className="p-5">
      <div>
        <Breadcrumb
          showBackButton
          onBack={() => history.push(`/`)}
          subtitle={category}
        />
        <SortDropdown
          label={currentSort?.name}
          onChange={sort => setCurrentSort(sort)}
        />
      </div>
      {loading || !data ? (
        <p>Loading...</p>
      ) : (
        <div className="movies-container d-flex justify-content-between flex-wrap">
          {sortedData.map((movie, idx) => (
            <CardMovie
              key={idx}
              order={idx + 1}
              onViewDetails={() => history.push(`/details/${movie.id}`)}
              {...movie}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ByCategory;
