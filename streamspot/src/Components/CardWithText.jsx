import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Card} from "react-bootstrap";

const CardWithText = ({image,Genre,Title,Info}) => {

  return (
    <Card className="p-0 overflow-hidden h-100 shadow bg-dark">
        <div className='overflow hidden rounded p-0 '>
        <Card.Img variant="top" src={image}/>
        <Card.Body style={{height:"170px",color:"lightBlue"}}>
        <Card.Title>{Genre}</Card.Title> 
        <Card.Text>{Title}</Card.Text> 
        <Card.Text>{Info}</Card.Text>
        </Card.Body>
        </div>

    </Card>
  )
}

export default CardWithText;