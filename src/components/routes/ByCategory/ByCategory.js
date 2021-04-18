import { useParams } from 'react-router-dom';
import './ByCategory.scss';

const ByCategory = () => {
  const { category } = useParams();
  return <h1>Categories: {category}</h1>;
};

export default ByCategory;
