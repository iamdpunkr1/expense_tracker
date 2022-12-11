import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from '../Navigation';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge'
// import AddBtn from '../AddBtn';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import Button from 'react-bootstrap/Button';
import * as Unicons from '@iconscout/react-unicons';
import { useExpenseContext } from '../../context/ExpenseContext';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';

const GroupMenu = () => {
  const { user } = useAuthContext()
  const { groups,setGroups } = useExpenseContext()

  let { id } = useParams();
  const [groupData,setGroupData] = useState(groups.filter(group=>group._id===id))

  let today = new Date()
  let currDate = today.getFullYear() + '-' + parseInt(today.getMonth() + 1) + '-' + today.getDate()


  const [currAmount, setAmount] = useState(0);
  const [title, setTitle] = useState("");

  const [category, setCategory] = useState("General");
  const [date, setDate] = useState(currDate);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [memberName, setMemberName] = useState("")
  const [memberEmail, setMemberEmail] = useState("")
  const [showMember, setShowMember] = useState(false);
  const handleCloseMember = () => setShowMember(false);
  const handleShowMember = () => setShowMember(true);

  useEffect(()=>{
    const fetchGroupData = async () => {
      const response = await fetch('/groups/'+id,{
        headers:{
          'Authorization':`Bearer ${user.token}`
        }
      })

      const json = await response.json()

      if(response.ok){
        console.log("from Group Menu ",json)
        setGroupData([json])
      }
    }
  

    if (user) {

      fetchGroupData()
    }
    // setGroupData(groups.filter(group=>group._id===id))
  },[groups,setGroupData,id,user])


 //Add expense
  const handleSubmit=async(e)=>{
    e.preventDefault()
    let temp=groups.filter(g=>g._id===id)
    const newExpense = {amount:temp[0].amount+parseInt(currAmount),
      groupExpenses:[...temp[0].groupExpenses,{title,category,date,amount:parseInt(currAmount)}],
      members:temp[0].members.map(member=> {return {...member,groupBalance:member.groupBalance+currAmount/temp[0].members.length}})
    }

      console.log('from updated Group:',newExpense)
      if(!user){
        console.log("You must be logged in")
       }
       const response = await fetch('/dashboard/groups/expense/'+id,{
         method:'PATCH',
         body:JSON.stringify(newExpense),
         headers:{
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${user.token}`
         }
       })
   
       const json = await response.json()
       if(response.ok){
        setGroups(groups.map(group=>{
          if(group._id===id){
            return {...group, json }
                        }else{
            return group
          }
        }))
    
        setAmount(0)
        setTitle('')
        setCategory("General")
        setDate(currDate)
        handleClose()
    
       }

  }


  const addMember=async (e)=>{
    e.preventDefault()
    if(!user){
     console.log("You must be logged in")
    }
    const memberDetails={memberName,memberEmail,groupBalance:0}
    const response = await fetch('/dashboard/groups/'+id,{
      method:'PATCH',
      body:JSON.stringify(memberDetails),
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })

    const json = await response.json()
    if(response.ok){
      setShowMember(false);
      console.log("From json",json)
      setGroups(groups.map(group=>{
        if(group._id===id){
          return {...group, json}
        }else{
          return group
        }
      }))
      setMemberEmail('')
      setMemberName('')
    }


  }

  const deleteMember=(mEmail)=>{
    const members= groupData[0].members.filter(m=>{
      if(m.memberEmail===mEmail){
        if(m.groupBalance>=0){
          return ''
        }else{
          return m
        }
    }else{ return m}
  })

  }


    return ( 
        <>
        <Navigation/>
        <Container className='mt-5'>
            <Row className='groupHeading mb-1'>
                <Col  sm={9}><h3 className='ml-3'>Group: "{groupData[0].groupTitle}"</h3>
                     <p>Created by: {groupData[0].createdBy}</p>
                </Col>
                <Col sm={3}>
                
                <button  className="btn logout groupBtn" onClick={handleShow}><Unicons.UilReceiptAlt   /> Add Expense</button>
                <button   className="btn logout groupBtn"  onClick={handleShowMember}><Unicons.UilUsersAlt  /> Add Member</button>
                </Col>
            </Row>
             {groupData[0].members.length>0 && groupData[0].members.map((member,idx)=>{ if(idx===0){
                                                                               return  <Badge bg="secondary" key={member.memberEmail} className='m-1 memberClass'>{member.memberName}</Badge>
                                                                             }else{
                                                                              return  <Badge bg="secondary" key={member.memberEmail} className='m-1'>{member.memberName}   <Unicons.UilTimesCircle onClick={()=>{deleteMember(member.memberEmail)}}  /></Badge>
                                                                             }
                                                                            })}
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
            <Tab  eventKey="balanceTab" title="Balance">
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
              value={currAmount}
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
      <Row style={{display:"flex",flexDirection:"column"}}>
            <Col className='mr-auto'  sm={3} md={3} lg={4} xl={6}>
            <select className="form-select form-style"    onChange={(e)=>{setCategory(e.target.value)}}
            aria-label="Default select example">
            <option  value={category} >General</option>
            <option value="Food">Food</option>
            <option value="Sports">Sports</option>
            <option value="Misc">Misc</option>
          </select>
          </Col>

          <Form.Label  className='mt-3'>Paid By:</Form.Label>
          <Col className='ml-auto'  sm={3} md={3} lg={4} xl={6}>
          <select className="form-select form-style"    onChange={(e)=>{setCategory(e.target.value)}}
          aria-label="Default select example">
          <option  value={category} >General</option>
          <option value="Food">Food</option>
          <option value="Sports">Sports</option>
          <option value="Misc">Misc</option>
        </select>
          </Col>
      </Row>


      <div>
      <br/>
      <p>Split:</p>
      {groupData[0].members.length>0 && groupData[0].members.map(member=>
        <Button key={member.memberEmail} variant="primary" className='m-1 equally'>
          {member.memberName} <Badge bg="secondary">&#8377; {currAmount/groupData[0].members.length}</Badge>
           <span className="visually-hidden">unread messages</span>
        </Button>)}

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



   
    <Modal className='myModal'  show={showMember} onHide={handleCloseMember}>
    <div >
    <Modal.Header closeButton>
      <Modal.Title>Add a member</Modal.Title>
    </Modal.Header>
    </div>
    <Modal.Body >
      <form onSubmit={addMember}>
      <div className="form-group mt-3">
      <input
          onChange={(e)=>{setMemberName(e.target.value)}}
          type="text"
          name="memberName"
          className="form-style"
          placeholder="Member Name"
          id="memberName"
          autoComplete="off"
          value={memberName}
          required
      />
      <Unicons.UilUser className="input-icon uil uil-at"  />
      </div>
      <div className="form-group mt-3">
      <input
        onChange={(e)=>{setMemberEmail(e.target.value)}}
        type="email"
        name="memberEmail"
        className="form-style"
        placeholder="Enter member's email id"
        id="memberEmail"
        autoComplete="off"
        value={memberEmail}
        required
      />
      <Unicons.UilAt className="input-icon uil uil-at"  />
    </div>

      <Modal.Footer>
      <Button type='submit'  className="btn">
       Add
      </Button>
    </Modal.Footer>
      </form>
    </Modal.Body>
  </Modal>
    
        </> );
}
 
export default GroupMenu;