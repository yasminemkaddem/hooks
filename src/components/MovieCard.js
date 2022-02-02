import React from "react";
import { Card } from "react-bootstrap";
import StarRatingComponent from 'react-star-rating-component';
import 'bootstrap/dist/css/bootstrap.min.css';

function MovieCard({ title, description, posterUrl, rate }) {
  return (
    <div className="corp ">
      <Card style={{ width: "360px", height:"auto" ,backgroundColor:"white",margin:"15px"}}>
        <Card.Img variant="top" src={posterUrl} style={{ width: "358px", height:"auto" }} />
        <Card.Body >
          <Card.Title style={{ color:"red" ,fontSize:"25px" }}>{title}</Card.Title>
          <Card.Text style={{ color:"black" ,fontSize:"15px", textAlign:"justify" }}>{description}</Card.Text>
          <StarRatingComponent starCount={7} value={rate} starColor={`#00FF00`}/>
        </Card.Body>
      </Card>
    </div>
  );
}
export default MovieCard;