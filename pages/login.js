import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Form, FormControl,Button } from "react-bootstrap"
const login = () => {
    return (
        <div className="container my-5">
            <Form  className=" p-5 border container  my-5 text-center col-12 col-sm-8 col-md-6 col-lg-5  col-xl-4  ">
                <Form.Label>LOGIN</Form.Label>
                <br/>
                <FormControl type="email"  placeholder="Email..."/>
                <br/>
                <FormControl type="password" placeholder="Password"/>
                <br/>
                <Button className="col-12">Login</Button>
            </Form>
        </div>
    )
}

export default login
