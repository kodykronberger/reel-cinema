import { useState } from 'react';
import './GenreButton.scss';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';
import { useHistory } from 'react-router-dom';

const GenreButton = ({ genre, onClick = () => {} }) => {
  return (
    <a
      className="genre-button d-flex flex-column justify-content-center"
      onClick={onClick}
    >
      <span className="genre-button-title ">{genre}</span>
    </a>
  );
};

export default GenreButton;
