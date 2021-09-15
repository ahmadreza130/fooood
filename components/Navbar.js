import React, { useState, useContext } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Form, Nav, NavDropdown, FormControl, Button, Container } from "react-bootstrap"
import Link from "next/link"
import { useRouter } from "next/router"
import { IoMdClose, IoMdReorder } from "react-icons/io"
import { myContext } from './Store';
import brand from "../assets/pictures/android-36x36.png"
import { MdLocalHospital } from 'react-icons/md';

const NavBrandPic = React.memo(() => {
    return (
        <Navbar.Brand className=" position-absolute brand "><Link href="/"><a className=" position-absolute brand text-decoration-none text-dark"><img src={brand.src} /></a></Link></Navbar.Brand>
    )
})

const InnerNav = React.memo(({ isOpen, setIsOpen }) => {
    const router = useRouter()
    const width = (typeof window !== "undefined") ? window.innerWidth : false
    const user =  (typeof window !== "undefined")&&JSON.parse(localStorage.getItem("user"))

    const changeIsOpen = () => {
        if (width < 992) {
            setIsOpen(!isOpen)
        }
    }
    const logoutfunction = () => {
        localStorage.setItem("user", JSON.stringify({}))
        localStorage.setItem("cart", JSON.stringify([]))
        changeIsOpen()
        router.push('/')
    }
    return (
        <>
            <Navbar.Toggle onClick={() => setIsOpen(!isOpen)} style={{ border: 'none!important' }} className=" tggl ">{isOpen ? <IoMdClose /> : <IoMdReorder />}</Navbar.Toggle>
            <Navbar.Collapse className=" accordion-collapse" >
                <Nav className="me-auto ms-2">
                    <Link href="/Foods"><a onClick={changeIsOpen} className=" nav-link link-dark">Foods</a></Link>
                    <Link href="/register"><a onClick={changeIsOpen} className=" nav-link link-dark">Sign Up</a></Link>
                    <NavDropdown title="Account" id="basic-nav-dropdown">
                        <Link href="/login"><a onClick={changeIsOpen} className="  dropdown-item ">Login</a></Link>
                        <Link href="/account"><a onClick={changeIsOpen}
                            className={` dropdown-item ${!user?.name&&'disabled'}`}>Account</a></Link>
                        <a onClick={logoutfunction} className="  dropdown-item text-danger">LogOut</a>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <NavBrandPic />
        </>)
})

const InnerNavTotal = React.memo(({ isOpen, setIsOpen, cartLength }) => {

    return (
        <Navbar bg="none" expand="lg" expanded={isOpen}>
            <InnerNav isOpen={isOpen} setIsOpen={setIsOpen} />
            <Link href="/Cart"><a onClick={() => setIsOpen(false)} className=" position-absolute  lnk  text-decoration-none text-dark">{cartLength}</a></Link>
        </Navbar>
    )
})

const NavBar = React.memo(() => {
    const router = useRouter()
    const [cart, setCart] = useContext(myContext)
    const [isOpen, setIsOpen] = useState(false)


    return (
        <>
            <InnerNavTotal isOpen={isOpen} setIsOpen={setIsOpen} cartLength={cart.length} />
        </>
    )
})

export default NavBar
