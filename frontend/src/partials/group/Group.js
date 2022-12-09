import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


const Group = ({expenseData}) => {
    const {groupTitle, groupCategory,_id}=expenseData 
    return (  
      <Link to={`/groups/${_id}`}>
        <Col>
              <Button className='groups'>
              {groupTitle+"   "}<br/><Badge bg="secondary">{"   "+groupCategory}</Badge>
            </Button>

      </Col> 
      </Link>
    );
}
 
export default Group;