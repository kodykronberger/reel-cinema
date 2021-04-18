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

const CardMovie = ({
  id,
  originalTitle,
  genres,
  voteAverage,
  posterPath,
  showCardBody = false,
  onViewDetails = () => {}
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Card
        className={`card-movie d-inline-block mb-2 ${
          !showCardBody ? 'card-movie-bodyless' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardImg top width="100%" src={posterPath} alt={originalTitle} />
        {showCardBody && (
          <CardBody>
            <CardTitle tag="h5">{originalTitle}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {genres.join(',')}
            </CardSubtitle>
            {isHovered && (
              <Button className="align-center" onClick={onViewDetails}>
                View Details
              </Button>
            )}
          </CardBody>
        )}

        {!showCardBody && isHovered && (
          <div
            className="card-movie-hover-body d-flex flex-column justify-content-center"
            onClick={onViewDetails}
          >
            <span className="card-movie-hover-body-label">View Details</span>
          </div>
        )}
      </Card>
    </>
  );
};

export default CardMovie;
