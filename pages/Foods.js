import React, { useRef, useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import FoodCard from '../components/FoodCard';
import axios from "axios"
import { motion } from "framer-motion"
export const transition = { duration: 0.4, ease: [0.5, 0.13, 0.23, 0.6] }
import Head from 'next/head';
import { Form, Button, FormControl, Pagination } from "react-bootstrap"
import SkeletonCard from "../components/SkeletonForFoodCard"
import { uuid } from 'uuidv4';
const variant2 = {
    animate: {
        transition: {
            straggerChildren: 0.1
        }
    }
}
const Foods = () => {

    const searchRef = useRef("")
    const [result, setResult] = useState([])
    const [firstRender, setFirstRender] = useState(true)
    const [skip, setSkip] = useState(0)
    if (firstRender) {

        axios.post('https://pizzland.herokuapp.com/foods/', { searched: `${searchRef.current.value}`, skip: skip })
            .then(res => {
                setResult(res.data);
                setFirstRender(false);
            })
    }

    const changePage = e => {
        setSkip((e.target.value) * 6)
        setFirstRender(true)

    }
    const skeleton = [1, 1, 1, 1, 1, 1]
    return (
        <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={transition} className=" container-lg ">
            <Head>
                <title>Foods</title>
                <link href="/manifest.json" rel="manifest" />
            </Head>
            <Form className=" d-flex col-lg-3  col-sm-6 col-md-4 mt-5 ">
                <FormControl onChange={() => setFirstRender(true)} ref={searchRef} className=" shadow-none inputfocus" placeholder="serach for type or name..."></FormControl>
            </Form>
            {
                result.length ?
                    <div className="row justify-content-center mt-2 mt-lg-5">
                        {result.map(food => <FoodCard key={food._id} food={food} />)}
                    </div>
                    : <div  className="row justify-content-center mt-2 mt-lg-5">
                        {skeleton.map(s => <SkeletonCard key={uuid()} />)}
                        </div>
            }


            <Pagination className=" justify-content-center">
                <Button className="  btn-dark " value={0} onClick={changePage} >1</Button>
                <Button className="  btn-dark " value={1} onClick={changePage} >2</Button>
            </Pagination>
        </motion.div>
    )
}

export default Foods
