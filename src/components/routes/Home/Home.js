import { useState, useEffect } from 'react';
import { useFetchAllMovies } from '../../../rest';
import './Home.scss';
import CardMovie from 'components/common/CardMovie';
import GenreButton from 'components/common/GenreButton';
import { useHistory } from 'react-router-dom';
import genres from 'constants/genres';
import Breadcrumb from 'components/common/Breadcrumb';
import movies from 'constants/movies';
import SortDropdown from 'components/common/SortDropdown';
import { SRLWrapper } from 'simple-react-lightbox';

const Home = () => {
  const history = useHistory();
  const { data, loading } = useFetchAllMovies();
  const [topMovieData, setTopMovieData] = useState([]);
  const [currentSort, setCurrentSort] = useState(null);

  useEffect(() => {
    if (!loading && data && data.length) {
      //? The top 5 movies by rating was determined using JavaScript's built in .sort() function. If needed,
      //? we should implement a fast sorting function, such as "insertion sort"
      //? Also, a movie needs to have *at least* 100 votes in order to be considered "top"
      setTopMovieData(
        data
          .filter(a => a.voteCount > movies.minimumTopMovieVoteCount)
          .sort((a, b) => b.voteAverage - a.voteAverage)
          .slice(0, 5)
      );
    }
  }, [data, loading]);

  let sortedData = currentSort ? data?.sort(currentSort.compareFn) : data;

  return (
    <div className="home-container">
      <div className="top-five-container pt-4 pb-5 px-5">
        <Breadcrumb subtitle="Top 5" />
        {loading || !topMovieData ? (
          <p>Loading...</p>
        ) : (
          <SRLWrapper>
            <div className="d-flex justify-content-between">
              {topMovieData.map((movie, idx) => (
                <CardMovie
                  key={idx}
                  showCardBody
                  onViewDetails={() => history.push(`/details/${movie.id}`)}
                  {...movie}
                />
              ))}
            </div>
          </SRLWrapper>
        )}
      </div>
      <div className="genres-container p-5">
        <h5 className="mb-0">Browse</h5>
        <h2 className="mb-3">by Genre</h2>
        <div className="d-flex justify-content-between">
          {Object.values(genres).map((genre, idx) => (
            <GenreButton
              key={idx}
              genre={genre}
              onClick={() => history.push(`/list?category=${escape(genre)}`)}
            />
          ))}
        </div>
      </div>
      <div className="all-movies-container p-5">
        <div className="d-inline-block">
          <h5 className="mb-0">Movies</h5>
          <h2 className="mb-3">Browse All</h2>
        </div>
        <SortDropdown
          label={currentSort?.name}
          onChange={sort => setCurrentSort(sort)}
        />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="d-flex justify-content-between flex-wrap">
            {sortedData.map((movie, idx) => (
              <CardMovie
                key={idx}
                onViewDetails={() => history.push(`/details/${movie.id}`)}
                {...movie}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
