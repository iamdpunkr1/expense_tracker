import Container from 'react-bootstrap/Container';
import Navigation from '../partials/Navigation';
import Card from 'react-bootstrap/Card';
const Contact = () => {
    return ( 
        <>
        <Navigation/>
        <Container className='mt-5'>
        <Card
        className=" selfexpense text-center mt-4"
        >
            <Card.Header>Contact Us:</Card.Header>
            <Card.Body className="cardBody">
            <Card.Text>
            <br/>
                Dipankar: iamdpunkr@gmail.com
                          +91 8486611899 <br/>
                Akash: akashchetia27@gmail.com
                          +91 8761902965
            </Card.Text>
            </Card.Body>
        </Card> 
        </Container>
        </>

     );
}
 
export default Contact;