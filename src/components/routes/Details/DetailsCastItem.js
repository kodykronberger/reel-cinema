import './Details.scss';
import { Card, CardImg, CardBody, CardSubtitle, CardTitle } from 'reactstrap';
import Avatar from 'assets/img/Avatar.png';

const DetailsCastItem = ({ profilePath, name, character }) => {
  return (
    <Card className="details-cast-member">
      <CardImg
        top
        width="100%"
        src={profilePath}
        alt={name}
        onError={e => (e.target.src = Avatar)}
      />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle tag="p" className="mb-2 text-muted">
          {character}
        </CardSubtitle>
      </CardBody>
    </Card>
  );
};

export default DetailsCastItem;
