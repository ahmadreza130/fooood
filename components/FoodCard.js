import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import Link from "next/link"

export const transition = { duration: 0.3, ease: [0.5, 0.13, 0.23, 0.6] }


function FoodCard({ food }) {
  return (

    <Link href={`/foodPages/${food._id}`} >
      <Card className=" m-0  mx-md-3  border-0   mx-md-1 p-0 my-3  col-6  col-md-4  col-lg-3 overflow-hidden ">
        <Card.Img className="  col-12" src={food.pic} />
        <hr />
        <div className=' text-center m-0 p-0 col-12 row '>
          <p className="  text-md-start m-0 p-0 col">{food.name}</p>
          <p className="col m-0 p-0  text-md-end">{food.price}$</p>
        </div>
      </Card>
    </Link>

  );
}

export default FoodCard
