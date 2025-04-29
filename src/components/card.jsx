import { Card } from "react-bootstrap";

export default function MyCard(props){
    return(
        <>
            <Card>
                <Card.Img variant="Top" src={props.Image}/>
                <Card.Body>
                    <h3>{props.title}</h3>
                    <p className="m-0 text-success">{props.text}</p>
                </Card.Body>
            </Card>
        </>
    )
}