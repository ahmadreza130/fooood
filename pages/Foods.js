import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import FoodCard from '../components/FoodCard';
import axios from "axios"
import { motion } from "framer-motion"
export const transition = { duration: 0.4, ease: [0.5, 0.13, 0.23, 0.6] }
import Head from 'next/head';

export const getServerSideProps = async () => {

    const { data } = await axios.get('https://pizzland.herokuapp.com/foods/')
    return {
        props: {
            data
        }
    }
}
const variant2 = {
    animate: {
        transition: {
            straggerChildren: 0.1
        }
    }
}
const Foods = ({ data }) => {
    return (
        <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={transition} className=" container-lg ">
           <Head>
                <title>Foods</title>
                <link href="/manifest.json" rel="manifest" />
            </Head>
            <div className="row justify-content-center mt-2 mt-lg-5">
                {data.map(food => <FoodCard key={food._id} food={food} />)}
            </div>

        </motion.div>
    )
}

export default Foods
