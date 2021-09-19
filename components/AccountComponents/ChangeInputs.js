import React, { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import { Button, FormControl, FormGroup, FormLabel, Form, Col, Row } from 'react-bootstrap'
import { userContext } from '../StoreForUser'
import { transition } from '../FoodCard'
import axios from 'axios'
import Head from "next/head"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
import { useAlert } from 'react-alert'
const Account = () => {
    
    const Alert = useAlert()
    const [user, setUser] = useContext(userContext)
    const [isPass, setIsPass] = useState(true)
    const [form, setForm] = useState({
        name: `${user.name}`,
        email: `${user.email}`,
        passWord: '',
        passWord2: '',
        address: `${user.address}`
    })
    const updateUser = async () => {
        if ((form.passWord).length && form.passWord === form.passWord2) {
            try {
                await axios.put(`https://pizzland.herokuapp.com/user/update/${user._id}`, {
                    email: form.email,
                    name: form.name,
                    password: form.passWord,
                    address: form.address
                }, { headers: { token: user.accessToken } })
                Alert.success('updated')
                setUser({ ...user, name: form.name, email: form.email, address: form.address })
            } catch {
                Alert.error('does not updated')
            }
        } else {
            if (form.passWord !== form.passWord2) {
                Alert.error("wrong password confirmation")
            } else {
                try {
                    await axios.put(`https://pizzland.herokuapp.com/user/update/${user._id}`, {
                        email: form.email,
                        name: form.name,
                        address: form.address
                    }, { headers: { token: user.accessToken } })
                    Alert.success('updated')
                    setUser({ ...user, name: form.name, email: form.email, address: form.address })
                } catch (err) {
                    Alert.error('does not updated')
                }
            }

        }

    }
    return (
        <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={transition} className="col-12  col-sm-6  col-md-5 col-lg-4 col-xl-3 my-5 ">
            <Head>
                <title>Account</title>
                <link href="/manifest.json" rel="manifest" />
            </Head>

            <div className=" p-5 border   text-center   ">
                <h3>Edit </h3>
                <hr />
                <FormControl value={form.name} className=" shadow-none inputfocus"
                    onChange={e => { setForm({ ...form, name: e.target.value }) }} type="text" placeholder="Name..." />
                <br />
                <FormControl value={form.email} className=" shadow-none inputfocus" type="email" onChange={e => { setForm({ ...form, email: e.target.value }) }} placeholder="Email..." />
                <br />


                <FormControl value={form.passWord} className="  shadow-none inputfocus" type={isPass ? "password" : "text"} onChange={e => { setForm({ ...form, passWord: e.target.value }) }} placeholder="pass..." />
                <Button className=" bg-white m-0 p-0 border-0 shadow-none text-dark" onClick={() => setIsPass(!isPass)}>
                    {isPass ? <AiFillEyeInvisible className="eyesize" /> : <AiFillEye className="eyesize" />}
                </Button>

                <br />

                <FormControl value={form.passWord2} className=" shadow-none inputfocus" type={isPass ? "password" : "text"} onChange={e => { setForm({ ...form, passWord2: e.target.value }) }} placeholder="passConfirm..." />


                <br />

                <FormControl value={form.address} className=" shadow-none inputfocus"
                    onChange={e => { setForm({ ...form, address: e.target.value }) }} type="text" placeholder="Address" />
                <br />

                <Button onClick={updateUser} className=" btn-dark  shadow-none">Update</Button>
            </div>

        </motion.div>

    )
}

export default Account
