const mongoose =require('mongoose')
mongoose.set('strictQuery', false);
// const dotenv = require("dotenv").config


// const mongoose = require('mongoose');
// const { MONGODB_URI } = process.env;

// const connectDb = mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to database');
//   })
//   .catch((error) => {
//     console.log('Error connecting to database: ', error);
//   });

const connectDb = async()=>{
    try{
        const con = await mongoose.connect(`mongodb+srv://follyb:Alabi2810@cluster0.han9mga.mongodb.net/?retryWrites=true&w=majority`,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            // useCreateIndex: true,
        })
        console.log(`mongodb connect: ${con.connection.host}`)
    }catch(error){
  console.error(error)
  process.exit()
    }
}
module.exports =connectDb