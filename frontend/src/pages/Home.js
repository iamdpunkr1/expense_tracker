import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from "../partials/Navigation";
import Boxes from "../partials/Boxes"
import * as Unicons from '@iconscout/react-unicons';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import SelfExpense from '../partials/Expenses/SelfExpense';
import Group from '../partials/group/Group';



const Home = () => {
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

  const [groups, setGroups] = useState([]);
  const [groupTitle, setGroupTitle] = useState("");
  const [groupCategory, setGroupCategory] = useState("General");
  const [showGroup, setShowGroup] = useState(false);
  const handleCloseGroup = () => setShowGroup(false);
  const handleShowGroup = () => setShowGroup(true);


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

  const addGroup=(e)=>{
    e.preventDefault()
    let temp=groups
    temp.push({groupTitle, groupCategory})
    setGroups(temp)
    setGroupTitle('')
    setGroupCategory("General")
    setDate(currDate)
    console.log(groups)
    handleCloseGroup()
  }
    return ( <>
        <Navigation/>
        <Container className='mt-5'>
        <Row>
          <Col sm={12} md={4}><div className='box1'>  
                  <Boxes cheader="User Info" ctitle="Dipankar Prasad" ctext="iamdpunkr@gmail.com" />  
                  <Boxes cheader="Total Balance" ctitle="Self  |  Group" ctext="250  |  -45" />   
          </div></Col>
          <Col sm={12} md={8}>
                <Row>
                        <Col>
                          <div >
                          <Boxes cheader="Self Transactions" ctitle="" ctext={<><button onClick={handleShow} className="btn pmd-btn-fab pmd-ripple-effect btn-light pmd-btn-raised" type="button">
                          <Unicons.UilPlus className=" uil uil-at"  />
                            </button>{selfExpenses.length>0 && selfExpenses.map((exp,idx)=><SelfExpense  key={idx} expenseData={exp}/>)} </>}/>   
                         </div>
                  </Col>
                </Row>
                <Row>
                <Col>
                  <div>
                  <Boxes cheader="Group Transactions" ctitle="" ctext={<> <button  onClick={handleShowGroup} className="btn pmd-btn-fab pmd-ripple-effect btn-light pmd-btn-raised" type="button">
                  <Unicons.UilPlus className=" uil uil-at"  />
                    </button>{groups.length>0 && groups.map((exp,idx)=><Group onClick={handleShow} key={idx} expenseData={exp} idx={idx}/>)} </>}/>  
                 </div>
          </Col>
        </Row>
          </Col>
        </Row>
      </Container>


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
        </Form.Group>
        <Modal.Footer>

        <Button type='submit'  className="btn">
          Add expense
        </Button>
      </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>


   
      <Modal className='myModal'  show={showGroup} onHide={handleCloseGroup}>
      <div >
      <Modal.Header closeButton>
        <Modal.Title>Create Group</Modal.Title>
      </Modal.Header>
      </div>
      <Modal.Body >
        <form onSubmit={addGroup}>
        <div className="form-group mt-3">
        <input
          type="text"
          name="title"
          onChange={(e)=>{setGroupTitle(e.target.value)}}
          value={groupTitle}
          className="form-style"
          placeholder="Group Name"
          id="expenseFor"
          autoComplete="off"
        />
        <Unicons.UilUsersAlt className="input-icon uil uil-at"  />
      </div>

        <Form.Group
        className="mb-3 mt-3"
        controlId="exampleForm.ControlTextarea1"
      >
      <Form.Label>Category:</Form.Label>
      <Col  sm={3} md={3} lg={4} xl={4}>
      <select className="form-select form-style"    onChange={(e)=>{setGroupCategory(e.target.value)}}
      aria-label="Default select example">
      <option  value={groupCategory} >General</option>
      <option value="Food">Food</option>
      <option value="Sports">Sports</option>
      <option value="Misc">Misc</option>
    </select>
      </Col>
        </Form.Group>
        <Modal.Footer>
        <Button type='submit'  className="btn">
          Create Group
        </Button>
      </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
    </>
       );
}

export default Home;