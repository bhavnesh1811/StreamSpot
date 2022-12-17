import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Card} from "react-bootstrap";

const CardWithText = ({image,id}) => {

  return (
    <Card className="p-0 overflow-hidden h-100 shadow bg-dark" key={id}>
        <div key={id} className='overflow hidden rounded p-0 '>
        <Card.Img variant="top" key={id} src={image}/>
        </div>

    </Card>
  )
}

export default CardWithText;