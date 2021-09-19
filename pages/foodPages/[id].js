import "bootstrap/dist/css/bootstrap.min.css"
import { Card, Button } from "react-bootstrap"
import CommentsCard from "../../components/CommentsCard";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { myContext } from "../../components/Store";
import { motion } from "framer-motion"
import InnerFoodPagePiC from "../../components/FoodpageComponents/InnerFoodPagePiC"
import TextArea from "../../components/FoodpageComponents/TextArea"
import Head from "next/head"

const FoodPage = ({ data }) => {
    const [orders, setOrders] = useContext(myContext)
    const [reRender, setReRender] = useState(false)
    const isOrder = orders.filter(o => o.food?._id === data._id).length

    const addToCart = () => {

        if (isOrder) {
            setOrders(orders.filter(or => or.food?._id !== data._id))
        } else {
            setOrders([...orders, { food: data, count: 1 }])
        }

    }
    const variant = {
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 0.4, ease: [0.6, 0.05, 0.01, 0.99] } }
    }
    const variant2 = {
        animate: {
            transition: {
                straggerChildren: 0.1
            }
        }
    }
    return (
        <motion.div className="mt-4 " exit={{ opacity: 0 }} animate="animate" initial="initial" >
            <Head>
                <title>{data.name}</title>
                <link href="/manifest.json" rel="manifest" />
            </Head>
            <motion.div variants={variant2} className=" row   text-center">
                <InnerFoodPagePiC dataPic={data.pic} />
                <Card className=" mt-md-5 border-0 p-0 col-sm-12 col-md-6 justify-content-center">
                    <motion.div variants={variant}>
                        <Card.Title>{data.name} PIZZA</Card.Title>
                    </motion.div>

                    <Card.Body className=" p-0  text-center " >
                        <motion.div variants={variant}>
                            <Card.Text >GROUP&nbsp;:&nbsp;{data.type}</Card.Text>
                            <Card.Text >PRICE&nbsp;:&nbsp;{data.price}&nbsp;&nbsp;&nbsp;</Card.Text>
                            <Card.Text >MADE-FROM&nbsp;:&nbsp;{data.madeFrom}</Card.Text>
                            <Button id="x" onClick={addToCart}
                                className=" border-0 td shadow-none col-sm-12 col-lg-7 mt-2 "  >
                                {isOrder ? 'remove from cart' : 'add to cart'}
                            </Button>
                        </motion.div>
                    </Card.Body>
                </Card>
            </motion.div>
            <hr style={{ color: "black" }} className=" w-50 container " />
            <div className=" mt-5" >
                {data.comments.map(c => <CommentsCard  key={c.commenter} comment={c} dataId={data._id} />)}
            </div>
            <TextArea dataId={data._id} />

            <style jsx global
            >{`
                      #x{
                           background:${isOrder ? 'red' : 'black'};
                            transition-duration: 0.2s;
                       }   
                     
                           `}
            </style>
        </motion.div >
    )
}
export const getServerSideProps = async (context) => {
    const { data } = await axios.get(`https://pizzland.herokuapp.com/foods/${context.params.id}`)
    return {
        props: {
            data
        }
    }
}


export default React.memo(FoodPage)
