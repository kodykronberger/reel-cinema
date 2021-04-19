import { useParams } from 'react-router-dom';
import { useFetchMovie } from 'rest';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import Breadcrumb from 'components/common/Breadcrumb';
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';
import RatingLabel from 'components/common/RatingLabel';
import './Details.scss';
import DetailsCastItem from './DetailsCastItem';

const Details = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data, loading } = useFetchMovie(id);

  return (
    <div className="p-5">
      <Breadcrumb
        showBackButton
        onBack={() => history.push(`/`)}
        subtitle="Top 5"
      />
      {loading || !data ? (
        <p>Loading...</p>
      ) : (
        <div className="details-container">
          <Row className="mb-5">
            <Col md="3">
              <img className="details-poster" src={data.posterPath} />
            </Col>
            <Col md="9" className="pt-5">
              <div className="row col-md-12 mb-3">
                <RatingLabel showDenominator rating={data.voteAverage} />
              </div>
              <div className="mb-3">
                <h1>
                  {data.originalTitle}{' '}
                  <span className="details-year">
                    ({moment(data.releaseDate).year()})
                  </span>
                </h1>
              </div>
              <div className="mb-5">
                <h5>{data.genres?.join(', ')}</h5>
              </div>
              <div className="mb-3">
                <p className="font-weight-bold">
                  Director: {data.director?.name}
                </p>
              </div>
              <div className="mb-5">
                <p className="details-overview">{data.overview}</p>
              </div>
            </Col>
          </Row>
          <h2 className="mb-3">Cast</h2>
          <div className="details-cast-container d-flex justify-content-between flex-wrap">
            {data.cast?.map((member, idx) => (
              <DetailsCastItem key={idx} {...member} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
