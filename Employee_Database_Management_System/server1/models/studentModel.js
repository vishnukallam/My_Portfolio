const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    rollNo:{type:Number,required:true,unique:true},
    fullName:{type:String,required:true},
    department:{type:String,required:true},
    cgpa:{type:Number,required:true}
})

module.exports= mongoose.model('Student',studentSchema)