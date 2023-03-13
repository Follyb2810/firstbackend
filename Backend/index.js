const express= require("express")
const dotenv = require("dotenv").config
const dexentric=require( "./data/note")
const connectDb=require("./config/db")
const userRouter = require("./routes/userRoutes")
const bodyParser = require('body-parser');
const { notFound,errorHandler } = require("./errorMiddleware/errorMiddleware")
const app = express()

 connectDb()
//  app.use(express.json())
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 app.get("/",(req,res)=>{
     res.send("folly is ")
    })
    app.get("/api/note",(req,res)=>{
        // res.send(dexentric)
        // res.send(dexentric)
        // res.send(dexentric)
        res.json(dexentric)
    })
    app.get('/api/note/:id',(req,res)=>{
        const note = dexentric.find((n)=> n.id === req.params.id)
        res.send(note)
        // console.log(note)
        // console.log(req.params)
    })
    app.use("/api",userRouter)
    app.use(errorHandler)
    app.use(notFound)

    
    const Port = process.env.PORT || 5000
app.listen(Port,console.log(`listen to port ${Port}`))