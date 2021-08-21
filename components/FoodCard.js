import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import Link from "next/link"

function FoodCard({ food }) {
  return (

    <Link  href={`/foodPages/${food.id}`} >
      <div id="parentinfoodcard" className="row  col-12 col-md-6 m-0 p-0 col-lg-3">
        <Card className=" m-0 p-0 border-0 col-6 text-center col-lg-12">
          <Card.Img src={food.pic} />
          <Card.Text className="headfontfoodcard"  >{food.name}</Card.Text>
        </Card>
        <Card className=" m-0 p-0 border-0  col-6 col-lg-12 text-center  ">

          <Card.Body>
            
           
            <Card.Text className="textfontfoodcard">INGEREDIENTS:<br />{food.madeFrom}</Card.Text>
            <hr/>
            <Card.Text className="textfontfoodcard" >PRICE:{food.price}$<br/>RATE:{food.rate}/5 </Card.Text>

          </Card.Body>
         
        </Card>
      </div>
    </Link>

  );
}

export default FoodCard;
