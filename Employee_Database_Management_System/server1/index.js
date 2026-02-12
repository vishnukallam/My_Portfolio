// const express = require('express')
// const cors = require('cors')
// const bodyParser = require('body-parser')
// const studentRoute = require('../server1/routes/studentRoute')

// const server = express()
// server.use(cors())
// server.use(bodyParser.json())
// server.use('/api',studentRoute)


// server.get("/",(req,res)=>{
//     const student={
//         name:"Surya",dep:"CSE",cgpa:5
//     }
//     res.json(student)
// })

// server.post("/login",(req,res)=>{
//     const {username,password} = req.body
//     if(username==='admin@mail.com' && password==="admin"){
//         res.json({status:true,message:"Login successfull !!"})
//     } else{
//         res.json({status:false,message:"Login failed !!"})
//     }

// })

// server.get("/user",(req,res)=>{
//     res.json({status:true,message:"This is from /user Route"})
// })

// server.post("/register",(request,response)=>{
//     const {fullName,mobileNo,emailAddress,password} = request.body
//     if(fullName.length <6){
//         response.json({
//             status:false,
//             message:"Fullname is violated rules 🤣"
//         })
//     }
//     else if(mobileNo.length !==10){
//         response.json({
//             status:false,
//             message:"Invalid mobile no ❌"
//         })
//     }
//     else if(!emailAddress.includes('.') || !emailAddress.includes('@')){
//         response.json({
//             status:false,
//             message:'Invalid email address 🫨'
//         })
//     }
//     else if(password.length < 8){
//         response.json({
//             status:false,
//             message:'Invalid password 🙏🙏🙏'
//         })
//     }
//     else{
//         response.json({
//             status:true,
//             message:'User registered successfully ✔️👏'
//         })
//     }
// })



// server.listen(8055,()=>{
//     console.log('Server started listening on 8055')
// })



const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const employeeRoute = require('./routes/employeeRoute');

const server = express();
server.use(cors());
server.use(bodyParser.json());
server.use('/api', employeeRoute);

mongoose.connect('mongodb://localhost:27017/employeeDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.log("MongoDB connection error:", err));



server.listen(8055, () => {
    console.log('Server started listening on port 8055');
});
