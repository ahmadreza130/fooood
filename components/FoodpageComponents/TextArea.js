import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"
const TextArea = ({dataId}) => {
    const [textarea, setTextarea] = useState("")
   
    const user = typeof window !== 'undefined' && JSON.parse(localStorage.getItem("user"))

    const saveText = async (e) => {
        if (e.key === "Enter") {
            if (!user._id) {
                alert('plase login and try again')
            } else {
                try {
                    const res = await axios.put(`https://pizzland.herokuapp.com/foods/comment/${dataId}`, { comment: e.target.value }, { headers: { token: user.accessToken } })
                    alert(res.data)
                } catch (err) {
                    alert(err)
                }
            }
        } else {
            setTextarea(e.target.value)
        }
    }
    return (
        <div className=" col-lg-4  col-md-6  container">
            <textarea placeholder="write some comments and press ok"
                onKeyPress={saveText} className="container " ></textarea>
        </div>
    )
}

export default React.memo(TextArea)
