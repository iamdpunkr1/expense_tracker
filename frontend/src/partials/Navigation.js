import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import * as Unicons from '@iconscout/react-unicons';

const Navigation = () => {
    return ( <>
        <Navbar collapseOnSelect expand="lg" className="navcolor" variant="dark">
        <Container>
          <Navbar.Brand href="#home" >Expense Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
  
            <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#deets">Dipankar <Unicons.UilUser  /> </Nav.Link>
              <Nav.Link href="#deets">About us</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Contact Us
              </Nav.Link>
              <Nav.Link eventKey={2} href="/login">
              <button className="btn logout">
              Logout
            </button>
            </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
       );
}
 
export default Navigation;