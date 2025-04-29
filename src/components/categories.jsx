import { Col, Container, Row } from "react-bootstrap"
import MyCard from "./card";

export default function Categories() {
    return (<>
        <Container fluid className="py-3 bg-white">
            <h1 className="text-center text-success">Explore By Categories</h1>
            <Row>
                <Col md={3} className="mb-3">
                    <MyCard title="SUV" text="11 Cars" Image="/images/Car Images/Suv.jpg" />
                </Col>
                <Col md={3} className="mb-3">
                    <MyCard title="Sedan" text="14 Cars" Image="/images/Car Images/Sedan.jpg" />
                </Col>
                <Col md={3} className="mb-3">
                    <MyCard title="Crossover" text="14 Cars" Image="/images/Car Images/Crossover.jpg" />
                </Col>
                <Col md={3} className="mb-3">
                    <MyCard title="Hatchback" text="10 Cars" Image="/images/Car Images/Hatchback.jpg" />
                </Col>
            </Row>
            <Row>
                <Col md={3} className="mb-3">
                    <MyCard title="Wagon" text="12 Cars" Image="/images/Car Images/Wagon.jpg" />
                </Col>
                <Col md={3} className="mb-3">
                    <MyCard title="Sports" text="1 Cars" Image="/images/Car Images/Sports.jpg" />
                </Col>
                <Col md={3} className="mb-3">
                    <MyCard title="Hybrid" text="12 Cars" Image="/images/Car Images/Hybrid.jpg" />
                </Col>
                <Col md={3} className="mb-3">
                    <MyCard title="Convertiable" text="11 Cars" Image="/images/Car Images/Convertiable.jpg" />
                </Col>
            </Row>
        </Container>
    </>
    );
}