import Card from 'react-bootstrap/Card';


const Boxes = ({cheader,ctitle,ctext}) => {

    return ( 
        <Card
        key="Secondary"
        text='light'
        className="mb-2 box"
        >
        <Card.Header>{cheader} </Card.Header>
        <Card.Body >
          <Card.Title>{ctitle}</Card.Title>
          <Card.Text className='mt-1 d-flex flex-row flex-nowrap'>
            {ctext}
          </Card.Text>
        </Card.Body>
      </Card>  
     );
}
 
export default Boxes;