import React, { useState } from 'react'
import MainScreen from '../componet/MainScreen'
import { Button, Form } from "react-bootstrap"
import ErrorMessage from '../componet/ErrorMessage'
import axios from 'axios'
import Loading from '../componet/Loading'

const RegisterPage = () => {
  const [email,setEmail]=useState("")
  const [name,setName]=useState("")
  const [pic,setPic]=useState("")
  const [password,setPassword]=useState("")
  const [confirmPassword,setComfirmPassword]=useState("")
  const [message,setMessage]=useState("")
  const [error,setError]=useState("")
  const [loading,setLoading]=useState("")
  // const [pic]=useState("")
  const submitHandler=async(e)=>{
    e.preventDefault()
    if(password !== confirmPassword){
      setMessage("password do not match")
    }else{
      setMessage(null)
      try{
             const config={
              header:{
                "Content-type":"application/json",
              }
             }
             setLoading(true)
          const {data} = await axios.post("/api",{name,pic,password,email},config)
          setLoading(false)
          console.log(data)
          localStorage.setItem("user",JSON.stringify(data))
      }catch(error){
            setError(error.response.data.message)
      }
    }

  }
  return (
    <MainScreen title="Register">
      <div className="loginContainer">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {message && <ErrorMessage variant='danger'>{message}</ErrorMessage>}
        {loading && <Loading/>}
       <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="confirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password"
        value={confirmPassword}
        onChange={(e)=>setComfirmPassword(e.target.value)}
        placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="confirmpic">
        <Form.Label>upload img</Form.Label>
        <Form.Control type="image/png"
        value={pic}
        label="upload Profile"
        onChange={(e)=>setPic(e.target.value)}
        custom
        placeholder="picture" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
    </div>
    </MainScreen>
  )
}

export default RegisterPage
