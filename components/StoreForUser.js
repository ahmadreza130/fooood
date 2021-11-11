import React, { createContext, useState, useEffect } from 'react'

export const userContext = createContext()

const StoreForUser = React.memo(({ children }) => {


    let y = []
    if (typeof window !== 'undefined') {
        y = JSON.parse(localStorage.getItem('user'))
    }
    const [user, setUser] = useState(y !== "undefined" && y || {})
    useEffect(async () => {
        localStorage.setItem("user", JSON.stringify(user))

    }, [user])
    return (
        <userContext.Provider value={[user, setUser]}>
            {children}
        </userContext.Provider>
    )
})

export default StoreForUser
