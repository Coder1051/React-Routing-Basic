import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";

export default function AboutPage() {
  return (
    <>
      <div style={{ backgroundImage: "url('/images/Car Images/Suv.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100%', height: "30vh", position: 'relative', display: 'flex', alignItems: "center" }} className="px-4">
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>

        <div style={{ position: 'relative', zIndex: 1, color: 'white' }}>
          <h1 className="m-0">About US</h1>
        </div>
      </div>
      <Container fluid className="py-4">
        <Row className="align-items-center">
          <Col md={6} className="mb-3">
            <img src="/images/Car Images/About Us.jpg" className="d-block w-100" alt="AboutUs" />
          </Col>
          <Col md={6} className="mb-3">
            <h4 className="fs-1 mb-4">PakClassified is a <br /> comprehensive online platform <br /> where users can browse, buy, <br /> sell and compare cars</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis laudantium laboriosam saepe ipsam eum ex asperiores? Excepturi nulla veniam quod at, aut ea suscipit porro commodi cum quia voluptatum alias quam cumque impedit unde! Aliquam nesciunt minus eaque, veniam numquam veritatis qui alias molestiae est facere reprehenderit, delectus consequatur, autem earum iste minima officiis rem aliquid a ratione unde odio.</p>
            <ul style={{ listStyle: "none" }} className="p-0 mt-4">
              <li className="mb-3"><FontAwesomeIcon icon="fas fa-check" className="text-success me-2" /> Customer Support </li>
              <li className="mb-3"><FontAwesomeIcon icon="fas fa-check" className="text-success me-2" /> Technical Assistance</li>
              <li><FontAwesomeIcon icon="fas fa-check" className="text-success me-2" /> Feedback and Suggestion</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}