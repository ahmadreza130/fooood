import React, { useState, useContext } from 'react'
import { Card, Button } from 'react-bootstrap';
import CartCard from '../components/CartCard';
import "bootstrap/dist/css/bootstrap.min.css";
import { myContext } from "../components/Store"
import { userContext } from "../components/StoreForUser"
import axios from "axios"
import { motion } from "framer-motion"
import { transition } from "./Foods"
import Head from "next/head"
import { useAlert } from "react-alert"
const Cart = () => {
   
    const Alert = useAlert()
    const [orders, setOrders] = useContext(myContext)
    const [user, setUser] = useContext(userContext)

    let totalPrice = 0
    orders.map(o => { totalPrice = totalPrice + (o.food.price) * (o.count) })

    const orderReq = async () => {

        if (user.name) {
            try {

                const res = await axios.put(`https://pizzland.herokuapp.com/user/addToCurrunOrder/${user._id}`, {
                    order: orders
                }, { headers: { token: user.accessToken } })
                Alert.success(res.data)
                setOrders([])
                setInterval(() => {
                    setUser({ ...user, curruntOrder: [...user.curruntOrder, orders] })
                });

            } catch (err) {
                Alert.error("plese log in to order")
            }
        } else {
            Alert.error('please log in for order food')
        }
    }
    return (
        <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={transition}>
            <Head>
                <title>Cart</title>
                <link href="/manifest.json" rel="manifest" />
            </Head>
            <div>
                {orders.map(o => <CartCard key={o.food._id} food={o.food} />)}
            </div>
            <Card id="factor" className=" col-lg-4 col-sm-12  col-md-6 container text-center  ">
                <Card.Title>BILL</Card.Title>
                <Card.Body>
                    {!orders.length && <p className=" text-muted">youre cart is empty</p>}
                    {orders.map(o => <Card.Text key={o.food.name} >{o.count} x {o.food?.name}:{(o.food?.price) * (o.count)}$</Card.Text>)}
                </Card.Body>
                <Card.Footer className=" text-danger">totalPrice:{totalPrice}$ &nbsp;&nbsp;&nbsp;<Button onClick={orderReq} disabled={orders.length?false:true} className=" btn-dark">order</Button></Card.Footer>
            </Card>

        </motion.div>
    )
}

export default Cart
