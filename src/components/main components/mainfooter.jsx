import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function MainFooter(){
    return(
        <>
            <section className="bg-dark text-white pt-5 px-0">
                <div className="row px-3 pb-4">
                    <div className="col-md-3">
                        <h4 className="mb-4">Company</h4>
                        <p className="text-secondary lh-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit eius recusandae possimus minus ipsam laboriosam molestias a ipsa nihil suscipit.</p>
                    </div>
                    <div className="col-md-3">
                        <h4 className="mb-4">Quick Links</h4>
                        <ul className="pt-2 px-0 text-secondary">
                            <Nav.Link href="about" className="mb-2"><FontAwesomeIcon icon="fas fa-angle-right" className="me-2"/> About Us</Nav.Link>
                            <Nav.Link href="contact" className="mb-2"><FontAwesomeIcon icon="fas fa-angle-right" className="me-2"/> Contact Us</Nav.Link>
                            <Nav.Link href="/" className="mb-2"><FontAwesomeIcon icon="fas fa-angle-right" className="me-2"/> Privacy Policy</Nav.Link>
                            <Nav.Link href="/" ><FontAwesomeIcon icon="fas fa-angle-right" className="me-2"/> Terms & Condition</Nav.Link>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4 className="mb-4">Contact</h4>
                        <ul className="pt-2 px-0 text-secondary">
                            <Nav.Link className="mb-2"><FontAwesomeIcon icon="fas fa-location-dot" className="me-2"/> FerozpurRoad Gulberg 3, Lahore</Nav.Link>
                            <Nav.Link className="mb-2"><FontAwesomeIcon icon="fas fa-phone" className="me-2"/> 0300 1 387 387</Nav.Link>
                            <Nav.Link className="mb-2"><FontAwesomeIcon icon="fas fa-envelope" className="me-2"/> evs@gmail.com</Nav.Link>
                        </ul>
                        <div>
                            <Button href="/" className="me-2" variant="outline-light"> <FontAwesomeIcon icon="fab fa-twitter"/> </Button>
                            <Button href="/" className="me-2" variant="outline-light"> <FontAwesomeIcon icon="fab fa-facebook-f"/> </Button>
                            <Button href="/" className="me-2" variant="outline-light"> <FontAwesomeIcon icon="fab fa-youtube"/> </Button>
                            <Button href="/" variant="outline-light"> <FontAwesomeIcon icon="fab fa-linkedin-in"/> </Button>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h4 className="mb-4">Newsletter</h4>
                        <p className="text-secondary mb-4">Subscribe to our newsletter for the latest updates and news.</p>
                        <input type="text" className="p-2" placeholder="Your email"/>
                        <Link to="signup" className="text-decoration-none text-white bg-success rounded p-2 ms-2 text-uppercase">Sing UP</Link>
                    </div>
                </div>
                <hr />
                <footer className="px-3 pb-3 d-flex justify-content-between align-items-center">
                    <p className="m-0"> <span className="text-secondary"> &copy; </span>  <a href="/" className="text-white">PakClassified.</a> <span className="text-secondary">All Right Reserved.</span> <span className="text-secondary">Designed By</span> <a href="/" className="text-white">Team EVS</a></p>
                    <ul className="px-0 text-secondary d-flex m-0">
                            <Nav.Link href="home" className="me-3"> Home</Nav.Link>
                            <Nav.Link href="contact" className="me-3"> Cookies </Nav.Link>
                            <Nav.Link href="/" className="me-3"> Help </Nav.Link>
                            <Nav.Link href="/" > FAQs </Nav.Link>
                        </ul>
                </footer>
            </section>
        </>
    )
}