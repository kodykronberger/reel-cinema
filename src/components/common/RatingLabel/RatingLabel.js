import './RatingLabel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const RatingLabel = ({ rating }) => {
  return (
    <span className="rating-star float-right">
      <FontAwesomeIcon className="mr-1" icon={faStar} />
      {rating}
    </span>
  );
};

export default RatingLabel;
