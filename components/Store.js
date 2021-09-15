import React, { createContext, useState, useEffect } from 'react'

export const myContext = createContext()


const Store = React.memo(({ children }) => {
    let x = []

    if (typeof window !== 'undefined') {
        x = (typeof window !== "undefined") && JSON.parse(localStorage.getItem('cart'))


    }
    const [cart, setCart] = useState(x || [])

    useEffect(async () => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])


    return (

        <myContext.Provider value={[cart, setCart]}>
            {children}
        </myContext.Provider>

    )
})

export default Store
