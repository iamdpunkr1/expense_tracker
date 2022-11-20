import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


const Group = ({expenseData,idx}) => {
    const {groupTitle, groupCategory}=expenseData 
    return (  
      <Link to={`/groups/${idx}`}>
        <Col>
              <Button className='groups'>
              {groupTitle+"   "}<br/><Badge bg="secondary">{"   "+groupCategory}</Badge>
            </Button>

      </Col> 
      </Link>
    );
}
 
export default Group;