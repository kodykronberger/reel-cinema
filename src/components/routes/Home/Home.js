import { useFetchAllMovies } from '../../../rest';
import './Home.scss';
import CardMovie from 'components/common/CardMovie';
import GenreButton from 'components/common/GenreButton';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  const { data, loading } = useFetchAllMovies();
  const onBrowseByCategory = category => {
    history.push(`/list?category=${escape(category)}`);
  };
  const onViewDetails = id => {
    history.push(`/details/${id}`);
  };

  const topFiveData = data.slice(0, 5); // TODO

  return (
    <div className="home-container">
      <div className="py-5">
        <h2>Movies: Top 5</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="movies-container d-flex justify-content-between">
            {topFiveData.map(movie => (
              <CardMovie
                showCardBody
                onViewDetails={() => onViewDetails(movie.id)}
                {...movie}
              />
            ))}
          </div>
        )}
      </div>
      <div className="py-5">
        <p className="m-0">Browse</p>
        <h2>by Genre</h2>
        <div className="genres-container d-flex justify-content-between">
          <GenreButton
            genre="Comedy"
            onClick={() => onBrowseByCategory('Comedy')}
          />
          <GenreButton
            genre="Action"
            onClick={() => onBrowseByCategory('Action')}
          />
          <GenreButton
            genre="Drama"
            onClick={() => onBrowseByCategory('Drama')}
          />
          <GenreButton
            genre="True Crime"
            onClick={() => onBrowseByCategory('True Crime')}
          />
        </div>
      </div>
      <div className="py-5">
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
    </div>
  );
};

export default Home;
