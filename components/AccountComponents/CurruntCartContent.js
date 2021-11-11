import React from 'react'
import { Card } from "react-bootstrap"
import { ThreeDots } from 'react-loading-icons'
import Link from "next/link"
import {uuid} from "uuidv4"
const CurruntCartContent = () => {
    const user = (typeof window !== "undefined") && JSON.parse(localStorage.getItem("user"))
    return (
        <Card className=" col-12  col-sm-6 col-md-5 col-lg-4 col-xl-3 my-sm-5  text-center">
            <Card.Title className=" mt-5">
                <h3>youre currunt orders</h3>
                <hr />
            </Card.Title>
            <Card.Body>
                {user.curruntOrder?.length ? user.curruntOrder?.map(order => order.map(o => <p key={uuid()}>{o.count} x {o.food.name}</p>)) : "currunt order list is empty"}
            </Card.Body>
            <Card.Footer className=" bg-dark" >
                {user.curruntOrder?.length ?<text className=" text-danger">Cooking&nbsp;<ThreeDots className=" col-1" /></text>:<Link href="/Foods"><a className=" link-danger text-decoration-none">Order?</a></Link>}
            </Card.Footer>
        </Card>
    )
}

export default CurruntCartContent
