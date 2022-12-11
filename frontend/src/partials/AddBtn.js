// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Badge from 'react-bootstrap/Badge';
// // import Tab from 'react-bootstrap/Tab';
// // import Tabs from 'react-bootstrap/Tabs';
// import * as Unicons from '@iconscout/react-unicons';
// import { useState,useEffect } from 'react';
// import { useExpenseContext } from '../context/ExpenseContext';
// import { useParams } from 'react-router-dom';
// import { useAuthContext } from '../hooks/useAuthContext';

// const AddBtn = () => {
//   const { user } = useAuthContext()
//   const { groups,setGroups } = useExpenseContext()
//   let { id } = useParams();
  
//   const [groupData,setGroupData] = useState(groups.filter(group=>group._id===id))

//   let today = new Date()
//   let currDate = today.getFullYear() + '-' + parseInt(today.getMonth() + 1) + '-' + today.getDate()


//   const [currAmount, setAmount] = useState(0);
//   const [title, setTitle] = useState("");

//   const [category, setCategory] = useState("General");
//   const [date, setDate] = useState(currDate);

//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);


//   const [memberName, setMemberName] = useState("")
//   const [memberEmail, setMemberEmail] = useState("")
//   const [showMember, setShowMember] = useState(false);
//   const handleCloseMember = () => setShowMember(false);
//   const handleShowMember = () => setShowMember(true);

//   useEffect(()=>{
//     // console.log("useeffect called")
//     // const fetchGroupData[0] = async () => {
//     //   const response = await fetch('/dashboard/groupData[0]/'+id,{
//     //     headers:{
//     //       'Authorization':`Bearer ${user.token}`
//     //     }
//     //   })

//     //   const json = await response.json()

//     //   if(response.ok){
//     //     console.log(json)
//     //     setGroupData[0](json)
//     //   }
//     // }
  

//     // if (user) {
//     //   fetchGroupData[0]()

//     // }
//    // setGroupData[0](groups.filter(group=>group._id===id))
// },[groups,groupData])


//  //Add expense
//   const handleSubmit=async(e)=>{
//     e.preventDefault()
//     let temp=groups.filter(g=>g._id===id)
//     const newExpense = {amount:temp[0].amount+parseInt(currAmount),
//       groupExpenses:[...temp[0].groupExpenses,{title,category,date,amount:parseInt(currAmount)}],
//       members:temp[0].members.map(member=> {return {...member,groupBalance:member.groupBalance+currAmount/temp[0].members.length}})
//     }

//       console.log('from updated Group:',newExpense)
//       if(!user){
//         console.log("You must be logged in")
//        }
//        const response = await fetch('/dashboard/groups/expense/'+id,{
//          method:'PATCH',
//          body:JSON.stringify(newExpense),
//          headers:{
//            'Content-Type': 'application/json',
//            'Authorization': `Bearer ${user.token}`
//          }
//        })
   
//        const json = await response.json()
//        if(response.ok){
//         setGroups(groups.map(group=>{
//           if(group._id===id){
//             return {...group, json }
//                         }else{
//             return group
//           }
//         }))
    
//         setAmount(0)
//         setTitle('')
//         setCategory("General")
//         setDate(currDate)
//         handleClose()
    
//        }

//   }


