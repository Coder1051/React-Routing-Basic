import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function NavigationBar() {
    return (
        <>
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/" className='text-success fs-3 fw-bold'>PakClassified</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="ms-auto fw-bold">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="about">About</Nav.Link>
                            <NavDropdown title="Categories">
                                <NavDropdown.Item href="/">Honda</NavDropdown.Item>
                                <NavDropdown.Item href="/">Suzuki</NavDropdown.Item>
                                <NavDropdown.Item href="/">Civic</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href='contact'>Contacts</Nav.Link>
                            <Nav.Link><Link to="/" className='bg-success text-decoration-none text-white px-3 py-2'> Post Advertisement <FontAwesomeIcon icon="fas fa-arrow-right" /> </Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}