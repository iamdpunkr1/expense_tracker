import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';

const Group = ({expenseData}) => {
    const {groupTitle, groupCategory}=expenseData 
    return (  
        <Col>
        <Button className='groups'>
        {groupTitle+"   "}<br/><Badge bg="secondary">{"   "+groupCategory}</Badge>
        <span className="visually-hidden">unread messages</span>
      </Button>
      </Col> 
    );
}
 
export default Group;