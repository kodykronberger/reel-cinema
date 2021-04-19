import './Breadcrumb.scss';
import BackArrow from 'assets/img/BackArrow.png';

const Breadcrumb = ({
  subtitle,
  showBackButton = false,
  onBack = () => {}
}) => {
  return (
    <h2
      className={`breadcrumb-container d-inline-block ${
        showBackButton ? 'breadcrumb-container-small' : ''
      } pb-3`}
    >
      {showBackButton && (
        <a className="breadcrumb-back mr-3" onClick={onBack}>
          <img src={BackArrow} />
        </a>
      )}
      <span className="breadcrumb-title">Movies:</span> {subtitle}
    </h2>
  );
};

export default Breadcrumb;
