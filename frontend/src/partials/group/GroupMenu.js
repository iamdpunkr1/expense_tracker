import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from '../Navigation';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge'
import AddBtn from '../AddBtn';
// import Button from 'react-bootstrap/Button';
import * as Unicons from '@iconscout/react-unicons';


const GroupMenu = () => {


    return ( 
        <>
        <Navigation/>
        <Container className='mt-5'>
            <Row className='groupHeading mb-1'>
                <Col  sm={10}><h3 className='ml-3'>Group: "Football"</h3>
                     <p>Created by: Dipankar</p>
                </Col>
                <Col sm={2}>
                <AddBtn/>
                </Col>
            </Row>

            <Badge bg="secondary" className='m-1'>Dipnakar Prasad   <Unicons.UilTimesCircle  /></Badge>
            <Badge bg="secondary" className='m-1'>Akash Chetia  <Unicons.UilTimesCircle  /></Badge>
            <Badge bg="secondary" className='m-1'>Sagar Das   <Unicons.UilTimesCircle  /></Badge>
            <Row  className='mt-2'>

            <Tabs
            defaultActiveKey="profile"
            id="justify-tab-example"
            className="mb-3"
            justify
          >
            <Tab eventKey="home" title="Expense">
                <Stack gap={3}>
                  <Card
                    className=" selfexpense"
                    >
                    <Card.Header >General</Card.Header>
                    <Card.Body className="cardBody">
                      <Card.Text>
                      <Row>
                        <Col xs={4} sm={4} >
                        <Unicons.UilReceiptAlt /> <br/>
                        <Badge bg="secondary">Date: 12-12-2022</Badge> 
                        </Col>
                        <Col xs={5} sm={5}>
                        Momos
                        </Col>
                        <Col xs={3} sm={3}>
                        &#8377; 1400
                        </Col>
                      </Row>

                      </Card.Text>
                    </Card.Body>
                  </Card> 
         
                  <Card
                    className=" selfexpense"
                    >
                    <Card.Header >General</Card.Header>
                    <Card.Body className="cardBody">
                      <Card.Text>
                      <Row>
                        <Col xs={4} sm={4} >
                        <Unicons.UilReceiptAlt /> <br/>
                        <Badge bg="secondary">Date: 12-12-2022</Badge> 
                        </Col>
                        <Col xs={5} sm={5}>
                        Momos
                        </Col>
                        <Col xs={3} sm={3}>
                        &#8377; 1400
                        </Col>
                      </Row>

                      </Card.Text>
                    </Card.Body>
                  </Card> 
         
                  <Card
                    className=" selfexpense"
                    >
                    <Card.Header >General</Card.Header>
                    <Card.Body className="cardBody">
                      <Card.Text>
                      <Row>
                        <Col xs={4} sm={4} >
                        <Unicons.UilReceiptAlt /> <br/>
                        <Badge bg="secondary">Date: 12-12-2022</Badge> 
                        </Col>
                        <Col xs={5} sm={5}>
                        Momos
                        </Col>
                        <Col xs={3} sm={3}>
                        &#8377; 1400
                        </Col>
                      </Row>

                      </Card.Text>
                    </Card.Body>
                  </Card> 
         
                </Stack>
           </Tab>
            <Tab eventKey="profile" title="Balance">
                <Row>
                  <Col sm={6}>
                  <Card
                  className=" selfexpense mb-2"
                  >
                  <Card.Header >Akash Chetia</Card.Header>
                  <Card.Body className="cardBody">
                    <Card.Text>
                    <Row>
    
                      <Col xs={3} sm={3}>
                      &#8377; 1400
                      </Col>
                    </Row>
    
                    </Card.Text>
                  </Card.Body>
                </Card> 
                  </Col>
                  <Col sm={6}>
                  <Card
                  className=" selfexpense"
                  >
                  <Card.Header >Akash Chetia</Card.Header>
                  <Card.Body className="cardBody">
                    <Card.Text>
                    <Row>
    
                      <Col xs={3} sm={3}>
                      &#8377; 1400
                      </Col>
                    </Row>
    
                    </Card.Text>
                  </Card.Body>
                </Card> 
                  </Col>
                </Row>
          </Tab>
          </Tabs>
            </Row>
        </Container>
        </> );
}
 
export default GroupMenu;