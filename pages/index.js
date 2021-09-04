import Link from "next/link"
import { motion } from "framer-motion"
import { FaInstagram } from "react-icons/fa"
import pizza22 from "../assets/pictures/pizza22.webp"
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head"


const transition2 = { delay: 0.5, duration: 2, ease: [0.5, 0.13, 0.23, 0.6] }
const transition = { delay: 0.5, duration: 1, ease: [0.5, 0.13, 0.23, 0.6] }
const variant = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { delay: 0.9, duration: 0.4 } },

}
const exit1 = { y: 20, opacity: 0, transition: { duration: 0.4 } }

const variant2 = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { delay: 1, duration: 0.4 } },

}
const variant3 = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { delay: 1.1, duration: 0.4 } },

}
export default function Home() {
  return (

    <motion.div exit={{ opacity: 0 }}  initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Head>
        <title>Home</title>
      </Head>
      <div className="pizzaimg  picloc p-0 shadow">
        <motion.img exit={{ scale: 1 }} initial={{ scale: 1 }} animate={{ scale: 1.2 }} transition={transition2} src={pizza22.src} className=" m-0 p-0  pic" />
      </div>

      <motion.h3 initial="initial" animate="animate" className='welcome text-center'>
        <motion.h3 exit={exit1} variants={variant} >Welcom To PizzaLand</motion.h3>
        <motion.h4 exit={exit1} variants={variant2}>
          <Link href="/Foods"><a className="text-decoration-none text-danger">Order</a></Link>
        </motion.h4>
        <motion.h5 exit={exit1} variants={variant3}>
          Follow Us <Link href="http://instagram.com"><a className=" text-dark"><FaInstagram /> </a></Link>
        </motion.h5>
      </motion.h3>
    </motion.div >

  )
}
