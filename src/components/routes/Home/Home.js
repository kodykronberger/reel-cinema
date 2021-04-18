import { useFetchAllMovies } from '../../../rest';
import './Home.scss';
import CardMovie from 'components/common/CardMovie';

const Home = () => {
  const { data, loading } = useFetchAllMovies();

  const topFiveData = data.slice(0, 5);

  return (
    <div className="home-container">
      <div className="py-5">
        <h2>Movies: Top 5</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="movies-container d-flex justify-content-between">
            {topFiveData.map(movie => (
              <CardMovie {...movie} />
            ))}
          </div>
        )}
      </div>
      <div className="py-5">
        <p className="m-0">Browse</p>
        <h2>by Genre</h2>
      </div>
      <div className="py-5">
        <p className="m-0">Movies</p>
        <h2>Browse All</h2>
      </div>
    </div>
  );
};

export default Home;
