import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from "../partials/Navigation";
import Boxes from "../partials/Boxes"
import Card from 'react-bootstrap/Card';
import * as Unicons from '@iconscout/react-unicons';
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import SelfExpense from '../partials/Expenses/SelfExpense';
import Group from '../partials/group/Group';
import Badge from 'react-bootstrap/Badge'
import { useExpenseContext} from '../context/ExpenseContext';
import { useAuthContext } from '../hooks/useAuthContext';

const Home = () => {
  const { user } = useAuthContext()
  // console.log(user.user.username)
  let today = new Date()
  let currDate = today.getFullYear() + '-' + parseInt(today.getMonth() + 1) + '-' + today.getDate()

  const { selfExpenses, setSelfExpenses,groups, setGroups } = useExpenseContext()
  // const userName="Dipankar Prasad"
  // const userEmail="dpunkr@gmail.com"
  const [error, setError] = useState(null)

  const [amount, setAmount] = useState(0);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("General");
  const [date, setDate] = useState(currDate);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [groupTitle, setGroupTitle] = useState("");
  const [groupCategory, setGroupCategory] = useState("General");
  const [showGroup, setShowGroup] = useState(false);
  const handleCloseGroup = () => setShowGroup(false);
  const handleShowGroup = () => setShowGroup(true);

  let total=0
  selfExpenses.forEach(exp=> total+=parseInt(exp.amount))

  let groupTotal=0
  groups.forEach(grp=>grp.members.forEach(mem=> {if(mem.memberEmail===user.user.email){groupTotal+=mem.groupBalance}}))

  // //refresh every time there is a change in expenses
  useEffect(()=>{
    const fetchSelfExpenses = async () => {
      const response = await fetch('/dashboard', {
        headers: {'Authorization': `Bearer ${user.token}`},
      })
      const json = await response.json()

      if (response.ok) {
        setSelfExpenses(json)
      }
    }

    const fetchGroups = async () => {
      const response = await fetch('/dashboard/groups',{
        headers:{
          'Authorization':`Bearer ${user.token}`
        }
      })

      const json = await response.json()

      if(response.ok){
        setGroups(json)
      }
    }
  

    if (user) {
      fetchSelfExpenses()
      fetchGroups()
    }

},[user,setSelfExpenses,setGroups])

  const handleSubmit= async(e)=>{
    e.preventDefault()
    if (!user) {
      setError('You must be logged in')
      return
    }

    const expense = {title,amount,category,date}

    const response = await fetch('/dashboard', {
      method: 'POST',
      body: JSON.stringify(expense),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      
    }
    if (response.ok) {
     // const expenseId= (Math.random() + 1).toString(36).substring(2);
      setSelfExpenses([...selfExpenses,json])
      setAmount(0)
      setTitle('')
      setCategory("General")
      setDate(currDate)
      handleClose()  }

  }

  //creating groups
  const addGroup= async(e)=>{ 
    e.preventDefault()
    if(!user){
      setError("You must be logged in")
    }
    const group={groupTitle, groupCategory,amount:0,createdBy:user.user.username,members:[{memberName:user.user.username, memberEmail:user.user.email, groupBalance:0}],groupExpenses:[]}
    const response = await fetch('/dashboard/groups',{
      method:'POST',
      body:JSON.stringify(group),
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })

    const json = await response.json()
    if(response.ok){
          setGroups([...groups,json]) 
          setGroupTitle('')
          setGroupCategory("General")
          setDate(currDate)
          handleCloseGroup()
    }
   // const groupId= (Math.random() + 1).toString(36).substring(2);
   // setGroups([...groups,{groupId,groupTitle, groupCategory,amount:0,createdBy:userName,members:[{memberName:userName, memberEmail:userEmail, groupBalance:0}],groupExpenses:[]}])

  }

  //delete a expense
  const deleteSelfExpense= async (_id)=>{
    if(!user){
        setError('You must be logged in')
          return
        }

    const response = await fetch('/dashboard/'+_id,{
      method:'DELETE',
      headers:{
        'Authorization': `Bearer ${user.token}`
      }
    })

    const json = await response.json()

    if(response.ok){
      const newExpenses=selfExpenses.filter(expense=> expense._id !== json._id )
      setSelfExpenses(newExpenses)
    }
    
    
 
  }

    return ( <>
        <Navigation/>
        <Container className='mt-5'>
        {error && <div className="error">{error}</div>}
        <Row>
          <Col sm={12} md={4}>
              <Row>
                   
                          <Card className="totalBalance text-center" >
                          <h5 className='mt-4'>Personal Balance</h5><h1 className='m-2'>
                          <Badge className='mb-4' bg="dark">&#8377; {total}</Badge>
                          </h1></Card>   
                   
              </Row>
              <Row  className='mt-2'>
                      
                          <Card className="totalBalance text-center" >
                          <h5 className='mt-4'>Group Balance</h5><h1 className='m-2'>
                          <Badge className='mb-4' bg="dark">&#8377; {groupTotal}</Badge>
                          </h1></Card>   
                    
              </Row>
          </Col>
          <Col sm={12} md={8}>
                <Row>
                        <Col>
                          <div>
                          <Boxes cheader="Personal Transactions" ctitle="" ctext={
                            <>
                            
                              <button onClick={handleShow} className="btn pmd-btn-fab pmd-ripple-effect btn-light pmd-btn-raised mt-3" type="button">
                            <Unicons.UilPlus className=" uil uil-at"  />
                              </button>{selfExpenses.length>0 && selfExpenses.map((exp)=><SelfExpense deleteSelfExpense={deleteSelfExpense}  key={exp._id} expenseData={exp}/>)} 
                            </>}/>   
                         </div>
                  </Col>
                </Row>
                <Row>
                <Col>
                  <div>
                  <Boxes cheader="Groups" ctitle="" ctext={<> <button  onClick={handleShowGroup} className="btn pmd-btn-fab pmd-ripple-effect btn-light pmd-btn-raised  mt-3" type="button">
                  <Unicons.UilPlus className=" uil uil-at"  />
                    </button>{groups.length>0 && groups.map((exp)=><Group onClick={handleShow} key={exp._id} expenseData={exp} />)} </>}/>  
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
              required
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
            required
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
          required
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
          required
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