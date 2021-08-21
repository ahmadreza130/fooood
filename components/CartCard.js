import React from 'react'
import { Card, Button, FormControl } from "react-bootstrap"


const CartCard = ({food}) => {
    return (
 
        <div id="parent" className=" row  col-lg-7">
            <Card className="  rounded-3  col-6  m-0 p-0 border-0   " >
                <Card.Img className=" " src={food.pic} />
            </Card>
            <Card className="  col-6 border-0  my-md-5  text-center ">
                <Card.Body>
                    <Card.Text className="headfont"  >{food.name}</Card.Text>
                    <Card.Text className="textfont" >PRICE:{food.price}$&nbsp;&nbsp;RATE:{food.rate}/5 </Card.Text>
                    <div className="row  justify-content-center">
                        <Button className=" col-2 p-0 m-0  btn-dark">-</Button>
                        <FormControl className="  p-0 m-0 inputt text-center" value="5"/>
                        <Button className=" col-2 p-0 m-0 btn-dark  ">+</Button>
                    </div>

                </Card.Body>
            </Card>
           
        </div>

    )
}

export default CartCard
