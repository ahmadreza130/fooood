import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormControl, Button, FormGroup } from "react-bootstrap"
import axios from "axios"
import PasswordStrengthBar from "react-password-strength-bar"
import Link from "next/link"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import { transition } from '../components/FoodCard';
import Head from "next/head"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"

const emailReg = /[A-Za-z0-9_\.\-]+[@][a-z]+[\.][a-z]/
const Register = () => {
    const router = useRouter()
    const [passScore, setPassScore] = useState(0)
    const [registered, setRegistered] = useState(false)
    const [isPass, setIsPass] = useState(true)
    const [registerForm, setRegisterForm] = useState({
        name: "",
        email: "",
        passWord: "",
        passWord2: "",
        address: ""
    })
    const registerReq = async () => {

        if (registerForm.name && registerForm.email && registerForm.passWord.length && registerForm.address && registerForm.passWord === registerForm.passWord2 && emailReg.test(registerForm.email) && passScore > 1) {
            try {
                const { data } = await axios.post('https://pizzland.herokuapp.com/user/register', {
                    name: `${registerForm.name}`,
                    email: `${registerForm.email}`,
                    password: `${registerForm.passWord}`,
                    address: `${registerForm.address}`
                })
                router.push('/login')

            } catch (err) {
                alert("this email is already registered")
            }

        } else {
            if (!registerForm.name || !registerForm.email || !registerForm.passWord.length || !registerForm.address) { alert("fill all fields") } else {
                if (!emailReg.test(registerForm.email)) {
                    alert("please write a correct email")
                } else {
                    if (passScore <= 1) {
                        alert("weak passWord")
                    } else {

                        if (registerForm.passWord !== registerForm.passWord2) {
                            alert("passWord confirmation in not correct")
                        }
                    }
                }
            }
        }
    }
    const EnterPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            registerReq()
        }
    }

    return (
        <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={transition} className="container my-2 my-md-5">
            <Head>
                <title>sign Up</title>
                <link href="/manifest.json" rel="manifest" />
            </Head>
            <div className=" p-5 border container  text-center col-12 col-sm-8 col-md-6 col-lg-5  col-xl-4  ">
                <Form.Label>Sign Up</Form.Label>
                <br />
                <FormControl className=" shadow-none inputfocus"
                    onChange={e => { setRegisterForm({ ...registerForm, name: e.target.value }) }} type="text" placeholder="Name..." />
                <br />
                <FormControl className=" shadow-none inputfocus" type="email" onChange={e => { setRegisterForm({ ...registerForm, email: e.target.value }) }} placeholder="Email..." />
                <br />
                <FormControl className=" shadow-none inputfocus" onChange={e => { setRegisterForm({ ...registerForm, passWord: e.target.value }) }} type={isPass ? "password" : "text"} placeholder="Password" />
                <Button className=" bg-white m-0 p-0 border-0 shadow-none text-dark" onClick={() => setIsPass(!isPass)}>
                    {isPass ? <AiFillEyeInvisible className="eyesize" /> : <AiFillEye className="eyesize" />}
                </Button>
                <PasswordStrengthBar onChangeScore={s => setPassScore(s)} password={registerForm.passWord} />

                <FormControl className=" shadow-none inputfocus" onChange={e => { setRegisterForm({ ...registerForm, passWord2: e.target.value }) }} type={isPass ? "password" : "text"} placeholder="Password confirmation" />

                <br />
                <FormControl className=" shadow-none inputfocus" onKeyPress={EnterPress}
                    onChange={e => { setRegisterForm({ ...registerForm, address: e.target.value }) }} type="text" placeholder="Address" />
                <br />

                <Button onClick={registerReq} className="col-12  btn-dark  shadow-none">Register</Button>
                <text className=" mt-5 text-muted">already have an account?<Link href="/login">log in!</Link></text>


            </div>
        </motion.div>
    )
}

export default Register