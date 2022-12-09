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
import { useExpenseContext } from '../../context/ExpenseContext';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const GroupMenu = () => {
  const { groups } = useExpenseContext()

  let { id } = useParams();
  const [groupData,setGroupData] = useState(groups.filter(group=>group._id===id))

  useEffect(()=>{
    console.log("GroupMenu useEffect=> ",groups)
    setGroupData(groups.filter(group=>group._id===id))
},[groups,id])


    return ( 
        <>
        <Navigation/>
        <Container className='mt-5'>
            <Row className='groupHeading mb-1'>
                <Col  sm={10}><h3 className='ml-3'>Group: "{groupData[0].groupTitle}"</h3>
                     <p>Created by: {groupData[0].createdBy}</p>
                </Col>
                <Col sm={2}>
                <AddBtn/>
                </Col>
            </Row>
             {groupData[0].members.length>0 && groupData[0].members.map(member=>  <Badge bg="secondary" key={member.memberEmail} className='m-1'>{member.memberName}   <Unicons.UilTimesCircle  /></Badge>)}
            <Row  className='mt-2'>

            <Tabs
            defaultActiveKey="home"
            id="justify-tab-example"
            className="mb-3"
            justify
          >
            <Tab eventKey="home" title="Expense">
                <Stack gap={3}>
                {groupData[0].groupExpenses.length>0 && groupData[0].groupExpenses.map((exp,idx)=>
                  <Card
                  className=" selfexpense"
                  key={idx}
                  >
                  <Card.Header >{exp.category}</Card.Header>
                  <Card.Body className="cardBody">
                    <Card.Text>
                    <Row>
                      <Col xs={4} sm={4} >
                      <Unicons.UilReceiptAlt /> <br/>
                      <Badge bg="secondary">{exp.date}</Badge> 
                      </Col>
                      <Col xs={5} sm={5}>
                      {exp.title}
                      </Col>
                      <Col xs={3} sm={3}>
                      &#8377; {exp.amount}
                      </Col>
                    </Row>

                    </Card.Text>
                  </Card.Body>
                </Card> 
                  )}


                </Stack>
           </Tab>
            <Tab eventKey="balanceTab" title="Balance">
                <Row>
                {groupData[0].members.length>0 && groupData[0].members.map(member=> 
                  <Col sm={6} key={member.memberEmail}>
                  <Card
                  className=" selfexpense mb-2"
                  >
                    <Card.Header >{member.memberName}</Card.Header>
                    <Card.Body className="cardBody">
                      <Card.Text>
                      <Row>
      
                        <Col xs={3} sm={3}>
                        &#8377; {member.groupBalance}
                        </Col>
                      </Row>
      
                      </Card.Text>
                    </Card.Body>
                  </Card> 
                </Col>
                  )}

                </Row>
          </Tab>
          </Tabs>
            </Row>
        </Container>
        </> );
}
 
export default GroupMenu;