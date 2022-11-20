import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import * as Unicons from '@iconscout/react-unicons';
import { useState } from 'react';


const AddBtn = () => {
  let today = new Date()
  let currDate = today.getFullYear() + '-' + parseInt(today.getMonth() + 1) + '-' + today.getDate()
  const [selfExpenses, setSelfExpenses] = useState([]);

  const [amount, setAmount] = useState(0);
  const [title, setTitle] = useState("");

  const [category, setCategory] = useState("General");
  const [date, setDate] = useState(currDate);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit=(e)=>{
    e.preventDefault()
    let temp=selfExpenses
    temp.push({title,amount,category,date})
    setSelfExpenses(temp)
    setAmount(0)
    setTitle('')
    setCategory("General")
    setDate(currDate)
    console.log(selfExpenses)
    handleClose()
  }
    return ( 
    <>
        <DropdownButton drop="start" id="dropdown-basic-button" title="+ Create ">
        <Dropdown.Item href="#/action-1" onClick={handleShow}><Unicons.UilReceiptAlt   /> Add Expense</Dropdown.Item>
        <Dropdown.Item href="#/action-2"><Unicons.UilUsersAlt  /> Add Member</Dropdown.Item>
        </DropdownButton>

        
      <Modal className='myModal'  show={show} onHide={handleClose}>
      <div >
      <Modal.Header closeButton>
        <Modal.Title>Add an expense</Modal.Title>
      </Modal.Header>
      </div>
      <Modal.Body >
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <input
              type="number"
              name="amount"
              onChange={(e)=>{setAmount(e.target.value)}}
              value={amount}
              className="form-style"
              placeholder="0"
              id="num"
              autoComplete="off"
            />
            <Unicons.UilRupeeSign className="input-icon uil uil-at"  />
          </div>
          <div className="form-group mt-3">
          <input
            type="text"
            name="title"
            onChange={(e)=>{setTitle(e.target.value)}}
            value={title}
            className="form-style"
            placeholder="what was this expense for"
            id="expenseFor"
            autoComplete="off"
          />
          <Unicons.UilReceipt  className="input-icon uil uil-at"  />
        </div>
        <div className="form-group mt-3">
        <input
          type="date"
          name="date"
          onChange={(e)=>{setDate(e.target.value)}}
          value={date}
          className="form-style"
   
          id="date"
          autoComplete="off"
          pattern="\d{2}/\d{2}/\d{4}" 
        />
        <Unicons.UilCalender  className="input-icon uil uil-at"  />
      </div>
        <Form.Group
        className="mb-3 mt-3"
        controlId="exampleForm.ControlTextarea1"
      >
      <Form.Label>Category:</Form.Label>
      <Col  sm={3} md={3} lg={4} xl={4}>
      <select className="form-select form-style"    onChange={(e)=>{setCategory(e.target.value)}}
      aria-label="Default select example">
      <option  value={category} >General</option>
      <option value="Food">Food</option>
      <option value="Sports">Sports</option>
      <option value="Misc">Misc</option>
    </select>
      </Col>

      <div>
      <br/>
      <p>Split:</p>
      <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Equally">
      Akash  Dipankar
     </Tab>
      <Tab eventKey="profile" title="Unequally">
      Akash  Dipankar </Tab>
    </Tabs>
      </div>
        </Form.Group>
        <Modal.Footer>

        <Button type='submit'  className="btn">
          Add expense
        </Button>
      </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>

    </>
  );
}

 
export default AddBtn;