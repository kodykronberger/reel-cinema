import { useState, useEffect } from 'react';
import { useFetchAllMovies } from '../../../rest';
import './Home.scss';
import CardMovie from 'components/common/CardMovie';
import GenreButton from 'components/common/GenreButton';
import { useHistory } from 'react-router-dom';
import genres from 'constants/genres';

const Home = () => {
  const history = useHistory();
  const { data, loading } = useFetchAllMovies();
  const [topMovieData, setTopMovieData] = useState([]);
  const onBrowseByCategory = category => {
    history.push(`/list?category=${escape(category)}`);
  };
  const onViewDetails = id => {
    history.push(`/details/${id}`);
  };

  useEffect(() => {
    if (!loading && data && data.length) {
      //? The top 5 movies by rating was determined using JavaScript's built in .sort() function. If needed,
      //? we should implement a fast sorting function, such as "insertion sort  ""
      setTopMovieData(
        data.sort((a, b) => b.voteAverage - a.voteAverage).slice(0, 5)
      );
    }
  }, [data, loading]);

  return (
    <div className="home-container">
      <div className="top-five-container pt-4 pb-5 px-5">
        <h2 className="pb-3">
          <span className="home-movies-subtitle">Movies:</span> Top 5
        </h2>
        {loading || !topMovieData ? (
          <p>Loading...</p>
        ) : (
          <div className="d-flex justify-content-between">
            {topMovieData.map(movie => (
              <CardMovie
                showCardBody
                onViewDetails={() => onViewDetails(movie.id)}
                {...movie}
              />
            ))}
          </div>
        )}
      </div>
      <div className="genres-container p-5">
        <h5 className="mb-0">Browse</h5>
        <h2 className="mb-3">by Genre</h2>
        <div className="d-flex justify-content-between">
          {Object.values(genres).map(genre => (
            <GenreButton
              genre={genre}
              onClick={() => onBrowseByCategory(genre)}
            />
          ))}
        </div>
      </div>
      <div className="all-movies-container p-5">
        <h5 className="mb-0">Movies</h5>
        <h2 className="mb-3">Browse All</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="d-flex justify-content-between flex-wrap">
            {data.map(movie => (
              <CardMovie
                onViewDetails={() => onViewDetails(movie.id)}
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
