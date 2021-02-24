import React from 'react';
import { Card } from 'react-bootstrap';

const CardBack = ({ name, description, img }) => (
  <Card>
    <Card.Img variant="top" src={ img } alt={ name } />
    <Card.Body>
      <Card.Title>{ name }</Card.Title>
      <Card.Text>{ description }</Card.Text>
    </Card.Body>
  </Card>
)

export default CardBack;