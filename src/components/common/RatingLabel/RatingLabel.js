import './RatingLabel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const RatingLabel = ({ rating, showDenominator = false }) => {
  return (
    <span
      className={`rating-star ${
        showDenominator ? 'rating-star-with-denominator' : ''
      } float-right`}
    >
      <FontAwesomeIcon className="mr-1" icon={faStar} />
      {rating}
      {showDenominator && <span className="rating-denominator ml-1">/10</span>}
    </span>
  );
};

export default RatingLabel;