//   const addMember=async (e)=>{
//     e.preventDefault()
//     if(!user){
//      console.log("You must be logged in")
//     }
//     const memberDetails={memberName,memberEmail,groupBalance:0}
//     const response = await fetch('/dashboard/groups/'+id,{
//       method:'PATCH',
//       body:JSON.stringify(memberDetails),
//       headers:{
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${user.token}`
//       }
//     })

//     const json = await response.json()
//     if(response.ok){
//       setShowMember(false);
//       console.log("From json",json)
//       setGroups(groups.map(group=>{
//         if(group._id===id){
//           return {...group, json}
//         }else{
//           return group
//         }
//       }))
//       setMemberEmail('')
//       setMemberName('')
//     }


//   }
//     return ( 
//     <>
//         <DropdownButton drop="start" id="dropdown-basic-button" title="+ Create " className='m-2'>
//           <Dropdown.Item href="" onClick={handleShow}><Unicons.UilReceiptAlt   /> Add Expense</Dropdown.Item>
//           <Dropdown.Item href=""  onClick={handleShowMember}><Unicons.UilUsersAlt  /> Add Member</Dropdown.Item>
//         </DropdownButton>

        
//       <Modal className='myModal'  show={show} onHide={handleClose}>
//       <div >
//       <Modal.Header closeButton>
//         <Modal.Title>Add an expense</Modal.Title>
//       </Modal.Header>
//       </div>
//       <Modal.Body >
//         <form onSubmit={handleSubmit}>
//             <div className="form-group">
//             <input
//               type="number"
//               name="amount"
//               onChange={(e)=>{setAmount(e.target.value)}}
//               value={currAmount}
//               className="form-style"
//               placeholder="0"
//               id="num"
//               autoComplete="off"
//             />
//             <Unicons.UilRupeeSign className="input-icon uil uil-at"  />
//           </div>
//           <div className="form-group mt-3">
//           <input
//             type="text"
//             name="title"
//             onChange={(e)=>{setTitle(e.target.value)}}
//             value={title}
//             className="form-style"
//             placeholder="what was this expense for"
//             id="expenseFor"
//             autoComplete="off"
//           />
//           <Unicons.UilReceipt  className="input-icon uil uil-at"  />
//         </div>
//         <div className="form-group mt-3">
//         <input
//           type="date"
//           name="date"
//           onChange={(e)=>{setDate(e.target.value)}}
//           value={date}
//           className="form-style"
   
//           id="date"
//           autoComplete="off"
//           pattern="\d{2}/\d{2}/\d{4}" 
//         />
//         <Unicons.UilCalender  className="input-icon uil uil-at"  />
//       </div>
//         <Form.Group
//         className="mb-3 mt-3"
//         controlId="exampleForm.ControlTextarea1"
//       >
//       <Form.Label>Category:</Form.Label>
//       <Col  sm={3} md={3} lg={4} xl={4}>
//       <select className="form-select form-style"    onChange={(e)=>{setCategory(e.target.value)}}
//       aria-label="Default select example">
//       <option  value={category} >General</option>
//       <option value="Food">Food</option>
//       <option value="Sports">Sports</option>
//       <option value="Misc">Misc</option>
//     </select>
//       </Col>

//       <div>
//       <br/>
//       <p>Split:</p>
//       {groupData[0].members.length>0 && groupData[0].members.map(member=>
//         <Button key={member.memberEmail} variant="primary" className='m-1 equally'>
//           {member.memberName} <Badge bg="secondary">&#8377; {currAmount/groupData[0].members.length}</Badge>
//            <span className="visually-hidden">unread messages</span>
//         </Button>)}

//       </div>
//         </Form.Group>
//         <Modal.Footer>

//         <Button type='submit'  className="btn">
//           Add expense
//         </Button>
//       </Modal.Footer>
//         </form>
//       </Modal.Body>
//     </Modal>



   
//     <Modal className='myModal'  show={showMember} onHide={handleCloseMember}>
//     <div >
//     <Modal.Header closeButton>
//       <Modal.Title>Add a member</Modal.Title>
//     </Modal.Header>
//     </div>
//     <Modal.Body >
//       <form onSubmit={addMember}>
//       <div className="form-group mt-3">
//       <input
//           onChange={(e)=>{setMemberName(e.target.value)}}
//           type="text"
//           name="memberName"
//           className="form-style"
//           placeholder="Member Name"
//           id="memberName"
//           autoComplete="off"
//           value={memberName}
//           required
//       />
//       <Unicons.UilUser className="input-icon uil uil-at"  />
//       </div>
//       <div className="form-group mt-3">
//       <input
//         onChange={(e)=>{setMemberEmail(e.target.value)}}
//         type="email"
//         name="memberEmail"
//         className="form-style"
//         placeholder="Enter member's email id"
//         id="memberEmail"
//         autoComplete="off"
//         value={memberEmail}
//         required
//       />
//       <Unicons.UilAt className="input-icon uil uil-at"  />
//     </div>

//       <Modal.Footer>
//       <Button type='submit'  className="btn">
//        Add
//       </Button>
//     </Modal.Footer>
//       </form>
//     </Modal.Body>
//   </Modal>
    
//     </>
//   );
// }

 
// export default AddBtn;