import React from 'react'
import { Card,Button } from 'react-bootstrap';
import CartCard from '../components/CartCard';
import "bootstrap/dist/css/bootstrap.min.css";
const food = {
    id: 1,
    rate: 4,
    type: "Italian",
    name: "MARGARITA",
    pic: "https://media.istockphoto.com/photos/pepperoni-pizza-on-white-picture-id153985988",
    price: 15,
    madeFrom: "ketchap-onion-meat-peperoni",
};
const cart = () => {
    return (
        <div>
            <CartCard food={food} />
            <Card id="factor" className=" col-lg-4 col-sm-12  col-md-6 container text-center  ">
                <Card.Title>BILL</Card.Title>
                <Card.Body>
                    <Card.Text>5xMargarita:75$</Card.Text>
                    <Card.Text>2xpeperoni:30$</Card.Text>
                </Card.Body>
                <Card.Footer className=" text-danger">totalPrice:105$ &nbsp;&nbsp;&nbsp;<Button className=" btn-dark">pay</Button></Card.Footer>
            </Card>
        </div>
    )
}

export default cart
