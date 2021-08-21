import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import FoodCard from '../components/FoodCard';
import { Form, FormControl, Button, FormCheck, Pagination } from "react-bootstrap"
const food = {
    id: 1,
    rate: 4,
    type: "Italian",
    name: "MARGARITA",
    pic: "https://media.istockphoto.com/photos/pepperoni-pizza-on-white-picture-id153985988",
    price: 15,
    madeFrom: "ketchap-onion-meat-peperoni",
    comments: [{ name: 'ahmad', comment: "very bad" }, { name: 'karim', comment: "very good" }],
};

const Foods = () => {
    return (
        <div className=" container-lg ">
            <div className=" row">
                <Form className="d-flex  col-12 col-sm-5 col-md-3 mt-3  ">
                    <Button className=" me-1 btn-dark" >Search</Button>
                    <FormControl
                        placeholder="Search for name ..."
                        className="mr-5  "
                        aria-label="Search"
                    />
                </Form>
                <select className="form-select mt-3  " style={{ width: '7rem!important' }}>
                    <option selected value="" >all</option>
                    <option value="1">sonati</option>
                    <option value="2">fastfood</option>

                </select>
            </div>
            <div className="row mt-2 mt-lg-5">
                <FoodCard food={food} />
                <FoodCard food={food} />
                <FoodCard food={food} />
                <FoodCard food={food} />
                <FoodCard food={food} />
                <FoodCard food={food} />
                <FoodCard food={food} />
                <FoodCard food={food} />
            </div>
            <Pagination className="container mt-2">
                <Pagination.Item>first</Pagination.Item>
                <Pagination.Item>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item>3</Pagination.Item>
                <Pagination.Item>last</Pagination.Item>
            </Pagination>
        </div>
    )
}

export default Foods
