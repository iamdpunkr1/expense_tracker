import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge'
import * as Unicons from '@iconscout/react-unicons';

const SelfExpense = ({expenseData}) => {
   const {title, amount, category, date}=expenseData 
    return (
        <Col>
        <Card
        className=" selfexpense"
        >
        <Card.Header>{category} <Unicons.UilTrashAlt className="input-icon delete" /></Card.Header>
        <Card.Body className="cardBody">
          <Card.Text>
          {title}<br/>
           <Badge bg="dark">&#8377; {amount}</Badge><br/>
           <Badge bg="secondary">Date: {date}</Badge> 

          </Card.Text>
        </Card.Body>
      </Card> 
      </Col> 
        );
}
 
export default SelfExpense;