import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import Link from "next/link"
import Skeleton from "react-loading-skeleton";

export const transition = { duration: 0.3, ease: [0.5, 0.13, 0.23, 0.6] }


function SkeletonCard() {
  return (

    
      <Card className=" m-0 text-center  mx-md-3  border-0   mx-md-1 p-0 my-3  col-6  col-md-4  col-lg-3 overflow-hidden ">
        <Card.Text className=" col-12  container" ><Skeleton circle={true} height={200}width={200} /></Card.Text>
        <hr />
        <div className=' text-center m-0 p-0 col-12 row '>
          <p className="  text-md-start m-0 p-0 col"><Skeleton  /></p>
          <p className="col m-0 p-0  text-md-end"><Skeleton  /></p>
        </div>
      </Card>
 

  );
}

export default SkeletonCard
