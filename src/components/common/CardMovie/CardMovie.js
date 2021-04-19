import { useState } from 'react';
import './CardMovie.scss';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col
} from 'reactstrap';
import RatingLabel from '../RatingLabel';

const CardMovie = ({
  id,
  order,
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
        } ${isHovered ? 'card-movie-shadow' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ order: order }}
      >
        <CardImg
          top
          width="100%"
          src={posterPath}
          alt={originalTitle}
          className={!isHovered ? 'card-movie-shadow' : ''}
        />
        {showCardBody && (
          <CardBody>
            <CardTitle>
              <Row>
                <Col md="8">
                  <p className="card-movie-title">{originalTitle}</p>
                </Col>
                <Col md="4">
                  <RatingLabel rating={voteAverage} />
                </Col>
              </Row>
            </CardTitle>
            <CardSubtitle tag="p" className="mb-2 text-muted">
              {genres.join(', ')}
            </CardSubtitle>
            {isHovered && (
              <Button className="w-100 align-center" onClick={onViewDetails}>
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
