import { useRouter } from "next/router"
import "bootstrap/dist/css/bootstrap.min.css"
import { Card, Button } from "react-bootstrap"
import CommentsCard from "../../components/CommentsCard";
const food = {
    id: 1,
    rate: 4,
    type: "Italian",
    name: "MARGARITA",
    pic: "https://media.istockphoto.com/photos/pepperoni-pizza-on-white-picture-id153985988",
    price: 15,
    madeFrom: "ketchap-onion-meat-peperoni",
    comments: [{ name: 'ahmad', comment: "very bad" }, { name: 'karim', comment: "very good" }],
};

const foodPage = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <>
            <div className=" row  text-center">
                <Card className="   col-sm-12  border-0 col-md-6" >
                    <Card.Img src={food.pic} />
                </Card>
                <Card className="  border-0 col-sm-12 col-md-6">
                    <Card.Title>{food.name} PIZZA</Card.Title>
                    <Card.Body >
                        <Card.Text >GROUP&nbsp;:&nbsp;{food.type}</Card.Text>
                        <Card.Text >PRICE&nbsp;:&nbsp;{food.price}&nbsp;&nbsp;&nbsp;RATE&nbsp;:&nbsp;{food.rate}/5</Card.Text>

                        <Card.Text >MADE-FROM&nbsp;:&nbsp;{food.madeFrom}</Card.Text>
                        <Button className=" btn-dark col-sm-12 col-lg-7 mt-5  container" >add to cart</Button>
                    </Card.Body>

                </Card>

            </div>
            <div>
                {food.comments.map(c => <CommentsCard comment={c} />)}
            </div>
        </>
    )
}

export default foodPage
