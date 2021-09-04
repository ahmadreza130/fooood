import React, { useContext, useEffect } from 'react'
import { Card, Button, FormControl } from "react-bootstrap"
import { myContext } from "./Store"
import { MdDeleteForever } from "react-icons/md"

const InnerCartCard = React.memo(({ foodpic }) => {
    console.log('pic')
    return (
        <Card className="  rounded-3  col-6  m-0 p-0 border-0   " >
            <Card.Img className=" " src={foodpic} />
        </Card>
    )

})

const CartCard = React.memo(({ food }) => {
    const [orders, setOrders] = useContext(myContext)
    console.log(food.name)
    let ordr = orders
    const index = ordr.findIndex((o) => o.food._id === food._id)
    const or = ordr.filter(o => o.food._id === food._id)

    const increase = async () => {

        ordr = await ordr.filter(o => o.food._id !== food._id)
        ordr.splice(index, 0, { food: or[0].food, count: or[0].count + 1 })

        setOrders(ordr)
    }

    const reduce = async () => {

        ordr = await ordr.filter(o => o.food._id !== food._id)
        ordr.splice(index, 0, { food: or[0].food, count: or[0].count - 1 })
        setOrders(ordr)
    }

    const deleteFromCart = () => {
        setOrders(ordr.filter(o => o.food._id !== food._id))
    }


    return (

        <div id="parent" className=" row  col-lg-7">
            <InnerCartCard foodpic={food.pic} />
            <Card className="  col-6 border-0  my-md-5  text-center ">
                <Card.Body>
                    <Card.Text className="headfont"  >{food.name}</Card.Text>
                    <Card.Text className="textfont" >PRICE:{food.price}$&nbsp;&nbsp; </Card.Text>
                    <div className="row  justify-content-center">
                        <Button onClick={deleteFromCart} className=" col-1  me-3 p-0  bg-white shadow-none border-0 text-danger"><MdDeleteForever className=" m-0 p-0 h3" /></Button>
                        <Button onClick={reduce} disabled={or[0].count === 1 ? true : false} className=" col-2 p-0 m-0  btn-danger shadow-none">-</Button>
                        <div className="  p-0 m-0 inputt text-center"  >{or[0].count}</div>
                        <Button onClick={increase} className=" shadow-none col-2 p-0 m-0 btn-dark  ">+</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
})

export default CartCard
