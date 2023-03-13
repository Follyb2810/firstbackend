import React, { useEffect, useState } from 'react'
import { Accordion, Badge, Button, Card } from 'react-bootstrap'
import MainScreen from './componet/MainScreen'
import { Link } from 'react-router-dom'
// import note from './componet/Note'
import axios from "axios"
const Mynote = () => {
  const [note,setNote]=useState([])
   const handleDelete=()=>{
    if(window.confirm("aare you sure")){
       
    }
   }
   const fetchNote= async()=>{
      const {data} = await axios.get(`/api/note`)
      // console.log(data)
      setNote(data);
   }
  //  console.log(note)
   useEffect(()=>{
fetchNote()
   },[])
  return (
    <div>
      <MainScreen title="babatunde" children="lorem lorem">
        <Link>
        <Button style={{marginLeft:10,}} size="lg">Create new Note</Button></Link>
        {
          note.map(a=>(
        //     <Accordion defaultActiveKey='0'>
        //         <Card  style={{margin:10}}>
        //     <Card.Header style={{display:"flex"}}>
        //        {/* <Accordion.Toggle variant="link"  eventKey='1'> */}
        //       <span
        //       style={{
        //         color:"black",
        //         textDecoration:"none",
        //         flex:1,
        //         cursor:"pointer",
        //         alignSelf:"center",
        //         fontSize:"18"
        //       }}
        //       >
                
        //         {/* <Accordion.Toggle  eventKey='0' > */}
        //         {/* <Accordion.Toggle  eventKey='0' as={Card.Text} variant="link"> */}
        //           {a.title}
        //         {/* </Accordion.Toggle> */}
        //         </span>
        //         {/* </Accordion.Toggle> */}
        //     <div>
        //       {/* <diV>edit</diV> */}
        //       <Button href={`/note/${note.id}`}>Edit</Button>
        //       <Button variant='danger' className='mx-2'
        //       onClick={()=>handleDelete(note.id)}
        //       >Delete</Button>
        //     </div>
        //     </Card.Header>
        //     <Accordion.Collapse eventKey="1">
        //     <Card.Body>
        //       <h4> <Badge variant="success">Category:{a.category}</Badge></h4>
        // <blockquote className="blockquote mb-0">
        //   <p>
        //    {a.content}
        //   </p>
        //   <footer className="blockquote-footer">
        //     created on date 
        //   </footer>
        // </blockquote>
        //    </Card.Body>
        //    </Accordion.Collapse>
        //         </Card>
        //   </Accordion>
        <Accordion defaultActiveKey="0" key={a .id}>
      <Accordion.Item eventKey="0">
        <Accordion.Header> 
        <span
              style={{
                color:"black",
                textDecoration:"none",
                flex:1,
                cursor:"pointer",
                alignSelf:"center",
                fontSize:"18"
              }}
              >
          {a.name}
          </span>
          <Button href={`/note/${note.id}`}>Edit</Button>
               <Button variant='danger' className='mx-2'
              onClick={()=>handleDelete(note.id)}
              >Delete</Button>
          </Accordion.Header>
        <Accordion.Body>
        <h4> <Badge variant="success">Category:{a.category}</Badge></h4>
        {a.job}
        </Accordion.Body>
      </Accordion.Item>
     
    </Accordion>
          ))
        }  
    </MainScreen>
    </div>
  )
}

export default Mynote
