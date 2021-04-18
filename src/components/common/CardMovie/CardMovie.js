import { useState } from 'react';
import './CardMovie.scss';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

const CardMovie = ({ originalTitle, genres, voteAverage, posterPath }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="card-movie d-inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardImg top width="100%" src={posterPath} alt={originalTitle} />
      <CardBody>
        <CardTitle tag="h5">{originalTitle}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          {genres.join(',')}
        </CardSubtitle>
        {isHovered && <Button className="align-center">View Details</Button>}
      </CardBody>
    </Card>
  );
};

export default CardMovie;
