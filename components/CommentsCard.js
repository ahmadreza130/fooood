import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const CommentsCard = React.memo(({ comment }) => {
    return (
        <Card className=" col-md-6 my-2 rounded container col-lg-4   col-sm-12 ">
            <Card.Title> {comment.name}:</Card.Title>
            <Card.Body>
                <Card.Text className=" ms-5">{comment.comment}</Card.Text>
            </Card.Body>
            <Card.Footer className=" text-muted">At:{comment.h.month}/{comment.h.day}/{comment.h.year}-{comment.h.hour}:{comment.h.min}</Card.Footer>
        </Card>
    )
})

export default CommentsCard
