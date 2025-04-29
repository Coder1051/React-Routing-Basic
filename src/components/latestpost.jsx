import { Col, Container, Row } from "react-bootstrap"
import LatestPostCard from "./latestpostcard";

export default function LastesPost() {
    return (<>
        <Container fluid className="py-3 bg-white">
            <h1 className="text-center text-success">Explore By Categories</h1>
            <Row>
                <Col md={6} className="mb-3">
                    <LatestPostCard title="Jaguar F-Type Convertible" Image="/images/Car Images/Suv.jpg" />
                </Col>
                <Col md={6} className="mb-3">
                    <LatestPostCard title="Ford Mustand Convertible" Image="/images/Car Images/Sedan.jpg" />
                </Col>
            </Row>
            <Row>
                <Col md={6} className="mb-3">
                    <LatestPostCard title="Mini Cooper Convertible" Image="/images/Car Images/Hybrid.jpg" />
                </Col>
                <Col md={6} className="mb-3">
                    <LatestPostCard title="Lexus LC 500 Convertible" Image="/images/Car Images/Convertiable.jpg" />
                </Col>
            </Row>
        </Container>
    </>
    );
}