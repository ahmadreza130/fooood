import React from 'react'
import { ThreeDots } from 'react-loading-icons'

const Loading = () => {
    return (
        <div className=" loading bg-none text-center">
            <ThreeDots className="loadersvg" />
            <br />
            <text >loading...</text>
        </div>
    )
}

export default Loading
