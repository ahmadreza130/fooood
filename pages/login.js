import React, { useState, useContext } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"
import { Form, FormControl, Button } from "react-bootstrap"
import { userContext } from "../components/StoreForUser"
import router, { useRouter } from "next/router"
import { motion } from "framer-motion"
import { transition } from "./Foods"
import Link from "next/link"
import Head from "next/head"

const Login = () => {
    const router = useRouter()
    const [list, setList] = useState({
        email: "",
        password: ""
    })
    const [user, setUser] = useContext(userContext)

    const loginReq = async () => {
        if (list.email && list.password) {
            try {
                const res = await axios.post('https://pizzland.herokuapp.com/user/login', {
                    email: `${list.email}`,
                    password: `${list.password}`
                })
                setUser(res.data)
                router.push("/")


            } catch (err) {
                alert("wrong email or password")
            }
        } else {
            alert('fill all boxes')
        }
    }

    return (
        <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={transition} className="container my-5">
            <Head>
                <title>Login</title>
                <link href="/manifest.json" rel="manifest" />
            </Head>
            <Form className=" p-5 border container  my-5 text-center col-12 col-sm-8 col-md-6 col-lg-5  col-xl-4  ">
                <Form.Label>LOGIN</Form.Label>
                <br />
                <FormControl className="inputfocus shadow-none" onChange={e => setList({ ...list, email: e.target.value })} type="email" placeholder="Email..." />
                <br />
                <FormControl className="inputfocus  shadow-none" onChange={e => setList({ ...list, password: e.target.value })} type="password" placeholder="Password" />
                <br />
                <Button className="btn-dark col-12 shadow-none" onClick={loginReq} >Login</Button>
                <text className=" mt-5 text-muted ">dont have an account?<Link href="/register">sign up!</Link></text>
            </Form>

        </motion.div>
    )
}

export default Login
