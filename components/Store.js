import React ,{ createContext, useState } from 'react'

const Store = ({ children }) => {
    const [cart, setCart] = useState([])
    const myContext = createContext()
    return (
        <myContext.Provider value={[cart, setCart]}>
            {children}
        </myContext.Provider>
    )
}

export default Store
