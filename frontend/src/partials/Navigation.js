import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import * as Unicons from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return ( <>
        <Navbar collapseOnSelect expand="lg" className="navcolor" variant="dark">
        <Container>
          <Link to="/" className='navbar-brand'>Expense Tracker</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
  
            <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link to=""><Unicons.UilUser/>  Dipankar </Nav.Link>
              <Link to="/about"  className='nav-link '>About us</Link>
              <Link to="/contact" className='nav-link'>Contact us</Link>
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