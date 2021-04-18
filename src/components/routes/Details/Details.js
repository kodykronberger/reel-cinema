import { useParams } from 'react-router-dom';
import './Details.scss';

const Details = () => {
  const { movie } = useParams();
  return <h1>Details: {movie}</h1>;
};

export default Details;
