import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel, Container, Row, Col, Button, Form } from "react-bootstrap";

export default function MyCarousel() {
    return (
        <>
            <div className="p-0">
                <Carousel style={{ height: "90vh", overflow: "hidden" }}>
                    <Carousel.Item style={{ height: "90vh" }}>
                        <div style={{ position: 'relative', height: '100%', }}>
                            <img src="/images/Carousel-1.jpg" className="d-block w-100" style={{ height: "100%", objectFit: "cover" }} alt="Carousel-1" />

                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                <Container style={{ height: '100%' }} className="me-5">
                                    <Row className="h-100 align-items-center">
                                        <Col lg={6} className="text-white">
                                            <h2 className="mb-4" style={{ fontSize: '2.5rem', fontWeight: '700' }}>
                                                Shift Into Gear: <br />
                                                Your Destination <br />
                                                for Car Excellence
                                            </h2>
                                            <p className="lead mb-5" style={{ fontSize: '1.5rem' }}>
                                                Drive Your Dream: Find Your Perfect Car Today
                                            </p>
                                            <Button variant="success" href="/" size="lg" className="mb-4">
                                                Select A Car
                                            </Button>
                                            <Button variant="primary" href="/" size="lg" className="mb-4 ms-3">
                                                Post Advertisment
                                            </Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item style={{ height: "90vh" }}>
                        <div style={{ position: 'relative', height: '100%', }}>
                            <img src="/images/Carousel-2.jpg" className="d-block w-100" style={{ height: "100%", objectFit: "cover" }} alt="Carousel-2" />

                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                <Container style={{ height: '100%' }} className="me-5">
                                    <Row className="h-100 align-items-center">
                                        <Col lg={6} className="text-white">
                                            <h2 className="mb-4" style={{ fontSize: '2.5rem', fontWeight: '700' }}>
                                                Shift Into Gear: <br />
                                                Your Destination <br />
                                                for Car Excellence
                                            </h2>
                                            <p className="lead mb-5" style={{ fontSize: '1.5rem' }}>
                                                Drive Your Dream: Find Your Perfect Car Today
                                            </p>
                                            <Button variant="success" href="/" size="lg" className="mb-4">
                                                Select A Car
                                            </Button>
                                            <Button variant="primary" href="/" size="lg" className="mb-4 ms-3">
                                                Post Advertisment
                                            </Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item style={{ height: "90vh" }}>
                        <div style={{ position: 'relative', height: '100%', }}>
                            <img src="/images/Carousel-3.jpg" className="d-block w-100" style={{ height: "100%", objectFit: "cover" }} alt="Carousel-3" />

                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                <Container style={{ height: '100%' }} className="me-5">
                                    <Row className="h-100 align-items-center">
                                        <Col lg={6} className="text-white">
                                            <h2 className="mb-4" style={{ fontSize: '2.5rem', fontWeight: '700' }}>
                                                Shift Into Gear: <br />
                                                Your Destination <br />
                                                for Car Excellence
                                            </h2>
                                            <p className="lead mb-5" style={{ fontSize: '1.5rem' }}>
                                                Drive Your Dream: Find Your Perfect Car Today
                                            </p>
                                            <Button variant="success" href="/" size="lg" className="mb-4">
                                                Select A Car
                                            </Button>
                                            <Button variant="primary" href="/" size="lg" className="mb-4 ms-3">
                                                Post Advertisment
                                            </Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
                <div className="bg-success pt-3 px-3">
                    <Form>
                        <Row>
                            <Col md={3} className="mb-3">
                                <Form.Control type="text" placeholder="Keyword" className="w-75" />
                            </Col>
                            <Col md={3} className="mb-3">
                                <Form.Select className="w-75">
                                    <option>Select Category</option>
                                    <option>Sedan</option>
                                    <option>SUV</option>
                                    <option>Sports</option>
                                </Form.Select>
                            </Col>
                            <Col md={3} className="mb-3">
                                <Form.Select className="w-75">
                                    <option>Select City Area</option>
                                    <option>Downtown</option>
                                    <option>Suburbs</option>
                                </Form.Select>
                            </Col>
                            <Col md={3} className="mb-3">
                                <Button variant="dark" className="w-100">
                                    <FontAwesomeIcon icon="fas fa-search" /> Search
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </>
    )
}