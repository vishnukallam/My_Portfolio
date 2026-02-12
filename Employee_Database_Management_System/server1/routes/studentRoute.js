const mongoose = require('mongoose')
const express = require('express')
const Student = require('../models/studentModel')
const router = express.Router()

// 📌 Connecting MongoDB to the NODE Application
mongoose.connect('mongodb://localhost:27017/projectdb')
    .then(()=>console.warn('MongoDB Connected !!'))
    .catch(()=>console.error('Error while connection !!'))

router.post('/add-student',async(req,res)=>{
    try{
        const {rollNo,fullName,department,cgpa} = req.body
        const student = new Student({rollNo,fullName,department,cgpa})
        await student.save()
        res.json({status:true,message:"Don't sleep now !!"})
    }catch(err){
        console.log(err)
        res.json({status:false,message:'Error while inserting record !!'})
    }
})

router.get('/get-students',async(req,res)=>{
    try{
        const students = await Student.find()
        res.json({status:true,message:students})
    }catch(err){
        res.json({status:false,message:'Error while getting students !!'})
    }
})

router.get('/get-student/:rollNo',async(req,res)=>{
    const rollNo = req.params.rollNo
    try{
        const student = await Student.findOne({rollNo:rollNo})
        if(student) res.json({status:true,message:student})
        else res.json({status:false,message:'Student not found !!'})
    }catch(err){
        res.json({status:false,message:'Error while getting students !!'})
    }
})

router.put('/update-student/:id',async(req,res)=>{
    try{
        const id = req.params.id
        const student = await Student.findByIdAndUpdate(id,req.body,{new:true})
        if(student){
            res.json({status:true,message:"Student updated !!"})
        } else{
            res.json({status:false,message:"Student not found !!"})
        }
    }catch(error){
        res.json({status:false,message:"Error while updating..."})
    }
})

router.delete('/delete-student/:id',async(req,res)=>{
    try{
        // 📌 findByIdAndDelete(id)
        // This method returns the document object
        const student = await Student.findByIdAndDelete(req.params.id)
        if(student){
            res.json({status:true,message:"Student deleted !!"})
        } else{
            res.json({staus:false,message:"Student not found !!"})
        }
    }catch(err){
        res.json({status:false,message:"Internal server error."})
    }
})

module.exports = router