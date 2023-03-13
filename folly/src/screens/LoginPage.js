import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { Component } from './bootstrap'
import MainScreen from '../componet/MainScreen'
import Loading from '../componet/Loading'
import { Button, Col, Form, Row } from 'react-bootstrap'
import "./Form.css"
import axios from 'axios'
import ErrorMessage from '../componet/ErrorMessage'
const LoginPage = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState(false)
  const [loading,setLoading]=useState(false)
  // "name": "folly",
  // "email": "ola@odgmail.com",
  // "email":"ola@odgmail.com",
    // "password":"aaa"
  const submitHandler=async(e)=>{
    e.preventDefault()
    // console.log(email,password);
    try{
     const config ={
      headers:{
        "Content-type":"application/json"
      }
     }
     setLoading(true)
     const {data} = await axios.post("api/login",{email,password},config)
     localStorage.setItem("userInfo",JSON.stringify(data))
     console.log(data );
     setLoading(false)
    }catch(err){
      setError(error.response.data.message)
      setLoading(false)
    }
  }
  return (
    <MainScreen title="Login"> 
    {/* {loading && <Loading/>} */}
      <div className="loginContainer">
    {/* {loading} */}
    {/* <ErrorMessage>{error}</ErrorMessage> */}
    {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
    {loading&&<Loading />}
      <Form  onSubmit={submitHandler}>
      <Form.Group  controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group> 
      <Form.Group  controlId="formBasicEmail">
        <Form.Label>password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <Row className="py-3">
      <Col>
      New Customer ? <Link to="/register">Register Here</Link>
      </Col>
    </Row>
      </div>
    </MainScreen>
  )
}

export default LoginPage
