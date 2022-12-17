import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Card} from "react-bootstrap";

const MovieCard = ({image}) => {

  return (
    <Card className="p-0 overflow-hidden h-100 shadow bg-dark">
        <div className='overflow hidden rounded p-0 '>
        <Card.Img variant="top" src={image}/>
        </div>

    </Card>
  )
}

export default MovieCard;