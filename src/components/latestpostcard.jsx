import { Button, Card } from "react-bootstrap";

export default function LatestPostCard(props){
    return(
        <>
            <Card>
                <Card.Img variant="Top" src={props.Image}/>
                <Card.Body>
                    <h3>{props.title}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In odio qui sint! Doloremque reiciendis nihil, sapiente debitis dicta eum necessitatibus quod neque quae ut iste, ipsum quas dolores odit magnam.</p>
                    <Button variant="success">More Details</Button>
                </Card.Body>
            </Card>
        </>
    )
}