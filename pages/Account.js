import React from 'react'
import ChangeInputs from "../components/AccountComponents/ChangeInputs"
import CurruntCartContent from "../components/AccountComponents/CurruntCartContent"
const Account = () => {
    return (
        <div className="row justify-content-center">
            <ChangeInputs/>
            <CurruntCartContent/>
        </div>
    )
}

export default Account
