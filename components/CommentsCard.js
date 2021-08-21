import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const CommentsCard = ({ comment }) => {
    return (
        <Card className=" col-md-6 my-2 container-lg  col-sm-12">
            <Card.Title> {comment.name}:</Card.Title>
            <Card.Text>{comment.comment}</Card.Text>
        </Card>
    )
}

export default CommentsCard
