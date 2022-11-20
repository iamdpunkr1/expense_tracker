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
import * as Unicons from '@iconscout/react-unicons';


const GroupMenu = () => {


    return ( 
        <>
        <Navigation/>
        <Container className='mt-5'>
            <Row className='groupHeading'>
                <Col sm={10}><h1>Group Name: </h1>
                     <p>Created by: Dipankar</p>
                </Col>
                <Col sm={2}>
                <AddBtn/>
                </Col>
            </Row>

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
            Those pretty wrongs that liberty commits, When I am sometime absent from thy heart, Thy beauty, and thy years full well befits, For still temptation follows where thou art. Gentle thou art, and therefore to be won, Beauteous thou art, therefore to be assail'd; And when a woman woos, what woman's son Will sourly leave her till he have prevail'd? Ay me! but yet thou mightst my seat forbear, And chide thy beauty and thy straying youth,
            </Tab>
          </Tabs>
            </Row>
        </Container>
        </> );
}
 
export default GroupMenu;