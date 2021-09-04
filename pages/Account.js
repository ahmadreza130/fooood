import React, { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import { Button, FormControl } from 'react-bootstrap'
import { userContext } from '../components/StoreForUser'
import { transition } from '../components/FoodCard'
import Link from 'next/link'
import axios from 'axios'
import Head from "next/head"

const Account = () => {

    const [user, setUser] = useContext(userContext)
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
                alert('updated')
                setUser({ ...user, name: form.name, email: form.email, address: form.address })
            } catch {
                alert('does not updated')
            }
        } else {
            if (form.passWord !== form.passWord2) {
                alert("wrong password confirmation")
            } else {
                try {
                    await axios.put(`https://pizzland.herokuapp.com/user/update/${user._id}`, {
                        email: form.email,
                        name: form.name,
                        address: form.address
                    }, { headers: { token: user.accessToken } })
                    alert('updated')
                    setUser({ ...user, name: form.name, email: form.email, address: form.address })
                } catch(err) {
                    alert('does not updated')
                }
            }

        }

    }
    return (

        <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={transition} className="container my-2 my-md-5">
             <Head>
                <title>Account</title>
                <link href="/manifest.json" rel="manifest" />
            </Head>
            <div className=" p-5 border container  text-center col-12 col-sm-8 col-md-6 col-lg-5  col-xl-4  ">
                <FormControl value={form.name} className=" shadow-none inputfocus"
                    onChange={e => { setForm({ ...form, name: e.target.value }) }} type="text" placeholder="Name..." />
                <br />
                <FormControl value={form.email} className=" shadow-none inputfocus" type="email" onChange={e => { setForm({ ...form, email: e.target.value }) }} placeholder="Email..." />
                <br />
                <FormControl value={form.passWord} className=" shadow-none inputfocus" type="password" onChange={e => { setForm({ ...form, passWord: e.target.value }) }} placeholder="pass..." />
                <br />
                <FormControl value={form.passWord2} className=" shadow-none inputfocus" type="password" onChange={e => { setForm({ ...form, passWord2: e.target.value }) }} placeholder="passConfirm..." />
                <br />

                <FormControl value={form.address} className=" shadow-none inputfocus"
                    onChange={e => { setForm({ ...form, address: e.target.value }) }} type="text" placeholder="Address" />
                <br />

                <Button onClick={updateUser} className="col-12  btn-dark  shadow-none">Update</Button>
            </div>
        </motion.div>

    )
}

export default Account
