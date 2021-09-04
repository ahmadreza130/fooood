import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Card, Button } from "react-bootstrap" 
import {motion} from "framer-motion"
const InnerFoodPagePiC = ({ dataPic }) => {
    return (
        <Card className=" my-auto  col-sm-12  p-0  border-0 col-md-6" >
            <motion.div initial={{ opacity: 0, x: -200 }} transition={{ delay: 0.1 }} exit={{ x: -200 }} animate={{ opacity: 1, x: 0 }}>
                <Card.Img src={dataPic} />
            </motion.div>
        </Card>)
}
export default React.memo(InnerFoodPagePiC)